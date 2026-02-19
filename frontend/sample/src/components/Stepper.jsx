import { useState } from "react";

export default function Stepper({ data }) {
  const [step, setStep] = useState(0);

  const handleContinue = () => {
    if (step < data.length - 1) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };
  return (
    <div className="stepper">
      <div>
        {data.map(({ label, _ }, index) => (
          <div key={index} className="step-container">
            <div className={`stepper-number ${index <= step ? "active" : ""}`}>
              {index + 1}
              {index < data.length - 1 && (
                <div
                  className={`stepper-line ${index < step ? "active" : ""}`}
                ></div>
              )}
            </div>

            <div className="stepper-label">{label}</div>
          </div>
        ))}
      </div>
      <div>{data[step].content}</div>
      <div className="control-buttons">
        <button onClick={handleBack}> Back </button>
        <button onClick={handleContinue}> Continue </button>
      </div>
    </div>
  );
}
