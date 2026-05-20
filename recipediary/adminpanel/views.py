
from django.contrib.auth.decorators import login_required
from urllib import request

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from django.http import JsonResponse
from .models import User
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.status import HTTP_200_OK, HTTP_400_BAD_REQUEST, HTTP_404_NOT_FOUND
from .models import Recipe
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import check_password
from .serializer import RecipeSerializer
from django.contrib.auth import login
from django.shortcuts import redirect
from django.contrib.auth import logout

from django.db.models import Count, Max
from django.shortcuts import get_object_or_404, redirect

from django.core.paginator import Paginator
from django.db.models import Count, Q
from django.views.decorators.cache import never_cache


def AdminLogout(request):
    logout(request)
    return redirect('/') 


def admin_required(view_func):
    def wrapper(request, *args, **kwargs):
        if not request.user.is_authenticated:
            return redirect('/')
        
        if not request.user.is_admin:
            return redirect('/')   # block normal users
        
        return view_func(request, *args, **kwargs)
    
    return wrapper


@never_cache
def Login(request):

    #  If already logged in, don't show login page again
    if request.user.is_authenticated and request.user.is_admin:
        return redirect('dashboard')

    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        user = authenticate(request, username=email, password=password)

        if user is not None:
            if user.is_admin:
                login(request, user)
                return redirect('dashboard')
            else:
                return render(request, 'login.html', {
                    'error': 'You are not an admin'
                })

        return render(request, 'login.html', {
            'error': 'Invalid email or password'
        })

    return render(request, 'login.html')


    

# def Login(request):

#     if request.method == 'POST':
#         email = request.POST.get('email')
#         password = request.POST.get('password')

#         user = authenticate(request, email=email, password=password)

#         if user is not None and user.is_admin:
#             login(request, user)
#             return redirect('dashboard')
#         else:
#             return render(request, 'login.html', {
#                 'error': 'Invalid credentials or not admin'
#             })

#     return render(request,'login.html')


    # if request.method == 'POST':
    #     email = request.POST['email']
    #     password = request.POST['password']

       
    #     user = authenticate(request,   email=  email, password=password)

    #     if user is not None and user.is_admin:
    #         login(request, user)
    #         return redirect('dashboard')
        
@never_cache        
@admin_required
@login_required(login_url='/')
def Dashboard(request):
        total_users = User.objects.count()
        total_recipes = Recipe.objects.count()
        active_users = User.objects.filter(is_active=True).count()

        most_viewed = Recipe.objects.aggregate(max_views=Max('views'))['max_views'] or 0
        
        recent_recipes = Recipe.objects.select_related('author').order_by('-created_at')[:5]
        
        context = {
        'total_users': total_users,
        'total_recipes': total_recipes,
        'active_users': active_users,
        'most_viewed': most_viewed,
        'recent_recipes': recent_recipes
    }
        return render(request, 'dashboard.html', context)


# def Manageusers(request):
#     users = User.objects.all().annotate(recipe_count=Count('recipe'))
    
#     return render(request, 'manage_users.html', {
#         'users': users
#     })


@never_cache
@admin_required
@login_required(login_url='/')
def ToggleUser(request, id):
    if request.method == "POST":
        user = get_object_or_404(User, id=id)

        user.is_active = not user.is_active
        user.save()

    return redirect('user_profile', id=id) 


# def ToggleUser(request, id):
#     user = get_object_or_404(User, id=id)

#     user.is_active = not user.is_active
#     user.save()

#     return redirect('manage_users')


@never_cache
@admin_required
@login_required(login_url='/')
def Manageusers(request):
    query = request.GET.get('q', '')

    users = User.objects.all().annotate(recipe_count=Count('recipe'))

    #  SEARCH LOGIC
    if query:
        users = users.filter(
            Q(name__icontains=query) |
            Q(email__icontains=query)
        )

    #  PAGINATION (5 per page)
    paginator = Paginator(users, 5)
    page_number = request.GET.get('page')
    users_page = paginator.get_page(page_number)

    context = {
        'users': users_page,
        'query': query
    }

    return render(request, 'manage_users.html', context)

@never_cache
@admin_required
@login_required(login_url='/')
def ManageRecipes(request):
    query = request.GET.get('q', '')

    recipes = Recipe.objects.select_related('author').order_by('-created_at')

    #  SEARCH
    if query:
        recipes = recipes.filter(
            Q(title__icontains=query) |
            Q(author__name__icontains=query)
        )

    #  PAGINATION
    paginator = Paginator(recipes, 5)
    page_number = request.GET.get('page')
    recipes_page = paginator.get_page(page_number)

    context = {
        'recipes': recipes_page,
        'query': query
    }

    return render(request, 'manage_recipes.html', context)


