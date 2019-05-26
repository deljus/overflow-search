import { map } from 'lodash';

function getParamsToObj(search='') {
    let hashes = search.slice(search.indexOf('?') + 1).split('&');
    if(search === hashes[0]) return {};
    let params = {};
    map(hashes, hash => {
        let [key, val] = hash.split('=');
        params[key] = decodeURIComponent(val)
    });

    return params
};

export default getParamsToObj;
