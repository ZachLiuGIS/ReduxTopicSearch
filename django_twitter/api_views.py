from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response

from django_twitter.utils import get_twitter_trend_topics, search_tweets, TwitterAPIQueryError


class TwitterTrendView(APIView):

    def get(self, request, format=None):

        try:
            trends = get_twitter_trend_topics()

        except TwitterAPIQueryError:
            return Response('Twitter API Search Error', status=status.HTTP_400_BAD_REQUEST)

        return Response(trends, content_type='application/json')


class TwitterSearchView(APIView):

    def get(self, request, format=None):

        try:
            options = request.query_params
            tweets = search_tweets(options)

        except TwitterAPIQueryError:
            return Response('Twitter API Search Error', status=status.HTTP_400_BAD_REQUEST)

        return Response(tweets, content_type='application/json')


# class SearchTopicView(APIView):
#
#     def get(self, request, format=None):
#
#         topics = SearchTopic.objects.all().order_by('-num_of_search')[:10]
#         serializer = SearchTopicSerializer(topics, many=True)
#         return Response(serializer.data)
#
#     def post(self, request):
#
#         name = request.data['name']
#         if name:
#             topic, created = SearchTopic.objects.get_or_create(name=name)
#             topic.num_of_search += 1
#             topic.save()
#             return Response(SearchTopicSerializer(topic).data, status=status.HTTP_200_OK)
#         return Response('Search Term Not Provided', status=status.HTTP_400_BAD_REQUEST)