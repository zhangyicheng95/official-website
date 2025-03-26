document.addEventListener('DOMContentLoaded', function () {
    const type = window.location.search.split('=')[1];
    const name = type == 'lsn' ? '李世南' : '吴冠南';
    const title = type == 'lsn' ? '中国大写意人物画家' : '中国大写意花鸟画家';
    document.querySelector('#team-mp-name').textContent = `${name}`;
    document.querySelector('#team-mp-title').textContent = `${title}`;
    document.querySelector('#team-mp-img').src = type == 'lsn' ?
        'images/lsn/lsn.webp'
        : 'images/wgn/wgn.webp';
    document.querySelector('#team-mp-email').innerHTML = type == 'lsn' ?
        'lishinan@test.com'
        : 'wuguannan@test.com';
    document.querySelector('#team-mp-desc').innerHTML = type == 'lsn' ?
        `<p style="text-indent: 2em;">李世南 (b.1940－ )浙江绍兴人，别号阿难，斋号一叶庐。中国著名大写意画家，中国美术家协会会员，国家一级美术师，中国国家画院特聘研究员，陕西国画院名誉院长。作品曾入选第六、七届全国美术作品展览及“美术批评家93年度提名画展”、文化部“中华世纪之光”中国画提名展等国内外多项重要展览，作品《开采光明的人》被中国美术馆收藏并选入百年中国画展。 出版有《李世南画集》四卷、《李世南画选》、《李世南速写艺术集》、《李世南的水墨世界》、《长歌当哭》等著作。个人传略收入《中国美术家大辞典》、《中国当代国画辞典》、《中国大陆中青代美术家百人传》、《世界华人艺术家大典》等。</p>`
        : '<p style="text-indent: 2em;">吴冠南(b.1950－  ) 江苏宜兴人，中国著名大写意画家。现为江苏省国画院艺委会委员、陕西国画院名誉院长、中国美术家协会会员、一级美术师。1962年步入画道，初学芥子园画谱，后学吴昌硕、旁涉黄宾虹、齐白石。数十年来在各种媒体大量发表作品及论文和多次参加大型学术提名展、双年展。如今致力于立足本土传统文化艺术的拓展与创新。</p>';
    document.querySelector('#team-mp-desc-2').innerHTML = type == 'lsn' ?
        `<p>大力倡导突破传统技法的束缚，力求直达艺术家的内心世界，将内心的情感与感悟通过绘画作品直接呈现出来 。 </p>
<p>- 水墨革新：致力于将传统水墨与现代表现手法有机结合，经过不断探索与实践，成功形成独特的笔墨语言，为水墨艺术的发展注入新的活力 。 </p>
<p>- 文化根脉：作品中深深渗透着中国传统哲学思想，充分体现了“形神兼备”这一中国传统美学追求，在现代艺术语境中展现出深厚的文化底蕴 。 </p> `
        : `<p style="text-indent: 2em;">极度注重艺术创作中精神层面的自由抒发以及个人情感的真挚投射，秉持“形神兼备”这一经典艺术主张，力求让作品不仅具备外在的生动形态，更蕴含内在的精神气质 。</p>
        <p style="text-indent: 2em;">传统与现代融合：在传统文人画的坚实基础之上，巧妙融入抽象表现手法，使得作品呈现出雅致韵味与视觉张力兼具的独特艺术风格，在传统与现代的碰撞交融中开辟出独属于自己的艺术道路 。</p>
        <p style="text-indent: 2em;">笔墨韵律：擅长运用极为简练却富有表现力的笔触，勾勒出丰富深厚的内涵。尤为注重绘画中的气韵生动，以灵动的笔墨营造出美妙的美学意境，让作品充满生机与活力 。</p>`;
    // document.querySelector('#team-mp-desc-3').innerHTML = type == 'lsn' ?
    //     `《李世南画集》、《李世南画选》、《李世南速写艺术集》、《李世南一九七八— 一九九八作品集》、《中国历代书法家像赞》、《狂歌当哭—记石鲁》、《羁旅—病中日记选》。`
    //     : `《吴冠南访谈录》、《花荫说艺》、《鹳南画集》、《画余杂稿》、《吴冠南画集》、《天意》、《重彩画法》、《构成画法》、《吴冠南小品、短文合集》、《中国当代水墨图像档案》，吴冠南卷《一方水土，一代画人》、《六十留痕》、《吴冠南访谈录：花鸟卷》、《亦画亦说——吴冠南文·画合集》、《花荫说艺》。`;
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
    const users = type == 'lsn' ? [
        {
            name: '何海霞',
            title: '著名画家',
            comment: `看李世南画梁楷一路的画，可以知道他是不把前人当成一堵不可逾越的墙、只有临摹的价值。一团淡墨下去，浑厚犹如汉石雕，而用笔的果断又保持原有简洁的风貌，显然化入了素描又不露痕迹，这叫一般西贩藿藜的小慧们很难望其项背了。`,
            type: '画家',
            logo: 'images/user/use01.jpg',
        },
        {
            name: '贾平凹',
            title: '著名作家',
            comment: `他完全独立，苦行着，冥想着，实践着，世纪之交后的几十年里，他是越来越现代，越来越传统，既是现代，又是传统，当然更是李世南，真个不可无一不可有二了。`,
            type: '作家',
            logo: 'images/user/use02.jpg',
        },
        {
            name: '王鲁湘',
            title: '艺术评论家',
            comment: `我想起一句话，因为他老家是绍兴的，徐渭来到长安碰到石鲁就变成了李世南！你想一想他和徐渭和石鲁之间的这种精神联系，他是他们两个的一个结合体，但是不是1+1简单的结合体，是一个化合。`,
            type: '评论家',
            logo: 'images/user/use03.jpg',
        },
        {
            name: '彭德',
            title: '艺术评论家',
            comment: `在当今的中国画家之中，李世南无疑属于接受传统艺术熏陶最为全面的人物之一。从那被他发挥到了一个新的极致的中国写意画特具的水墨韵味，以及他的一些作品的诗、文、书、画，即相生相发的格局中，可以明显感觉出来。在他的艺术血统中，活跃着中国古代文人画的遗传因子。
                    在李世南的艺术世界里，文人画的明哲、智慧与时代的热情、进取不可思议地交汇融合在一起，也许这就是他的作品的主要魅力。`,
            type: '评论家',
            logo: 'images/user/use04.jpg',
        },
        {
            name: '皮道坚',
            title: '艺术评论家',
            comment: `论世南在水墨人物写意画方面所达到的艺术境界，无论是他的笔墨功力、趣味，还是他那个人特色极为鲜明的立意造型，在当今的画坛都是罕见其匹的。他把花鸟、山水画法融会到人物画法中去的努力，提炼了一种比传统人物画更加洒脱、单纯的充满激情的新画风。应该说对八十年代以来中国画坛一种新的写意人物画风格样式的形成，李世南作出了开创性的贡献。`,
            type: '评论家',
            logo: 'images/user/use01.jpg',
        },
        {
            name: '曾春华',
            title: '艺术评论家',
            comment: `李世南从梁楷出发，在语言上更加自由更加丰富，使水墨开始向水墨的自律性转化，这是走向现代水墨画的关键契机，将对后来者产生不平凡的影响。
                    李世南在他的水墨期，成功地解决了梁楷提出的问题，使泼墨人物画在画坛上一度复兴了。
                    他不息地走在语言的途中。他从毕加索的艺术生活中得到启示：语言的僵化意味着艺术的末日。`,
            type: '评论家',
            logo: 'images/user/use02.jpg',
        },
        {
            name: '聂雄前',
            title: '艺术评论家',
            comment: `他在大写意人物画探索中作出了突出成就……他富于激情、充满幻想，有丰富的人生经历，深谙文人画，总是能够把视觉方式和语言的探索植根在真诚的内在动机之上。`,
            type: '评论家',
            logo: 'images/user/use03.jpg',
        }
    ] : [
        {
            name: '杜甫',
            title: '大气的氛围和许多令人印象深刻的绘画',
            comment: `窑火千年续古魂，丹青新意入冰纹。
                    匠心岂止承周鼎，彩釉犹能绘楚云。
                    素胚暗涌山河气，釉色深藏日月曛。
                    莫道长安风骨尽，青花影里又逢君。`,
            type: '诗人',
            logo: 'images/user/use01.jpg',
        },
        {
            name: '张仲景',
            title: '最好的艺术画廊！',
            comment: `窑火千年续古魂，丹青新意入冰纹。
                    匠心岂止承周鼎，彩釉犹能绘楚云。
                    素胚暗涌山河气，釉色深藏日月曛。
                    莫道长安风骨尽，青花影里又逢君。`,
            type: '医生',
            logo: 'images/user/use02.jpg',
        },
        {
            name: '李白',
            title: '最好的艺术画廊！',
            comment: `窑火千年续古魂，丹青新意入冰纹。
                    匠心岂止承周鼎，彩釉犹能绘楚云。
                    素胚暗涌山河气，釉色深藏日月曛。
                    莫道长安风骨尽，青花影里又逢君。`,
            type: '诗人',
            logo: 'images/user/use03.jpg',
        },
        {
            name: '杜甫',
            title: '大气的氛围和许多令人印象深刻的绘画',
            comment: `窑火千年续古魂，丹青新意入冰纹。
                    匠心岂止承周鼎，彩釉犹能绘楚云。
                    素胚暗涌山河气，釉色深藏日月曛。
                    莫道长安风骨尽，青花影里又逢君。`,
            type: '诗人',
            logo: 'images/user/use04.jpg',
        }
    ];
    document.querySelector('#team-mp-comment').innerHTML = users.map((item, index) => {
        const { name, title, comment, type, logo } = item;
        return `
         <div class="item" key="${index}">
            <div class="quote-center">
                <div class="quote-center-title">
                    <h4>${title}</h4>
                </div>
                <p class="quote-center-body">
                    <q>${comment}</q>
                </p>
                <div class="quote-center-cite">
                    <cite>${name}</cite><span>${type}</span>
                </div>
            </div>
        </div>`;
    }).join('');
    if (!!document.querySelector('#child-carousel')) {
        document.querySelector('#child-carousel').innerHTML = users.map((item, index) => {
            const { logo } = item;
            return `
        <div class="item" key="${index}">
            <figure>
            <img class="rounded-circle" src="${logo}" alt="" style="width: 111px; height: 111px;" />
            </figure>
        </div>`;
        }).join('');
    }
});