# Generated by Django 2.1.3 on 2018-11-28 07:31

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='TITLE')),
                ('slug', models.SlugField(allow_unicode=True, help_text='one word for title alias', unique=True, verbose_name='SLUG')),
                ('description', models.CharField(blank=True, help_text='simple description text', max_length=100, verbose_name='DESCRIPTION')),
                ('content', models.TextField(verbose_name='CONTENT')),
                ('url', models.URLField(blank=True, null=True, unique=True, verbose_name='URL')),
                ('create_date', models.DateTimeField(auto_now_add=True, verbose_name='Create Date')),
                ('modify_date', models.DateTimeField(auto_now=True, verbose_name='Modify Date')),
            ],
            options={
                'verbose_name': 'jus_Post',
                'verbose_name_plural': 'jus_posts',
                'ordering': ('-modify_date',),
            },
        ),
    ]
