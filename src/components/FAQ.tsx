import { useState } from 'react'
import './FAQ.css'

const faqs = [
  {
    question: '占卜算命的准确性有多高？',
    answer: '我采用传统的八卦、五行等方法结合现代心理学，根据您的具体情况进行个性化分析。准确性取决于提供的信息完整程度和您对建议的执行力。'
  },
  {
    question: '咨询需要多长时间？',
    answer: '初次咨询通常需要30-60分钟，具体时长根据问题的复杂程度而定。我会为您提供详细的卦象分析和实用建议。'
  },
  {
    question: '咨询的费用是多少？',
    answer: '咨询费用根据服务类型和深度而定。详情请在提交表单后与我联系，我会根据您的需求提供合理的报价。'
  },
  {
    question: '咨询后如何跟进？',
    answer: '咨询后我会为您提供详细的书面报告。如有任何疑问，您可以随时与我联系，我会持续为您提供指导和支持。'
  },
  {
    question: '如何确保隐私安全？',
    answer: '您的个人信息和咨询内容将被严格保密。我采用加密方式存储数据，不会向第三方透露任何信息。'
  },
  {
    question: '可以远程咨询吗？',
    answer: '可以的。我们提供微信、电话、视频等多种远程咨询方式，您可以选择最方便的方式进行咨询。'
  }
]

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <section className="faq">
      <div className="faq-container">
        <h2 className="section-title">常见问题</h2>
        <p className="section-subtitle">解答您心中的疑虑</p>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${expandedIndex === index ? 'expanded' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{expandedIndex === index ? '−' : '+'}</span>
              </button>
              {expandedIndex === index && (
                <div className="faq-answer">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
