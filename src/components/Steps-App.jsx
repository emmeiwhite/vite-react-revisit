import { useState } from 'react'

export default function StepsApp() {
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  // Business Logic
  const handlePrev = () => {
    console.log('prev button clicked!')
    if (step === 1) return

    setStep(prev => prev - 1)
  }

  const handleNext = () => {
    console.log('next button clicked!')
    if (step === 3) return
    setStep(next => next + 1)
  }

  return (
    <main>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="toggle"
      >
        {isOpen ? <span>❌</span> : <span>✅</span>}
      </div>
      {isOpen && (
        <section className="steps-container">
          <h1>Steps App</h1>
          <div className={`steps-wrapper`}>
            <div className={`step  ${step >= 1 ? 'active' : ''}`}>1</div>
            <div className={`step  ${step >= 2 ? 'active' : ''}`}>2</div>
            <div className={`step  ${step >= 3 ? 'active' : ''}`}>3</div>
          </div>

          <h2>
            <span>Step- {step}:</span>
            {step === 1 && 'Learn React 💻'}
            {step === 2 && 'Apply for Jobs 📝'}
            {step === 3 && 'Invest your new income 🚀'}
          </h2>

          <div className="buttons-wrapper">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </section>
      )}
    </main>
  )
}
