from django.urls import path
from . import views


urlpatterns = [
    path('', views.web1, name='home' ),
    path('search/', views.web2, name='searchbar')
    
]