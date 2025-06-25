from django.shortcuts import render
from django.http import HttpResponse 

# Create your views here.


def home(request): 
   return HttpResponse("This is Home Page")
   return HttpResponse("<h1>THis is a Home Page1</h1>")
def about(request): 
   return HttpResponse("This is About Page")
   return HttpResponse("<h1>This is a ABOuT Page1</h1>")
