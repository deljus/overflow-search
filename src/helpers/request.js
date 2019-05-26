
async function oldXHR(url, params){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(params.method || 'get', url);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
}


async function fetchRequest(url, params){
    try{
        let response = await fetch(url, params);
        const ans = await response.json();
        if (response.ok) return ans;
        throw ans
    }catch (error) {
        throw error;
    }
}

async function request(url, params) {
    if (fetch) {
        return await fetchRequest(url, params)
    }
    return await oldXHR(url, params)
}

export default request;
