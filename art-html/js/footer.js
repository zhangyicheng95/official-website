document.addEventListener('DOMContentLoaded', function () {
  const footer = document.querySelector('#page-footer');
  footer.innerHTML = `
   <div class="wapper clearfix" style="padding: 20px 0;">
          <div class="footer-left">
            <ul style="text-align: center;">
              <li><a href="http://shanwentou.com.cn/enter/scg/scg.html" target="_blank">集团简介</a></li>
              <li><a href="http://shanwentou.com.cn/enter/organization/organization.html" target="_blank">组织架构</a></li>
              <li><a href="http://shanwentou.com.cn/enter/honor/honor.html" target="_blank">荣誉展示</a></li>
              <li><a href="http://shanwentou.com.cn/enter/contact/contact.html" target="_blank">联系我们</a></li>
              <li><a href="http://shanwentou.com.cn/installation.html" target="_blank">人才招聘</a></li>
            </ul>
            <p style="text-align: center; margin: 20px 0;"><a href="https://beian.miit.gov.cn"
                target="_blank">陕ICP备14004739号-1</a>
            </p>
            <a style="text-align: center;" href="http://shanwentou.com.cn/index.html" target="_blank">陕西文化产业投资控股（集团）有限公司
            </a>
          </div>
          <div class="footer-right">
            <img src="images/wentou/wentou-wechat.jpg" alt="陕西文化产业投资控股（集团）有限公司" style="width: 120px;" />
          </div>
        </div>
   `;
});