@never_cache
@admin_required
@login_required(login_url='/')
def DeleteRecipeAdmin(request, id):
    recipe = get_object_or_404(Recipe, id=id)
    recipe.delete()
    return redirect('manage_recipes')


@never_cache
@admin_required
@login_required(login_url='/')
def UserProfile(request, id):
    user = get_object_or_404(User, id=id)
    recipes = Recipe.objects.filter(author=user)
    profile_pic = user.profile_pic.url if user.profile_pic else None

    return render(request, 'user_profile.html', {
        'user_data': user,
        'recipes': recipes,
        'profile_pic': profile_pic
    })



@never_cache
@admin_required
@login_required(login_url='/')
def RecipeDetails(request, id):
    recipe = get_object_or_404(Recipe, id=id)

    return render(request, 'recipe_details.html', {
        'recipe': recipe
    })



@never_cache
@admin_required
@login_required(login_url='/')
def MostViewed(request):
    recipes = Recipe.objects.select_related('author').order_by('-views')[:10]

    return render(request, 'most_viewed.html', {
        'recipes': recipes
    })












# signup 

@api_view(['POST'])
@permission_classes((AllowAny,))

def Signup(request):
        email  = request.data.get("email")
        password = request.data.get("password")
        name = request.data.get("name")

        if not name or not email or not password:
            return Response({'message':'All fields are required'})
        if User.objects.filter(email=email).exists():
            return  JsonResponse({'message':'Email already exist'})
        user = User.objects.create_user(email=email,password=password)
        user.name = name
        user.save()
        return JsonResponse({'message':'user created successsfully'} ,status = 200)


# Login

@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))

def Userlogin(request):
    email = request.data.get("email")
    password = request.data.get("password")

    if email is None or password is None:
        return Response({'error': 'Please provide both email and password'},
                        status=HTTP_400_BAD_REQUEST)
    user = authenticate(email=email, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},status=HTTP_200_OK)


# home

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def Home(request):
    recipes = Recipe.objects.all().order_by('-created_at')
    serializer = RecipeSerializer(recipes, many=True) 
    print(serializer)  # 🔥 debug
    return Response(serializer.data)

#my recipes

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def MyRecipes(request):
    recipes = Recipe.objects.filter(author=request.user)
    serializer = RecipeSerializer(recipes, many=True)
    return Response(serializer.data)



# search api

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def SearchAPI(request):
    query = request.GET.get('q')

    if not query:
        return Response({"message": "Please provide search keyword"}, status=400)

    recipes = (Recipe.objects.filter(
        title__icontains=query
    ) | Recipe.objects.filter(
        ingredients__icontains=query)
    ).distinct()

    data = []
    for recipe in recipes:
        data.append({
            "id": recipe.id,
            "title": recipe.title,
            "author": recipe.author.name,
            "image": recipe.image.url if recipe.image else None,
            "time": recipe.time,
            "level": recipe.level,
            "views": recipe.views
        })

    return Response(data)


#toprecipeAPI
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def TopRecipesAPI(request):
    recipes = Recipe.objects.all().order_by('-views')[:5]

    data = []
    for recipe in recipes:
        data.append({
            "id": recipe.id,
            "title": recipe.title,
            "author": recipe.author.name,
            "views": recipe.views
        })

    return Response(data)




# recipe details

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def RecipeDetailsAPI(request, id):
    try:
        recipe = Recipe.objects.get(id=id)
    except Recipe.DoesNotExist:
        return Response({"error": "Recipe not found"}, status=404)

    # 🔥 Increase views count
    recipe.views += 1
    recipe.save()

    data = {
        "id": recipe.id,
        "title": recipe.title,
        "author": recipe.author.name,
        "image": request.build_absolute_uri(recipe.image.url) if recipe.image else None,
        "time": recipe.time,
        "level": recipe.level,
        "views": recipe.views,
        "ingredients": recipe.ingredients,
        "steps": recipe.steps,
        "created_at": recipe.created_at
    }

    return Response(data)


# create recipe

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def CreateRecipeAPI(request):
    try:
        title = request.data.get('title')
        time = request.data.get('time')
        level = request.data.get('level')
        ingredients = request.data.get('ingredients')
        steps = request.data.get('steps')
        image = request.FILES.get('image')

        # ✅ Validation
        if not title or not ingredients or not steps:
            return Response({"error": "Required fields missing"}, status=400)

        # ✅ Create recipe
        recipe = Recipe.objects.create(
            title=title,
            author=request.user,   # IMPORTANT
            image=image,
            time=time,
            level=level,
            ingredients=ingredients,
            steps=steps
        )

        return Response({
            "message": "Recipe created successfully",
            "id": recipe.id
        }, status=200)

    except Exception as e:
        return Response({
            "error": str(e)
        }, status=500)


