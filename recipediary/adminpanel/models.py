from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager


# 🔹 User Manager
class UserManager(BaseUserManager):
    def create_user(self, email, password=None):
        if not email:
            raise ValueError("Users must have an email address")

        email = self.normalize_email(email)
        user = self.model(email=email)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):
        user = self.create_user(email, password)
        user.is_admin = True
        user.is_superuser = True   # ✅ fixed
        user.save(using=self._db)
        return user


# 🔹 User Model
class User(AbstractBaseUser):
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email   # ✅ fixed


# 🔹 Recipe Model
class Recipe(models.Model):

    choices = [
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard')
    ]

    title = models.CharField(max_length=200)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    # 👉 for now use URL (easy)
    image = models.FileField(upload_to='', blank=True)

    time = models.CharField(max_length=50)
    level = models.CharField(max_length=50, choices=choices)
    views = models.IntegerField(default=0)

    ingredients = models.TextField()
    steps = models.TextField()

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title



# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager 


# class Recipe(models.Model):
        
#     choices = [
#         ('Easy', 'Easy'),
#         ('Medium', 'Medium'),
#         ('Hard', 'Hard')
#     ]


#     title = models.CharField(max_length=200)
#     author = models.ForeignKey('User', on_delete=models.CASCADE)
#     image = models.FileField()
#     time = models.CharField(max_length=50)
#     level = models.CharField(max_length=50, choices=choices)
#     views = models.IntegerField(default=0)

#     ingredients = models.TextField()   
#     steps = models.TextField()         

#     created_at = models.DateTimeField(auto_now_add=True)



# class UserManager(BaseUserManager): 
#     def create_user(self, email, password=None): 
#         if not email: 
#             raise ValueError("Users must have an email address") 
#         email = self.normalize_email(email) 
#         user = self.model(email=email) 
#         user.set_password(password) 
#         user.save(using=self._db) 
#         return user 
 
#     def create_superuser(self, email, password): 
#         user = self.create_user(email, password) 
#         user.is_admin = True 
#         User.is_superuser = True 
#         user.save(using=self._db) 
#         return user 
 
# class User(AbstractBaseUser): 
#     email = models.EmailField(unique=True) 
#     name = models.CharField(max_length =255) 
#     profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)

#     is_active = models.BooleanField(default=True) 
#     is_admin = models.BooleanField(default=False) 
#     objects = UserManager() 
 
#     USERNAME_FIELD = 'email'



#     def __str__(self):
#         return self.title