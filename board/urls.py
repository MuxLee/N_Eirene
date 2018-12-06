from django.conf.urls import url
from board.views import BoardList, BoardDetail
from Eirene import views

app_name = 'board'

urlpatterns = [
    #mobile url
    url(r'^list/$', BoardList.as_view(), name='list'),
    url(r'^borad/(?P<slug>[-\w]+)/$', BoardDetail.as_view(), name='board_detail'),
]
