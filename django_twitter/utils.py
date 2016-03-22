import re
from TwitterAPI import TwitterAPI
from .twitter_settings import TWITTER_API_KEYS


class TwitterAPIQueryError(Exception):
        pass


def format_date(date_):
    lst = date_.split(' ')
    lst.pop(-2)
    return " ".join(lst)


def convert_links(text):
    pat_link = re.compile('(https?:\/\/.*?)(\s|$)')
    text = re.sub(pat_link, r' <a href="\1" target="_blank">\1</a> ', text)
    return text


def convert_hash_tags(text):
    pat_hash = re.compile('#(.*?)(\s|$|#)')
    text = re.sub(pat_hash, r' <a href="https://twitter.com/hashtag/\1?src=hash" target="_blank">#\1</a> ', text)
    return text


def convert_users(text):
    pat_hash = re.compile('@(.*?)(:|\s|$)')
    text = re.sub(pat_hash, r' <a href="https://twitter.com/\1" target="_blank">@\1\2</a> ', text)
    return text


def process_twitter_text(text):
    text = convert_links(text)
    text = convert_hash_tags(text)
    text = convert_users(text)
    return text


class TwitterItem(object):

    def __init__(self, text='', created_at='', user_name='', user_screen_name='', profile_url=''):
        self.text = text
        self.created_at = created_at
        self.user_name = user_name
        self.user_screen_name = user_screen_name
        self.profile_url = profile_url


def get_twitter_trend_topics():
    consumer_key = TWITTER_API_KEYS['consumer_key']
    consumer_secret = TWITTER_API_KEYS['consumer_secret']
    access_token_key = TWITTER_API_KEYS['access_token_key']
    access_token_secret = TWITTER_API_KEYS['access_token_secret']
    api = TwitterAPI(consumer_key, consumer_secret, access_token_key, access_token_secret)

    try:
        items = []
        # USA WOEID
        options = {"id": "23424977"}
        r = list(api.request('trends/place', options))

        for item in r:
            if 'tweet_volume' in item and item['tweet_volume'] is not None:
                items.append({
                    "text": item['name'],
                    "weight": item['tweet_volume']
                })
    except:
        raise TwitterAPIQueryError

    return items


def search_tweets(options):
    consumer_key = TWITTER_API_KEYS['consumer_key']
    consumer_secret = TWITTER_API_KEYS['consumer_secret']
    access_token_key = TWITTER_API_KEYS['access_token_key']
    access_token_secret = TWITTER_API_KEYS['access_token_secret']
    api = TwitterAPI(consumer_key, consumer_secret, access_token_key, access_token_secret)

    try:
        r = list(api.request('search/tweets', options))
        return r

    except:
        raise TwitterAPIQueryError

