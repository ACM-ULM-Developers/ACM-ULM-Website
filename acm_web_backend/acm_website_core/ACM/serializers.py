from threading import activeCount
from rest_framework import serializers
from .models import *



# Serializer to serialize Event model to json format.
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id','title','date']

# Serializer to serialize HomePageFlyer model to json format.
class HomePageFlyerSerializer(serializers.Serializer):
    class meta:
        model = HomePageFlyer
        fields = ['flyer1','flyer2','flyer3']
# Serializer to serialize TopCoder model to json format.
class TopCoderSerializer(serializers.Serializer):
    class meta:
        model = TopCoder
        fields = ['first_name','middle_name','last_name']

# Serializer to serialize Member model to json format.
class MemberSerializer(serializers.Serializer):
    class meta:
        model = Member
        fields = ['first_name','middle_name','last_name','classification','github_username','leetcode_username','linkedin_url']

# Serializer to serialize PartnerSponser model to json format.
class PartnerSponserSerializer(models.Model):
    class meta:
        model = PartnerSponser
        fields = ['sponser_logo']

# Serializer to serialize CsAlmuni model to json format.
class CsAlumniSerializer(models.Model):
    class meta:
        model = CsAlumni
        fields = ['first_name','middle_name','last_name','alumni_photo','description']


# Serializer to serialize DiscordLinks model to json format
class DiscordLinkSerializer(models.Model):
    class meta:
        model = DiscordLink
        fields = ['link']