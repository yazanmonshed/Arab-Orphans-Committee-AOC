from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf  import settings  
from django.conf.urls.static import static


router = routers.DefaultRouter()
from blog.views import Data_blog_api
router.register('', Data_blog_api)

urlpatterns = [
    path('blog_api/', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
