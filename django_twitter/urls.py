from django.conf.urls import patterns, url
from django_twitter import api_views


urlpatterns = [
    url(r'^api/twitter_trends/$', api_views.TwitterTrendView.as_view(), name='api_twitter_trends'),
    # url(r'^api/search_topics/$', api_views.SearchTopicView.as_view(), name='api_search_topics')
]
