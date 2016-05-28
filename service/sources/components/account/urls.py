from django.conf.urls import include, url
from settings.routes import API_ROOT


# CUSTOM ROUTES
urlpatterns = (
    url(r'^account/', include('djoser.urls')),
    url(
        r'^account/authenticate/',
        'rest_framework_jwt.views.obtain_jwt_token'
    ),
    url(
        r'^account/reauthenticate/',
        'rest_framework_jwt.views.refresh_jwt_token'
    ),
)
