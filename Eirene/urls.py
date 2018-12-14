"""Eirene URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.conf import settings
from Eirene.views import Home, SearchAll
from . import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', Home.as_view(), name='index'),
    url(r'^$', SearchAll.as_view(), name='search_all'),
    url(r'^board/', include('board.urls', namespace='board')),
    url(r'^jus/', include('jus.urls', namespace='jus')),
    url(r'^makers/', include('makers.urls', namespace='makers')),
    url(r'^anointing/', include('anointing.urls', namespace='anointing')),
    url(r'^login/', views.login, name='login'),
    url(r'^signup/', views.signup, name='signup'),
    url(r'^signup_done/', views.signup_done, name='signup_done'),
]
urlpatterns += static('/media/', document_root=settings.MEDIA_ROOT)
