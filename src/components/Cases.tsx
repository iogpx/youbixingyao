import './Cases.css'

const cases = [
  {
    name: '蔡先生',
    issue: '能否成功调动至新平台、新体制内任职？',
    result: '通过卦象分析，可以成功调动，但不能一步到位，需要二次才能成功，客户现已成功转至更高平台、新的体制内任职。',
    rating: 5
  },
  {
    name: '王先生',
    issue: '当下时机能否购置房产？',
    result: '通过卦象分析，目前购房时机尚未成熟，在戌年（即狗年：2030年）最佳，若急需购入，可以择次选每年的戌月、戌日购入。同时，属狗之人为贵人，可寻求其建议和帮助。现客户已按要求，暂缓买房，经了解，其父属狗，后续将借助父亲的建议和支持购房。',
    rating: 5
  },
  {
    name: '李先生',
    issue: '当下能否离职？',
    result: '通过卦象分析，可以离职，但须先破后成，不破不立，离职后的阶段会较艰难，但后续会有贵人相救，为客户做决策提供完整、全面的情境解读。',
    rating: 5
  },
  {
    name: '李小姐',
    issue: '能否转行至某新行业？',
    result: '可以转行，但有前提条件，需二人同行，相辅相成才能成事，且属虎、名字带虎之人是贵人；属蛇之人为小人，易受其影响。',
    rating: 5
  }
]

export default function Cases() {
  return (
    <section id="cases" className="cases">
      <div className="cases-container">
        <h2 className="section-title">成功案例</h2>
        <p className="section-subtitle">数十位客户已通过我们的服务改善了人生轨迹</p>
        <div className="cases-grid">
          {cases.map((caseItem, index) => (
            <div key={index} className="case-card">
              <div className="case-header">
                <h3 className="case-name">{caseItem.name}</h3>
                <div className="case-rating">
                  {'⭐'.repeat(caseItem.rating)}
                </div>
              </div>
              <div className="case-issue">
                <p><strong>咨询问题：</strong> {caseItem.issue}</p>
              </div>
              <div className="case-result">
                <p><strong>咨询成果：</strong> {caseItem.result}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
