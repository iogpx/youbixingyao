import './Process.css'

const steps = [
  {
    number: '1',
    title: '留下信息',
    description: '通过表单或扫码加微信，告诉我们您的需求'
  },
  {
    number: '2',
    title: '确认咨询',
    description: '我们会尽快与您联系，确认咨询时间和方式'
  },
  {
    number: '3',
    title: '排盘、起卦',
    description: '为您进行全面的运势、卦象分析'
  },
  {
    number: '4',
    title: '详细解读',
    description: '为您详细解读结果，提供实用的建议和指导'
  }
]

export default function Process() {
  return (
    <section id="process" className="process">
      <div className="process-container">
        <h2 className="section-title">咨询流程</h2>
        <p className="section-subtitle">简单四步，让专业指导走进您的人生</p>
        <div className="steps-container">
          {steps.map((step, index) => (
            <div key={index} className="step">
              <div className="step-circle">{step.number}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              {index < steps.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
