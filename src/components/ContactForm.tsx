import { useState } from 'react'
import './ContactForm.css'

interface ContactFormProps {
  onSuccess: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    wechat: '',
    question: '',
    phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [qrError, setQrError] = useState(false)

  const wechatQRCode = './wechat-qrcode.png'

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/meenvkdl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setMessage('信息已成功提交！我们会尽快联系您。')
        setFormData({ name: '', wechat: '', question: '', phone: '' })
        onSuccess()
      } else {
        setMessage('提交失败，请重试')
      }

      setTimeout(() => setMessage(''), 5000)
    } catch {
      setMessage('提交失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="contact-form-section">
      <div className="contact-container">
        <div className="form-wrapper">
          <h2 className="section-title">我想了解更多</h2>
          <p className="section-subtitle">留下您的信息，我们会尽快与您联系</p>
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">您的称呼 *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="请输入您的称呼"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="wechat">微信号 *</label>
              <input
                type="text"
                id="wechat"
                name="wechat"
                value={formData.wechat}
                onChange={handleChange}
                placeholder="请输入您的微信号"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">电话号码</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="请输入您的电话号码（可选）"
              />
            </div>

            <div className="form-group">
              <label htmlFor="question">您的问题 *</label>
              <textarea
                id="question"
                name="question"
                value={formData.question}
                onChange={handleChange}
                placeholder="请简要描述您想咨询的问题"
                rows={4}
                required
              ></textarea>
            </div>

            {message && <div className="form-message">{message}</div>}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? '提交中...' : '提交信息'}
            </button>
          </form>
        </div>

        <div className="qrcode-wrapper">
          <h3>或者直接扫码咨询</h3>
          {qrError ? (
            <div className="qrcode-placeholder">
              <div className="qrcode-img">📱</div>
              <p>请将真实二维码保存到 public/wechat-qrcode.png</p>
            </div>
          ) : (
            <img
              src={wechatQRCode}
              alt="微信二维码"
              className="qrcode-img"
              onError={() => setQrError(true)}
            />
          )}
          <p className="qrcode-text">扫码添加微信：youbixingyao</p>

        </div>
      </div>
    </section>
  )
}
