from django.db import models

class Item(models.Model):
    first_name = models.CharField(max_length=100, null=True)
    middle_name = models.CharField(max_length=100, null=True)
    last_name = models.CharField(max_length=100, null=True)
    age = models.CharField(max_length=15, null=True)
    sex = models.CharField(max_length=15, null=True)
    date_of_birth = models.CharField(max_length=100, null=True)
    place_of_birth = models.CharField(max_length=100, null=True)
    civil_status = models.CharField(max_length=100, null=True)
    citizenship = models.CharField(max_length=100, null=True)
    religion = models.CharField(max_length=100, null=True)
    province = models.CharField(max_length=100, null=True)
    municipality = models.CharField(max_length=100, null=True)
    address = models.CharField(max_length=100, null=True)
    zip_code= models.CharField(max_length=5, null=True)
    email = models.CharField(max_length=100, null=True)

    tele_no =  models.CharField(max_length=15, null=True)
    mobile_no = models.CharField(max_length=15, null=True)
    blood_type = models.CharField(max_length=10, null=True)
    height = models.CharField(max_length=10, null=True)
    weight = models.CharField(max_length=10, null=True)

    mother_first_name = models.CharField(max_length=100, null=True)
    mother_maiden_middle_name = models.CharField(max_length=100, null=True)
    mother_maiden_last_name = models.CharField(max_length=100, null=True)
    
    father_first_name = models.CharField(max_length=100, null=True)
    father_middle_name = models.CharField(max_length=100, null=True)
    father_last_name = models.CharField(max_length=100, null=True)

    def __str__(self) -> str:
        return super().__str__()