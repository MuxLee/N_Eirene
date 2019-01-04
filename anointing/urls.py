from django.conf.urls import url
from anointing.views import PostList, PostDetail
from Eirene.views import Home
from . import views


app_name = 'anointing'

urlpatterns = [
    url(r'^$', Home.as_view(), name='index'),
    url(r'^post/$', PostList.as_view(), name='post_list'),
    url(r'^(?P<slug>[-\w]+)/$', PostDetail.as_view(), name='post_detail'),
]
