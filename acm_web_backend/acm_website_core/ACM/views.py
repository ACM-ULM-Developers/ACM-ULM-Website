from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *


# view to post event of Event Model
class AddEvent(generics.CreateAPIView):
    querySet = Event.objects.all()
    serializer_class = EventSerializer

#view to get all events of Event Model
class EventView(generics.ListAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

#view to get all flyers of HomePageFlyer Model
class HomepageFlyerView(generics.ListAPIView):
    queryset = HomePageFlyer.objects.all()
    serializer_class = HomePageFlyerSerializer

#view to get all topCoders of TopCoder MOdel
class TopCoderView(generics.ListAPIView):
    queryset = TopCoder.objects.all()
    serializer_class = TopCoderSerializer

#view to get all acm members of Members Model
class MemberView(generics.ListAPIView):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

#view to get all partner sopnsers of PartnerSponserModel  
class PartnerSponserView(generics.ListAPIView):
    queryset = PartnerSponser.objects.all()
    serializer_class = PartnerSponserSerializer

#view to get all Cs almunis of CsAlmunis Model
class CsAlmuniView(generics.ListAPIView):

    queryset = CsAlumni.objects.all()
    serializer_class = CsAlumniSerializer

#view to get all Discord Links of DiscordLink Model
class DiscordLinkView(generics.ListAPIView):
    queryset = DiscordLink.objects.all()
    serializer_class = DiscordLinkSerializer



