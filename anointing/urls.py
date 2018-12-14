from django.conf.urls import url
from anointing.views import PostList, PostDetail
from Eirene.views import Home
from . import views

app_name = 'anointing'

urlpatterns = [
    url(r'^$', Home.as_view(), name='index'),
    url(r'^post/$', PostList.as_view(), name='post_list'),
    url(r'^post/(?P<pk>[0-9]+)/$', views.PostDetail, name='post_detail'),
]
