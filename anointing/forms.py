from __future__ import unicode_literals
from __future__ import python_2_unicode_compatible
from django import forms
from anointing.models import Post

class PhotoForm(forms.ModelForm):
    class Meta:
        model = Post
        fields = ('image')
