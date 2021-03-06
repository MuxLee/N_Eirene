from django.conf.urls import url
from jus.views import PostList, PostDetail
from Eirene.views import Home

app_name = 'jus'

urlpatterns = [
    url(r'^$', Home.as_view(), name='index'),
    url(r'^post/$', PostList.as_view(), name='post_list'),
    url(r'^post/(?P<slug>[-\w]+)/$', PostDetail.as_view(), name='post_detail'),
]
