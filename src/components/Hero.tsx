import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">看懂人生阶段</h1>
        <h2 className="hero-subtitle">减少错误选择</h2>
        <p className="hero-description">
          通过命理解析、占卜咨询，助力您深入了解自己，把握人生关键时刻
        </p>
        <div className="hero-cta">
          <button className="cta-btn primary">立即咨询</button>
          <button className="cta-btn secondary">了解更多</button>
        </div>
      </div>
      <div className="hero-accent">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </section>
  )
}
