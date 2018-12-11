from django.contrib.auth.models import User
from django.contrib.auth import get_user_model
from django import forms

class LoginForm(forms.Form):
    username = forms.CharField(
        widget = forms.TextInput(
            attrs = {
                'class': 'form-control',
            }
        ),
        label = 'ID'
    )
    password = forms.CharField(
        widget = forms.PasswordInput(
            attrs = {
                'class': 'form-control',
            }
        ),
        label = "PW"
    )

class CreateUserForm(forms.Form):
    username = forms.CharField(
        widget = forms.TextInput(
            attrs = {
                'class': 'form-control',
                'placeholder': '20글자 미만으로 입력',
                'required': True,
            }
        ),
        label = '아이디',
    )
    name = forms.CharField(
        widget = forms.TextInput(
            attrs = {
                'class': 'form-control',
                'required': True,
            }
        ),
        label = '이름',
    )
    password1 = forms.CharField(
        widget = forms.PasswordInput(
            attrs = {
                'class': 'form-control',
                'placeholder': '25글자 미만으로 입력',
                'required': True,
            }
        ),
        label = '비밀번호',
    )
    password2 = forms.CharField(
        widget = forms.PasswordInput(
            attrs = {
                'class': 'form-control',
                'placeholder': '비밀번호 확인',
                'required': True,
            }
        ),
        label = '비밀번호 확인',
    )
    email = forms.EmailField(
        widget = forms.EmailInput(
            attrs = {
                'class': 'form-control',
                'required': False,
            }
        ),
        label = '이메일',
    )

    class Meta:
        model = User

    def __init__(self, *args, **kwargs):
        super(CreateUserForm, self).__init__(*args, **kwargs)
        self.fields['username'].widget.attrs['maxlength'] = 20
        self.fields['name'].widget.attrs['maxlength'] = 5
        self.fields['password1'].widget.attrs['maxlength'] = 25
        self.fields['password2'].widget.attrs['maxlength'] = 25
        self.fields['email'].widget.attrs['maxlength'] = 100

    def clean_username(self):
        username = self.cleaned_data['username']
        if User.objects.filter(username=username).exists():
            raise forms.ValidationError('아이디가 이미 사용중입니다')
        return username

    def clean_password2(self):
        password1 = self.cleaned_data['password1']
        password2 = self.cleaned_data['password2']
        if password1 != password2:
            raise forms.ValidationError('비밀번호와 비밀번호 확인이 서로 다릅니다')
        return password2

    def signup(self):
        if self.is_valid():
            return User.objects.create_user(
                username=self.cleaned_data['username'],
                email=self.cleaned_data['email'],
                password=self.cleaned_data['password2']
            )
