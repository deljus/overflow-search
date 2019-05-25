import { map } from 'lodash';

function prepareGetUrl(url, params){
    if(!params) return url;

    const queryArray = map(params, (value, key) => `${key}=${value}`);
    const newUrl = `${url}?${queryArray.join('&')}`;
    return newUrl;
}

export default prepareGetUrl;
