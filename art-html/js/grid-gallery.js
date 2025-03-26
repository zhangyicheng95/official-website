document.addEventListener('DOMContentLoaded', function () {
    const type = window.location.search.split('=')[1];
    const name = type == 'lsn' ? '李世南' : '吴冠南';
    document.querySelector('#gallery-title').textContent = `${name}作品展示`;
    document.querySelector('#gallery-sub-title').textContent = `${name}作品展示`;
    const gallery = type == 'lsn' ? [
        {
            img: 'images/lsn/huazuo/huazuo01.jpg',
            thumb: 'images/lsn/huazuo/huazuo01-yasuo.jpg',
            title: '画作 #1',
            type: '1'
        },
        {
            img: 'images/lsn/huazuo/huazuo02.jpg',
            thumb: 'images/lsn/huazuo/huazuo02-yasuo.jpg',
            title: '画作 #2',
            type: '1'
        },
        {
            img: 'images/lsn/huazuo/huazuo03.jpg',
            thumb: 'images/lsn/huazuo/huazuo03-yasuo.jpg',
            title: '画作 #3',
            type: '1'
        },
        {
            img: 'images/lsn/ciqi/ciqi01.jpg',
            thumb: 'images/lsn/ciqi/ciqi01-yasuo.jpg',
            title: '瓷器 #1',
            type: '2'
        },
        {
            img: 'images/lsn/ciqi/ciqi02.jpg',
            thumb: 'images/lsn/ciqi/ciqi02-yasuo.jpg',
            title: '瓷器 #2',
            type: '2'
        },
        {
            img: 'images/lsn/ciqi/ciqi03.jpg',
            thumb: 'images/lsn/ciqi/ciqi03-yasuo.jpg',
            title: '瓷器 #3',
            type: '2'
        },
        {
            img: 'images/lsn/zishahu/zishahu01.jpg',
            thumb: 'images/lsn/zishahu/zishahu01-yasuo.jpg',
            title: '紫砂 #1',
            type: '3'
        },
        {
            img: 'images/lsn/zishahu/zishahu02.jpg',
            thumb: 'images/lsn/zishahu/zishahu02-yasuo.jpg',
            title: '紫砂 #2',
            type: '3'
        },
        {
            img: 'images/lsn/zishahu/zishahu03.jpg',
            thumb: 'images/lsn/zishahu/zishahu03-yasuo.jpg',
            title: '紫砂 #3',
            type: '3'
        }
    ] : [
        {
            img: 'images/wgn/huazuo/huazuo01.jpg',
            thumb: 'images/wgn/huazuo/huazuo01-yasuo.jpg',
            title: '画作 #1',
            type: '1'
        },
        {
            img: 'images/wgn/huazuo/huazuo02.jpg',
            thumb: 'images/wgn/huazuo/huazuo02-yasuo.jpg',
            title: '画作 #2',
            type: '1'
        },
        {
            img: 'images/wgn/huazuo/huazuo03.jpg',
            thumb: 'images/wgn/huazuo/huazuo03-yasuo.jpg',
            title: '画作 #3',
            type: '1'
        },
        {
            img: 'images/wgn/ciqi/ciqi01.jpg',
            thumb: 'images/wgn/ciqi/ciqi01-yasuo.jpg',
            title: '瓷器 #1',
            type: '2'
        },
        {
            img: 'images/wgn/ciqi/ciqi02.jpg',
            thumb: 'images/wgn/ciqi/ciqi02-yasuo.jpg',
            title: '瓷器 #2',
            type: '2'
        },
        {
            img: 'images/wgn/ciqi/ciqi03.jpg',
            thumb: 'images/wgn/ciqi/ciqi03-yasuo.jpg',
            title: '瓷器 #3',
            type: '2'
        },
        {
            img: 'images/wgn/zishahu/zishahu01.jpg',
            thumb: 'images/wgn/zishahu/zishahu01-yasuo.jpg',
            title: '紫砂 #1',
            type: '3'
        },
        {
            img: 'images/wgn/zishahu/zishahu02.jpg',
            thumb: 'images/wgn/zishahu/zishahu02-yasuo.jpg',
            title: '紫砂 #2',
            type: '3'
        },
        {
            img: 'images/wgn/zishahu/zishahu03.jpg',
            thumb: 'images/wgn/zishahu/zishahu03-yasuo.jpg',
            title: '紫砂 #3',
            type: '3'
        }
    ];
    document.querySelector('#gallery-content').innerHTML = gallery.map(item => {
        return `<div class="col-12 col-md-6 col-lg-4 isotope-item" data-filter="Category ${item.type}">
                <a class="thumbnail-classic" href="${item.img}" data-lightgallery="item">
                    <figure class="${item.type == '1' ? 'selfImgStyleWidth' : 'selfImgStyleHeight'}" style="width: 370px; height: 578px;">
                        <img src="${item.thumb}" alt="" />
                    </figure>
                    <div class="caption">
                    <p class="caption-title">${item.title}</p>
                </div>
            </a>
        </div>`
    }).join('');
});
