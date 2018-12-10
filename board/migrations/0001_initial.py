# Generated by Django 2.1.3 on 2018-12-10 07:27

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Board',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='TITLE')),
                ('slug', models.SlugField(allow_unicode=True, help_text='one word for title alias', unique=True, verbose_name='SLUG')),
                ('description', models.CharField(blank=True, help_text='simple description text', max_length=100, verbose_name='DESCRIPTION')),
                ('content', models.TextField(verbose_name='CONTENT')),
                ('url', models.URLField(blank=True, null=True, unique=True, verbose_name='URL')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='Create Date')),
                ('modify_date', models.DateTimeField(auto_now=True, verbose_name='Modify Date')),
                ('author', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'free_board',
                'verbose_name_plural': 'free_boards',
                'ordering': ('-modify_date',),
            },
        ),
    ]
