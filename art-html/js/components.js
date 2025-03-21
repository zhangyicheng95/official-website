// 加载头部组件
function loadHeader() {
  document.getElementById('header-container').innerHTML = `<div class="rd-navbar-wrap" style="height: 181px;">
        <nav class="rd-navbar rd-navbar-default-with-top-panel" data-layout="rd-navbar-fixed"
          data-sm-layout="rd-navbar-fixed" data-md-layout="rd-navbar-fixed" data-md-device-layout="rd-navbar-fixed"
          data-lg-layout="rd-navbar-fullwidth" data-xl-layout="rd-navbar-fullwidth"
          data-xxl-layout="rd-navbar-fullwidth" data-lg-device-layout="rd-navbar-fixed"
          data-xl-device-layout="rd-navbar-fullwidth" data-md-stick-up-offset="90px" data-lg-stick-up-offset="150px"
          data-stick-up="true" data-sm-stick-up="true" data-md-stick-up="true" data-lg-stick-up="true">
          <div class="rd-navbar-top-panel rd-navbar-collapse">
            <div class="rd-navbar-top-panel-inner">
              <div class="left-side">
                <div class="group d-flex"><span class="fst-italicFollow">Zh:</span>
                  <ul class="list-inline">
                    <li class="list-inline-item"><a class="icon icon-sm icon-secondary-5 fa fa-instagram" href="#"></a>
                    </li>
                    <li class="list-inline-item"><a class="icon icon-sm icon-secondary-5 fa fa-facebook" href="#"></a>
                    </li>
                    <li class="list-inline-item"><a class="icon icon-sm icon-secondary-5 fa fa-twitter" href="#"></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="center-side">
                <!-- RD Navbar Brand-->
                <div class="rd-navbar-brand fullwidth-brand"><a class="brand-name" href="index.html"><img
                      src="images/logo-default-137x56.png" alt="" width="137" height="56" /></a></div>
              </div>
              <div class="right-side">
                <!-- Contact Info-->
                <div class="contact-info">
                  <div class="unit align-items-center flex-row unit-spacing-xs">
                    <div class="unit__left"><span class="icon icon-primary text-middle mdi mdi-phone"></span></div>
                    <div class="unit__body"><a class="text-middle" href="tel:#">1-800-1234-567</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rd-navbar-inner">
            <!-- RD Navbar Panel-->
            <div class="rd-navbar-panel">
              <!-- RD Navbar Toggle-->
              <button class="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap"><span></span></button>
              <!-- RD Navbar collapse toggle-->
              <button class="rd-navbar-collapse-toggle"
                data-rd-navbar-toggle=".rd-navbar-collapse"><span></span></button>
              <!-- RD Navbar Brand-->
              <div class="rd-navbar-brand mobile-brand"><a class="brand-name" href="index.html"><img
                    src="images/logo-default-137x56.png" alt="" width="137" height="56" /></a></div>
            </div>
            <div class="rd-navbar-aside-right">
              <div class="rd-navbar-nav-wrap">
                <div class="rd-navbar-nav-scroll-holder">
                  <ul class="rd-navbar-nav">
                    <li class="rd-nav-item"><a class="rd-nav-link" href="index.html">Home</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="about-us.html">About Us</a>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#">Services</a>
                      <ul class="rd-menu rd-navbar-dropdown">
                        <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="services.html">Services</a>
                        </li>
                        <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="paintings.html">Paintings</a>
                        </li>
                      </ul>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="#">Gallery</a>
                      <ul class="rd-menu rd-navbar-dropdown">
                        <li class="rd-dropdown-item"><a class="rd-dropdown-link" href="grid-gallery.html">Grid
                            Gallery</a>
                        </li>
                        <li class="rd-dropdown-item"><a class="rd-dropdown-link"
                            href="full-grid-gallery.html">Full-Width Grid Gallery</a>
                        </li>
                      </ul>
                    </li>
                    <li class="rd-nav-item"><a class="rd-nav-link" href="contacts.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>`;
}
// 加载footer组件
function loadFooter() {
  document.getElementById('footer-container').innerHTML = `<footer class="page-footer-corporate object-wrap object-wrap-md-left object-wrap-map bg-gray-dark text-start">
    <div class="object-wrap-body object-wrap-map sizing-1">
        <!-- RD Google Map-->
        <div class="google-map-container"><iframe src="https://www.amap.com/" width="100%" height="100%" frameborder="0"
                style="border:0" sandbox="allow-scripts allow-same-origin allow-popups allow-forms"></iframe></div>
    </div>
    <div class="container">
        <div class="row justify-content-md-end">
            <div class="col-lg-6">
                <div class="page-footer-corporate-inner">
                    <div class="page-footer-corporate-top row row-60">
                        <div class="col-md-6 col-lg-12">
                            <h5>联系我们</h5>
                            <hr class="divider divider-sm divider-left">
                            <ul class="list-unstyled">
                                <li>
                                    <dl class="list-desc">
                                        <dt class="text-middle"><span class="icon icon-sm mdi mdi-map-marker"> </span>
                                        </dt>
                                        <dd class="text-middle"><a class="link link-md" href="#">陕西省西安市大唐不夜城</a></dd>
                                    </dl>
                                </li>
                                <li>
                                    <div class="group-sm">
                                        <dl class="list-desc">
                                            <dt class="text-middle"><span class="icon icon-sm mdi mdi-phone"> </span>
                                            </dt>
                                            <dd class="text-middle"><a class="link link-md" href="tel:#">+86 188 8888
                                                    8888</a></dd>
                                        </dl>
                                        <dl class="list-desc">
                                            <dt class="text-middle"><span class="icon icon-sm mdi mdi-email-outline">
                                                </span></dt>
                                            <dd class="text-middle"><a class="link" href="mailto:#">info@demolink.org
                                                </a></dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-md-6 col-lg-12">
                            <h5>营业时间</h5>
                            <hr class="divider divider-sm divider-left">
                            <div class="group">
                                <dl class="list-desc">
                                    <dt>工作日: </dt>
                                    <dd><span>8:00–20:00</span></dd>
                                </dl>
                                <dl class="list-desc">
                                    <dt>周末: </dt>
                                    <dd><span>9:00–18:00</span></dd>
                                </dl>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-12">
                            <h5>导航</h5>
                            <hr class="divider divider-sm divider-left">
                            <ul class="nav-list list-column-3">
                                <li class="active"><a class="link" href="./">首页</a></li>
                                <li><a class="link" href="about-us.html">关于我们</a></li>
                                <li><a class="link" href="grid-gallery.html">画廊</a></li>
                                <li><a class="link" href="services.html">服务</a></li>
                                <li><a class="link" href="contacts.html">联系</a></li>
                                <li><a class="link" href="#">页面</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="page-footer-corporate-bottom">
                        <div class="group d-flex"><span>关注我们:</span>
                            <ul class="list-inline">
                                <li class="list-inline-item"><a class="icon icon-sm icon-gray-3 fa fa-instagram"
                                        href="#"></a>
                                </li>
                                <li class="list-inline-item"><a class="icon icon-sm icon-gray-3 fa fa-facebook"
                                        href="#"></a></li>
                                <li class="list-inline-item"><a class="icon icon-sm icon-gray-3 fa fa-twitter"
                                        href="#"></a></li>
                            </ul>
                        </div>
                        <p class="rights">ArtGallery&nbsp;&copy;&nbsp;<span class="copyright-year"></span>.&nbsp;<br
                                class="d-md-none">
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>`;
}

// 页面加载时初始化组件
document.addEventListener('DOMContentLoaded', function () {
  loadHeader();
  loadFooter();
}); 