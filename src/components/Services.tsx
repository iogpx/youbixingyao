import './Services.css'

const services = [
  {
    icon: '🌟',
    title: '性格与天赋分析',
    description: '深入了解您的性格特质，挖掘内在天赋，助力您找到最适合的发展方向'
  },
  {
    icon: '💼',
    title: '事业方向判断',
    description: '通过算命指导，帮您看清职业前景，把握事业发展的黄金时期'
  },
  {
    icon: '💝',
    title: '感情关系分析',
    description: '解读感情运势，提升人际关系质量，找到最适合的另一半'
  },
  {
    icon: '🔮',
    title: '人生阶段运势参考',
    description: '预测不同人生阶段的发展趋势，提前做好充分准备'
  },
  {
    icon: '⚡',
    title: '重要决策辅助',
    description: '在人生重大抉择时刻，提供占卜指导，助力您做出最优选择'
  },
  {
    icon: '🎯',
    title: '专业咨询指导',
    description: '资深占卜师一对一服务，为您答疑解惑，指点迷津'
  }
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="section-title">我的服务</h2>
        <p className="section-subtitle">为您提供专业、精准的命理分析及占卜咨询</p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
