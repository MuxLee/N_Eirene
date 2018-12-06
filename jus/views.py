from django.shortcuts import render
from django.views.generic import ListView, DetailView
from django.views.generic.edit import FormView
from django.db.models import Q
from jus.models import Post

# Create your views here.
class PostList(ListView):
    model = Post
    template_name = 'jus/post_list.html'
    context_object_name = 'posts'
    paginate_by = 10

class PostDetail(DetailView):
    model = Post
