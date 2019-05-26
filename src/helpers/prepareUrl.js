import { map } from 'lodash';

function prepareUrl(template, params, getParams){
    if(!params && !getParams) return template;

    let url = template;
    if(params){
        url = url.replace(/:(\w+)/gi, (_, key) => params[key]);
    }

    if(getParams){
        const queryArray = map(getParams, (value, key) => `${key}=${value}`);
        url = `${url}?${queryArray.join('&')}`;
    }

    return url;
}

export default prepareUrl;
