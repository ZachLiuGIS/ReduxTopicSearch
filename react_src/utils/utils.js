import 'babel-polyfill';

export function buildQueryParams(params) {
    return Object.keys(params)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
        .join("&")
        .replace(/%20/g, "+");
}

export function convertLinks(text) {
    // use \\s for space, double \ need to be escaped.
    let re = new RegExp("(https?:\/\/.*?)(\\s|$)", "g");
    return text.replace(re, ' <a href="$1" target="_blank">$1</a> ');
}

export function convertHashTags(text) {
    let re = new RegExp("#(.*?)(\\s|$|#)", "g");
    return text.replace(re, ' <a href="https://twitter.com/hashtag/$1?src=hash" target="_blank">#$1</a> ');
}

export function convertUsernames(text) {
    let re = new RegExp("@(.*?)(:|\\s|$)", "g");
    return text.replace(re, ' <a href="https://twitter.com/$1" target="_blank">@$1$2</a> ');
}

export function processTweetText(text) {
    return convertUsernames(convertHashTags(convertLinks(text)));
}

export function extractTime(time) {
    return time.split(" ").slice(0, -2).join(' ')
}