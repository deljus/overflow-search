async function request(url, params) {
    try{
        let response = await fetch(url, params);
        const ans = await response.json();
        if (response.ok) return ans;
        throw ans
    }catch (error) {
        throw error;
    }
}

export default request;
