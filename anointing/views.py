from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from django.views.generic import ListView
from django.views.generic.edit import FormView
from django.db.models import Q
from anointing.models import Post

# Create your views here.

class PostList(ListView):
    model = Post
    template_name = 'anointing/post_list.html'
    context_object_name = 'posts'
    paginate_by = 10

    def get_context_data(self, **kwargs):
        context = super(PostList, self).get_context_data(**kwargs)
        paginator = context['paginator']
        page_numbers_range = 5
        max_index = len(paginator.page_range)
        page = self.request.GET.get('page')
        current_page = int(page) if page else 1
        start_index = int((current_page - 1) / page_numbers_range) * page_numbers_range
        end_index = start_index + page_numbers_range
        if end_index >= max_index:
            end_index = max_index
        page_range = paginator.page_range[start_index:end_index]
        context['page_range'] = page_range
        return context

def PostDetail(request, pk):
    image = get_object_or_404(Post, pk=pk)
    video = get_object_or_404(Post, pk=pk)
    messages = '<img src="{url}"/>'.format(url=image.image.url),

    return HttpResponse('\n'.join(messages))
    # render(request, 'anointing/post_detail.html', {'video': video})
    # https://djangogirlsseoul.gitbooks.io/django-tube/content/07-DjangoTube-VideoDetail.html
