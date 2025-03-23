
const getIndexData = () => {
    fetch('http://api.wentouzhilv.com/jkgl/dpjk/all.do')
        .then(response => {
            if (!response.ok) {
                throw new Error('网络响应错误');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error);
        });
}

getIndexData();