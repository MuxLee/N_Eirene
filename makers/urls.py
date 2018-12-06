from django.conf.urls import url
from makers.views import PostList, PostDetail
from Eirene.views import Home

app_name = 'makers_app'

urlpatterns = [
    url(r'^$', Home.as_view(), name='index'),
    url(r'^post/$', PostList.as_view(), name='post_list'),
    url(r'^post/(?P<slug>[-\w]+)/$', PostDetail.as_view(), name='post_detail'),
]
