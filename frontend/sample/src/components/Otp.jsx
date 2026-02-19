import { useRef } from "react";
import { useState } from "react";

export default function OTP({ otpFields = 6 }) {
  const [otp, setOtp] = useState(new Array(otpFields).fill(""));
  const ref = useRef([]);

  const handleKeypress = (e, index) => {
    const key = e.key;
    const otpCopy = [...otp];

    if (key === "ArrowRight") {
      if (index + 1 < otp.length) ref.current[index + 1].focus();
      return;
    }

    if (key === "ArrowLeft") {
      if (index > 0) ref.current[index - 1].focus();
      return;
    }

    if (key === "Backspace") {
      otpCopy[index] = "";
      setOtp(otpCopy);

      if (index > 0) {
        ref.current[index - 1].focus();
        return;
      }
    }

    if (isNaN(key)) {
      e.preventDefault();
      return;
    }

    // eslint-disable-next-line react-hooks/immutability
    otpCopy[index] = key;
    setOtp(otpCopy);

    if (index + 1 < otp.length) ref.current[index + 1].focus();
  };

  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(currentInput) => {
              ref.current[index] = currentInput;
            }}
            value={value}
            onKeyDown={(e) => handleKeypress(e, index)}
          />
        );
      })}
    </div>
  );
}
