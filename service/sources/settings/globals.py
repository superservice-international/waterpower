import os
from sys import path

# ------------------------ ENVIRONMENT IMPORTS --------------------------------

SECRET_KEY = os.environ.get(
    'DJANGO_SECRET_KEY',
    "61x87zb)7p^-tnbcyiy*c89%28^m375wf*63o27=i3xs-v9#z@"
)

# ------------------------ ENVIRONMENT IMPORTS --------------------------------


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
path.append(BASE_DIR)

dirname = os.path.dirname
PROJECT_ROOT = dirname(dirname(dirname(os.path.abspath(__file__))))

SITE_ID = 1

ROOT_URLCONF = 'sources.settings.routes'
WSGI_APPLICATION = 'sources.wsgi.application'

# Application definition

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(PROJECT_ROOT, 'static')

SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
