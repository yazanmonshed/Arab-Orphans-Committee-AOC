from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from django.conf  import settings  
from django.conf.urls.static import static
from blog.views import Data_blog_api
from faq.views import ViewApiFaq

router = routers.DefaultRouter()
router2 = routers.DefaultRouter()

router.register('', Data_blog_api)
router2.register('', ViewApiFaq)
urlpatterns = [
    path('faq_api/', include(router2.urls)),
    path('blog_api/', include(router.urls)),
    path('rest-auth/', include('rest_auth.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),
    path('accounts/', include('accounts.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) 
