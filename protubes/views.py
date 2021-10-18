from django.shortcuts import render
from .models import Protube
# Create your views here.
def web1(request):
    return render(request,'index.html')
    

