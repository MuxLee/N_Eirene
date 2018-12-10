from django.db import models
from django.urls import reverse
from django.conf import settings
# python2 unicode
from django.utils.encoding import python_2_unicode_compatible

# Create your models here.
@python_2_unicode_compatible
class Board(models.Model):
    title = models.CharField('TITLE', max_length=50)
    slug = models.SlugField('SLUG', unique=True, allow_unicode=True, help_text='one word for title alias')
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    description = models.CharField('DESCRIPTION', max_length=100, blank=True, help_text='simple description text')
    content = models.TextField('CONTENT')
    url = models.URLField('URL', unique=True, blank=True, null=True)
    create_date = models.DateTimeField('Create Date', auto_now_add=True)
    modify_date = models.DateTimeField('Modify Date', auto_now=True)

    class Meta:
        verbose_name = 'free_board'
        verbose_name_plural = 'free_boards'
        ordering = ('-modify_date', )

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse('board:board_detail', args=(self.slug, ))

    def get_previous_board(self):
        return self.get_previous_by_modify_date()

    def get_next_board(self):
        return self.get_next_by_modify_date()
