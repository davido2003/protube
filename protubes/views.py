from django.shortcuts import render
from .models import Protube
# Create your views here.
def web1(request):
    return render(request,'index.html')

def web2(request):
    if request.method  == 'GET':
        search = request.GET.get('search')
        post = Protube.objects.all().filter(title=search,video=search, link=search)
    return render(request,'search.html', {'post':post})