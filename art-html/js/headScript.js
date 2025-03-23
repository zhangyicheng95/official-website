// 联系我们-弹窗
function showModal(e, type) {
    e.preventDefault();
    $('#staticBackdrop').modal('show');
    setTimeout(() => {
        document.getElementById('self-official-img').src = type == 'wechat' ?
            'images/wentou/wentou-wechat.jpg' :
            'images/wentou/wentou-wb.jpg';
    }, 100);
};