import { useState } from 'react'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const wechatNumber = 'youbixingyao'

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText(wechatNumber)
      alert('微信号已复制：' + wechatNumber + '\n请打开微信搜索添加。')
    } catch {
      prompt('请复制微信号', wechatNumber)
    }
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>✦ 右弼星曜 ✦</h1>
        </div>
        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a href="#services">服务介绍</a>
          <a href="#cases">成功案例</a>
          <a href="#process">咨询流程</a>
          <a href="#contact">联系我们</a>
        </nav>
        <button className="wechat-btn" onClick={handleCopyWechat}>
          🔗 复制微信号
        </button>
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </header>
  )
}
