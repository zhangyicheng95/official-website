document.addEventListener('DOMContentLoaded', function () {
    const type = window.location.search.split('=')[1];
    const name = type == 'lsn' ? '李世南' : '吴冠南';
    const title = type == 'lsn' ? '当代画家' : '当代画家';
    document.querySelector('#team-mp-name').textContent = `${name}`;
    document.querySelector('#team-mp-title').textContent = `${title}`;
    document.querySelector('#team-mp-img').src = type == 'lsn' ?
        'https://bkimg.cdn.bcebos.com/pic/7af40ad162d9f2d3a09d37bca0ec8a136227ccd1?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080'
        : 'https://bkimg.cdn.bcebos.com/pic/78310a55b319ebc405b801738a26cffc1f171613?x-bce-process=image/format,f_auto/watermark,image_d2F0ZXIvYmFpa2UyNzI,g_7,xp_5,yp_5,P_20/resize,m_lfit,limit_1,h_1080';
    document.querySelector('#team-mp-desc').innerHTML = type == 'lsn' ?
        `<p style="text-indent: 2em;">李世南(1940－ )浙江绍兴人，别号阿难，斋号一叶庐。
中国美术家协会会员，国家一级美术师，中国国家画院特聘研究员，陕西国画院名誉院长。作品入选第六、七届全国美术作品展览及“美术批评家93年度提名画展”、文化部“中华世纪之光”中国画提名展等国内外重要展览。中国美术馆收藏作品《开採光明的人》被选入百年中国画展。
出版有《李世南画集》四卷、《李世南画选》、《李世南速写艺术集》等。专著《长歌当哭》。
作品曾入选长六、七届全国美展及“美术批评家”93年度提名展等国内外重要展览。五种个人画集在国内外出版。
对其生平、创作、技法的研究专集有《李世南的水墨世界》。
传略收入《中国美术家大辞典》、《中国当代国画辞典》、《中国大陆中青代美术家百人传》、《世界华人艺术家大典》等。</p>`
        : '吴冠南，江苏宜兴人，1950年生。1962年步入画道，初学芥子园画谱后学吴昌硕、旁涉黄宾虹、齐白石。精于写意花鸟画。数十年来在各种媒体大量发表作品及论文和多次参加大型学术提名展、双年展。近年来致力于立足本土传统文化艺术的拓展与创新。出版个人著作几十本。获2004中国艺术研究院、中国画研究院美术学术奖，“黄宾虹奖“、2004年南京传媒水墨画三年展”傅抱石奖“。现为江苏省国画院艺委会委员、陕西国画院名誉院长、中国美术家协会会员、一级美术师。';
    document.querySelector('#team-mp-desc-2').innerHTML = type == 'lsn' ?
        `<p>大力倡导突破传统技法的束缚，力求直达艺术家的内心世界，将内心的情感与感悟通过绘画作品直接呈现出来 。 </p>
<p>- 水墨革新：致力于将传统水墨与现代表现手法有机结合，经过不断探索与实践，成功形成独特的笔墨语言，为水墨艺术的发展注入新的活力 。 </p>
<p>- 文化根脉：作品中深深渗透着中国传统哲学思想，充分体现了“形神兼备”这一中国传统美学追求，在现代艺术语境中展现出深厚的文化底蕴 。 </p> `
        : `<p style="text-indent: 2em;">极度注重艺术创作中精神层面的自由抒发以及个人情感的真挚投射，秉持“形神兼备”这一经典艺术主张，力求让作品不仅具备外在的生动形态，更蕴含内在的精神气质 。</p>
        <p style="text-indent: 2em;">传统与现代融合：在传统文人画的坚实基础之上，巧妙融入抽象表现手法，使得作品呈现出雅致韵味与视觉张力兼具的独特艺术风格，在传统与现代的碰撞交融中开辟出独属于自己的艺术道路 。</p>
        <p style="text-indent: 2em;">笔墨韵律：擅长运用极为简练却富有表现力的笔触，勾勒出丰富深厚的内涵。尤为注重绘画中的气韵生动，以灵动的笔墨营造出美妙的美学意境，让作品充满生机与活力 。</p>`;
    document.querySelector('#team-mp-desc-3').innerHTML = type == 'lsn' ?
        `《李世南画集》、《李世南画选》、《李世南速写艺术集》、《李世南一九七八— 一九九八作品集》、《中国历代书法家像赞》、《狂歌当哭—记石鲁》、《羁旅—病中日记选》。`
        : `《吴冠南访谈录》、《花荫说艺》、《鹳南画集》、《画余杂稿》、《吴冠南画集》、《天意》、《重彩画法》、《构成画法》、《吴冠南小品、短文合集》、《中国当代水墨图像档案》，吴冠南卷《一方水土，一代画人》、《六十留痕》、《吴冠南访谈录：花鸟卷》、《亦画亦说——吴冠南文·画合集》、《花荫说艺》。`;
    document.querySelector('#team-mp-gallery').innerHTML = (type == 'lsn' ?
        [
            {
                img: 'images/lsn/youxiu/youxiu01.jpg',
                title: 'Photo #1'
            },
            {
                img: 'images/lsn/youxiu/youxiu02.jpg',
                title: 'Photo #2'
            },
            {
                img: 'images/lsn/youxiu/youxiu03.jpg',
                title: 'Photo #3'
            },
            {
                img: 'images/lsn/youxiu/youxiu04.jpg',
                title: 'Photo #4'
            },
            {
                img: 'images/lsn/youxiu/youxiu05.jpg',
                title: 'Photo #5'
            },
            {
                img: 'images/lsn/youxiu/youxiu06.jpg',
                title: 'Photo #6'
            }
        ] :
        [
            {
                img: 'images/wgn/youxiu/youxiu01.jpg',
                title: 'Photo #1'
            },
            {
                img: 'images/wgn/youxiu/youxiu02.jpg',
                title: 'Photo #2'
            },
            {
                img: 'images/wgn/youxiu/youxiu03.jpg',
                title: 'Photo #3'
            },
            {
                img: 'images/wgn/youxiu/youxiu04.jpg',
                title: 'Photo #4'
            },
            {
                img: 'images/wgn/youxiu/youxiu05.jpg',
                title: 'Photo #5'
            },
            {
                img: 'images/wgn/youxiu/youxiu06.jpg',
                title: 'Photo #6'
            }
        ]
    )?.map((item, index) => {
        return `
        <div class="col-md-6 col-lg-4">
            <div class="team-box box-outline box-outline-about">
                <div class="team-image-box">
                <a class="thumbnail-classic"
                    href="${item.img}"
                    // style="width: 295px; height: 450px;"
                    data-lightgallery="item">
                    <img src="${item.img}" alt="" style="width: 295px; height: 450px;"  />
                </a>
                </div>
            </div>
        </div>`;
    }).join('');
});