# @api_view(['POST'])
# @permission_classes([IsAuthenticated])
# def CreateRecipeAPI(request):
#     print(request.data)
#     try:
#         title = request.data.get('title')
#         time = request.data.get('time')
#         level = request.data.get('level')
#         ingredients = request.data.get('ingredients')
#         steps = request.data.get('steps')
#         image = request.FILES.get('image')
#         views = request.data.get('views', 0)
#         auth = request.user.id

#         if not title or not ingredients or not steps:
#             return Response({"error": "Required fields missing"}, status=400)

#         recipe = Recipe.objects.create(
#             title=title,
#             author=request.user,
#             image=image,
#             time=time,
#             level=level,
#             ingredients=ingredients,
#             steps=steps
#         )

#         return Response({
#             "message": "Recipe created successfully",
#             "id": recipe.id
#         })

#     except Exception as e:
#         return Response({"error": str(e)}, status=500)
    

# edit recipe

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def EditRecipeAPI(request, id):
    try:
        recipe = Recipe.objects.get(id=id, author=request.user)
    except Recipe.DoesNotExist:
        return Response({"error": "Recipe not found or not authorized"}, status=404)

    # Get updated data
    title = request.data.get('title')
    time = request.data.get('time')
    level = request.data.get('level')
    ingredients = request.data.get('ingredients')
    steps = request.data.get('steps')
    image = request.FILES.get('image')

    # Update fields only if provided
    if title:
        recipe.title = title
    if time:
        recipe.time = time
    if level:
        recipe.level = level
    if ingredients:
        recipe.ingredients = ingredients
    if steps:
        recipe.steps = steps
    if image:
        recipe.image = image  # update image if new one uploaded

    recipe.save()

    return Response({
        "message": "Recipe updated successfully"
    })



#single recipeAPI
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def GetSingleRecipeAPI(request, id):
    try:
        recipe = Recipe.objects.get(id=id, author=request.user)
    except Recipe.DoesNotExist:
        return Response({"error": "Recipe not found"}, status=404)

    data = {
        "id": recipe.id,
        "title": recipe.title,
        "ingredients": recipe.ingredients,
        "steps": recipe.steps,
        "time": recipe.time,
        "level": recipe.level,
        "image": request.build_absolute_uri(recipe.image.url) if recipe.image else None
    }

    return Response(data)






# delete recipe

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def DeleteRecipeAPI(request, id):
    try:
        recipe = Recipe.objects.get(id=id, author=request.user)
    except Recipe.DoesNotExist:
        return Response({"error": "Recipe not found or not authorized"}, status=404)

    recipe.delete()

    return Response({
        "message": "Recipe deleted successfully"
    })


# profile 

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def ProfileAPI(request):
    user = request.user

    recipes = Recipe.objects.filter(author=user)

    recipe_list = []
    for recipe in recipes:
        recipe_list.append({
            "id": recipe.id,
            "title": recipe.title,
            "image": request.build_absolute_uri(recipe.image.url) if recipe.image else None,
            "time": recipe.time,
            "level": recipe.level,
            "views": recipe.views
        })

    data = {
        "name": user.name,
        "email": user.email,
        "profile_pic": request.build_absolute_uri(user.profile_pic.url) if user.profile_pic else None,
        "recipes": recipe_list
    }

    return Response(data)


# edit profile
@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def EditProfileAPI(request):
    user = request.user

    name = request.data.get("name")
    email = request.data.get("email")
    profile_pic = request.FILES.get("profile_pic")

    if name:
        user.name = name

    if email:
        user.email = email

    if profile_pic:
        user.profile_pic = profile_pic

    user.save()

    return Response({
        "message": "Profile updated successfully"
    })


# change password

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def ChangePasswordAPI(request):
    user = request.user

    old_password = request.data.get("old_password")
    new_password = request.data.get("new_password")

    # Check fields
    if not old_password or not new_password:
        return Response({"error": "Both old and new password are required"}, status=400)

    # Check old password
    if not user.check_password(old_password):
        return Response({"error": "Old password is incorrect"}, status=400)

    # Set new password
    user.set_password(new_password)
    user.save()

    return Response({
        "message": "Password changed successfully"
    })