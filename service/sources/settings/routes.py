from django.conf.urls import include, url
from django.contrib import admin
from rest_framework.routers import DefaultRouter


API_ROOT = DefaultRouter()


urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    url(r'^api-auth/', include(
        'rest_framework.urls', namespace='rest_framework')),
    url(r'^-/', include(
        'components.account.urls', namespace='components_account')),
    url(r'^-/', include(API_ROOT.urls)),
]
