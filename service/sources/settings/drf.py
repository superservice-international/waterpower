REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
      'rest_framework_jwt.authentication.JSONWebTokenAuthentication',
      'rest_framework.authentication.BasicAuthentication',
      'rest_framework.authentication.TokenAuthentication',
      # 'rest_framework.authentication.SessionAuthentication',
      ),
    'DEFAULT_FILTER_BACKENDS': ('rest_framework.filters.DjangoFilterBackend',)
    }
