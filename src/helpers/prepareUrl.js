import { map, isEmpty } from 'lodash';

function prepareUrl(template, params, getParams){
    if(!params && !getParams) return template;

    let url = template;
    if(params){
        url = url.replace(/:(\w+)/gi, (_, key) => params[key] ? params[key] : _);
    }

    if(getParams){
        const queryArray = map(getParams, (value, key) => `${key}=${value}`);
        url = !isEmpty(queryArray) ? `${url}?${queryArray.join('&')}` : url;
    }

    return url;
}

export default prepareUrl;
