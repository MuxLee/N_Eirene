from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import FormView
from django.db.models import Q
from anointing.models import Post

# Create your views here.
class PostList(ListView):
    model = Post
    template_name = 'anointing/post_list.html'
    context_object_name = 'posts'
    paginate_by = 10

class PostDetail(DetailView):
    model = Post
