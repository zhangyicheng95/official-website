document.addEventListener('DOMContentLoaded', function() {
  // 获取当前页面URL
  const currentPath = window.location.pathname;
  
  // 找到对应的导航项并添加active类
  const navItems = document.querySelectorAll('.rd-navbar-nav .rd-nav-item');
  navItems.forEach(item => {
    const link = item.querySelector('.rd-nav-link');
    if (link && link.getAttribute('href') === currentPath) {
      item.classList.add('active');
    }
  });
}); 