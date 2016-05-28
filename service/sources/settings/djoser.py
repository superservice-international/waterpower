from os import environ


DJOSER = {
    'DOMAIN': environ.get('DJANGO_DJOSER_DOMAIN', 'localhost:3000'),
    'SITE_NAME': environ.get('DJANGO_DJOSER_SITE_NAME', 'sample app'),
    'PASSWORD_RESET_CONFIRM_URL': '#/start/password/reset/confirm/{uid}/{token}',
    'ACTIVATION_URL': '#/start/activate/{uid}/{token}',
    'SEND_ACTIVATION_EMAIL': True,
    }
