document.addEventListener('DOMContentLoaded', function () {
    document.title = '李世南艺术馆';
    const header = document.querySelector('#page-header');
    header.innerHTML = `
    <div class="rd-navbar-top-panel-inner">
        <div class="left-side">
        <div class="group d-flex"><span class="fst-italicFollow">联系:</span>
            <ul class="list-inline">
            <li class="list-inline-item"><a class="icon icon-sm icon-secondary-5 fa fa-weixin" href="#"
                onclick="showModal(event,'wechat')"></a>
            </li>
            <li class="list-inline-item"><a class="icon icon-sm icon-secondary-5 fa fa-weibo" href="#"
                onclick="showModal(event,'wb')"></a>
            </li>
            </ul>
        </div>
        </div>
        <div class="center-side">
        <!-- RD Navbar Brand-->
        <div class="rd-navbar-brand fullwidth-brand"><a class="brand-name" href="index.html"><img
                src="images/logo.png" alt="" style="width: 237px; height: 76px;" /></a></div>
        </div>
        <div class="right-side">
        <!-- Contact Info-->
        <div class="contact-info">
            <div class="unit align-items-center flex-row unit-spacing-xs">
            <div class="unit__left"><span class="icon icon-primary text-middle mdi mdi-phone"></span></div>
            <div class="unit__body"><a class="text-middle" href="tel:#">188 8888 8888</a></div>
            </div>
        </div>
        </div>
    </div>
    `;
    const nav = document.querySelector('#page-header-nav');
    nav.innerHTML = `
    <ul class="rd-navbar-nav">
        <li class="rd-nav-item ${(window.location.pathname.indexOf('/index.html') > -1 || window.location.pathname === '/art/') ? 'active' : ''}"><a class="rd-nav-link" href="index.html">首页</a>
        </li>
        <li class="rd-nav-item ${window.location.pathname.indexOf('/team-mp.html') > -1 ? 'active' : ''}"><a class="rd-nav-link" href="#">艺术家档案</a>
            <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="team-mp.html?type=lsn">李世南档案</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="team-mp.html?type=wgn">吴冠南档案</a>
                </li>
            </ul>
        </li>
        <li class="rd-nav-item ${window.location.pathname.indexOf('/grid-gallery.html') > -1 ? 'active' : ''}"><a class="rd-nav-link" href="#">作品展示</a>
            <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="grid-gallery.html?type=lsn">李世南作品信息</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="grid-gallery.html?type=wgn">吴冠南作品信息</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="grid-gallery.html?type=lsn">中国画瓷艺术中心馆藏作品</a>
                </li>
            </ul>
        </li>
        <li class="rd-nav-item"><a class="rd-nav-link" href="#">数字展厅</a>
             <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="https://njyunshangzhan.com/#/preview-web/?status=false&verifyId=10a1ceba00" target="_blank">“意之源”序厅</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="https://njyunshangzhan.com/#/preview-web/?status=false&verifyId=10a1ceba00" target="_blank">李世南作品厅</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="https://njyunshangzhan.com/#/preview-web/?status=false&verifyId=10a1ceba00" target="_blank">吴冠南作品展厅</a>
                </li>
                 <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="https://njyunshangzhan.com/#/preview-web/?status=false&verifyId=10a1ceba00" target="_blank">"意之变创作厅"</a>
                </li>
            </ul>
        </li>
        <li class="rd-nav-item"><a class="rd-nav-link" href="#">传播交流</a>
            <ul class="rd-menu rd-navbar-dropdown">
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="exhibition.html">艺术中心展览信息</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="lecture-activity.html">讲座活动信息</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="public-education.html">艺术公共教育功能</a>
                </li>
                <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                    href="learning-platform.html">交流学习平台</a>
                </li>
            </ul>
        </li>
        <li class="rd-nav-item ${window.location.pathname.indexOf('/about-us.html') > -1 ? 'active' : ''}"><a class="rd-nav-link" href="about-us.html">中心概况</a>
        </li>
         <li class="rd-nav-item ${window.location.pathname.indexOf('/contacts.html') > -1 ? 'active' : ''}"><a class="rd-nav-link" href="contacts.html">联系我们</a>
        </li>
    </ul>
    `;
});
