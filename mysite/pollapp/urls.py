from django.urls import path
from . import views

app_name = 'pollapp'

urlpatterns = [
    path('' , views.index, name='index')
]
