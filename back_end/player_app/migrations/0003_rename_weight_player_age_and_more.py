# Generated by Django 5.0.3 on 2024-04-12 18:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player_app', '0002_player_years_pro'),
    ]

    operations = [
        migrations.RenameField(
            model_name='player',
            old_name='weight',
            new_name='age',
        ),
        migrations.RenameField(
            model_name='player',
            old_name='first_name',
            new_name='full_name',
        ),
        migrations.RemoveField(
            model_name='player',
            name='height',
        ),
        migrations.RemoveField(
            model_name='player',
            name='last_name',
        ),
        migrations.AddField(
            model_name='player',
            name='uniform_number',
            field=models.PositiveIntegerField(null=True),
        ),
    ]