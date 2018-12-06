from django.contrib import admin
from board.models import Board

class BoardAdmin(admin.ModelAdmin):
    list_display = ('title', 'modify_date')
    list_filter = ('modify_date', )
    search_fields = ('title', 'contnet')
    prepopulated_fields = {'slug': ('title', )}

admin.site.register(Board, BoardAdmin)
