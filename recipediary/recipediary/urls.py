from django.conf import settings
from django.urls import path
from adminpanel import views



from django.conf.urls.static import static
urlpatterns = [
    
    # ADMIN URLS
  path('', views.Login),
  path('dashboard/', views.Dashboard, name='dashboard'),
  path('manage_users/', views.Manageusers, name='manage_users'),
  path('manage_recipes/', views.ManageRecipes, name='manage_recipes'),
  path('user_profile/', views.UserProfile),
  path('recipe_details/<int:id>/', views.RecipeDetails, name='recipe_details'),
  path('most_viewed/', views.MostViewed),
  path('toggle-user/<int:id>/', views.ToggleUser, name='toggle_user'),
  path('delete-recipe-admin/<int:id>/', views.DeleteRecipeAdmin, name='delete_recipe_admin'),
  path('user_profile/<int:id>/', views.UserProfile, name='user_profile'),
  path('logout/', views.AdminLogout, name='logout'),


    # USER URLS
  path ('signup/', views.Signup),
  path ('login/', views.Userlogin),


  path ('home/' , views.Home),
  path('search/', views.SearchAPI),
  path('recipe/<int:id>/', views.RecipeDetailsAPI),


  path('create/', views.CreateRecipeAPI),
  path('edit/<int:id>/', views.EditRecipeAPI),
  path('recipe-edit/<int:id>/', views.GetSingleRecipeAPI),
  path('delete/<int:id>/', views.DeleteRecipeAPI),

  path('profile/', views.ProfileAPI),
  # path('profile/<int:id>/', views.ProfileAPI),
  path('change-password/', views.ChangePasswordAPI),  
  path('my-recipes/', views.MyRecipes),   
  path('edit-profile/', views.EditProfileAPI),
  path('top-recipes/', views.TopRecipesAPI),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)