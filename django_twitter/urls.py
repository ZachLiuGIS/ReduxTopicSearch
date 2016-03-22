from django.conf.urls import patterns, url
from django_twitter import api_views


urlpatterns = [
    url(r'^api/twitter_trends/$', api_views.TwitterTrendView.as_view(), name='api_twitter_trends'),
    url(r'^api/search_tweets/$', api_views.TwitterSearchView.as_view(), name='api_search_tweets')
]
