// 联系我们-弹窗
function showModal(e, type) {
    e.preventDefault();
    $('#staticBackdrop').modal('show');
    setTimeout(() => {
        document.getElementById('self-official-img').src = type == 'wechat' ?
            'http://shanwentou.com.cn/theme/main/images/wechat.jpg' :
            'http://shanwentou.com.cn/theme/main/images/wb.jpg';
    }, 100);
};