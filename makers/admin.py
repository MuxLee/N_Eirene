from django.contrib import admin
from makers.models import Post

class MakersPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'modify_date')
    list_filter = ('modify_date', )
    search_fields = ('title', 'content')
    prepopulated_fields = {'slug': ('title', )}

admin.site.register(Post, MakersPostAdmin)
