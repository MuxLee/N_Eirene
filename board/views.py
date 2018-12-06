from django.views.generic import ListView, DetailView
from django.core.paginator import Paginator
from board.models import Board

class BoardList(ListView):
    model = Board
    template_name = 'board/list.html'
    context_object_name = 'lists'
    paginate_by = 10
    queryset = Board.objects.all()

    def get_context_data(self, **kwargs):
        context = super(BoardList, self).get_context_data(**kwargs)
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

class BoardDetail(DetailView):
    model = Board

    def get_context_data(self, *args, **kwargs):
        context = super(BoardDetail, self).get_context_data(**kwargs)
        context['m_lists'] = Board.objects.all()
        return context
