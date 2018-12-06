from django.views.generic import TemplateView, ListView
from django.core.paginator import Paginator
from django.shortcuts import render
import logging
from board.models import Board

class Home(ListView):
        model = Board
        template_name = 'home.html'
        context_object_name = 'boards'
        paginate_by = 10
        queryset = Board.objects.all()

        def get_context_data(self, **kwargs):
            context = super(Home, self).get_context_data(**kwargs)
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

# Mixin 예제 -- 아직 미사용 --
class PageableMixin(object):
    logger = logging.getLogger(__name__)
    paginate_by = 2

    def get_context_data(self, **kwargs):
        self.logger.debug('PageableMixin.get_context_data()')
        context = super(PageableMixin, self).get_context_data(**kwargs)
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

class SearchAll(TemplateView):
    template_name = 'search_all.html'
