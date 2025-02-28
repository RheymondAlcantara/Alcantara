# Generated by Django 4.2.13 on 2024-07-10 10:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_item_age_item_blood_type_item_citizenship_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='fathers_first_name',
            new_name='civil_status',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='fathers_last_name',
            new_name='father_first_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='fathers_middle_name',
            new_name='father_last_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='fathers_occupation',
            new_name='father_middle_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='mothers_maiden_last_name',
            new_name='mother_first_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='mothers_occupation',
            new_name='mother_maiden_last_name',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='phone',
            new_name='mother_maiden_middle_name',
        ),
        migrations.RemoveField(
            model_name='item',
            name='mothers_first_name',
        ),
        migrations.RemoveField(
            model_name='item',
            name='mothers_maiden_middle_name',
        ),
        migrations.AddField(
            model_name='item',
            name='mobile_no',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='tele_no',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AddField(
            model_name='item',
            name='zip_code',
            field=models.CharField(max_length=5, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='address',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='age',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='blood_type',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='height',
            field=models.CharField(max_length=10, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='municipality',
            field=models.CharField(max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='sex',
            field=models.CharField(max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='item',
            name='weight',
            field=models.CharField(max_length=10, null=True),
        ),
    ]
