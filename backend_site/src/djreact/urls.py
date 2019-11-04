from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
router = routers.DefaultRouter()
from blog.views import Data_blog_api
router.register('', Data_blog_api)

urlpatterns = [
    path('blog_api/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
]
