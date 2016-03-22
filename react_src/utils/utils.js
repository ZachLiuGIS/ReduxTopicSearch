import 'babel-polyfill';

export function buildQueryParams(params) {
    return Object.keys(params)
        .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(params[key]))
        .join("&")
        .replace(/%20/g, "+");
}