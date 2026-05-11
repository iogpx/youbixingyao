import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>✦ 右弼星曜 ✦</h3>
          <p>专业的占卜算命咨询服务，助力您把握人生方向</p>
        </div>
        
        <div className="footer-section">
          <h4>快速链接</h4>
          <ul>
            <li><a href="#services">服务介绍</a></li>
            <li><a href="#cases">成功案例</a></li>
            <li><a href="#process">咨询流程</a></li>
            <li><a href="#contact">联系我们</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>联系方式</h4>
          <ul>
            <li>📧 邮箱：<a href="mailto:1939196383@qq.com">1939196383@qq.com</a></li>
            <li>📱 微信：youbixingyao</li>
            <li>☎️ 电话：请通过微信或邮箱联系</li>
            <li>⏰ 在线咨询时间：09:00-21:00</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>服务承诺</h4>
          <ul>
            <li>✓ 专业保密</li>
            <li>✓ 精准分析</li>
            <li>✓ 贴心服务</li>
            <li>✓ 持续支持</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} 右弼星曜. All rights reserved.</p>
        <p>看懂人生阶段，减少错误选择</p>
      </div>
    </footer>
  )
}
