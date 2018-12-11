from django.views.generic import TemplateView, ListView
from django.views.generic.edit import CreateView
from django.core.paginator import Paginator
from django.contrib.auth import login as django_login, logout as django_logout, authenticate
from django.shortcuts import render, redirect
from django.urls import reverse_lazy
import logging
from board.models import Board
from Eirene.forms import LoginForm, CreateUserForm

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

def login(request):
    if request.method == 'POST':
        login_form = LoginForm(request.POST)
        if login_form.is_valid():
            username = login_form.cleaned_data['username']
            password = login_form.cleaned_data['password']
            user = authenticate(
                username = username,
                password = password
            )
            if user:
                django_login(request, user)
                return redirect('index')
            login_form.add_error(None, '아이디 또는 비밀번호가 올바르지 않습니다')
    else:
        login_form = LoginForm()
    context = {
        'login_form': login_form,
    }
    return render(request, 'registration/login.html', context)

def signup(request):
    if request.method == 'POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.signup()
            return redirect('index')
    else:
        form = CreateUserForm()
    context = {
        'form': form,
    }
    return render(request, 'registration/signup.html', context)

def signup_done(request):
    return render(request, 'registration/signup_done.html')
