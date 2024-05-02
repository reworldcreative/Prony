import React, { FC, useRef, useState, useEffect, useContext } from "react";
import "./CreditCardInput.scss";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";

interface CreditCardInput {
  submitSuccess: (data: string) => void;
}

const CreditCardInput: FC<CreditCardInput> = ({ submitSuccess }) => {
  const { isOpenPopUp, setOpenPopUp } = useContext(GlobalContext);
  const [cardNumbers, setCardNumbers] = useState(["", "", "", ""]);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleChange = (value: string, index: number) => {
    const numericValue = value.replace(/[^0-9]/g, ""); // Видаляємо нечислові символи
    const updatedCardNumbers = [...cardNumbers];
    const firstShortIndex = updatedCardNumbers.findIndex((part) => part.length < 4);

    if (firstShortIndex > -1 && index > firstShortIndex && updatedCardNumbers[index].length === 0) {
      // Якщо поле заповнюється у неправильному порядку, фокус на перше незаповнене
      inputRefs[firstShortIndex]?.current?.focus();
    } else {
      // Оновлюємо значення в полі
      updatedCardNumbers[index] = numericValue;

      // Переміщення фокусу, якщо поточне заповнене
      if (numericValue.length === 4 && index < 3) {
        inputRefs[index + 1]?.current?.focus();
      }

      setCardNumbers(updatedCardNumbers); // Оновлення стану
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && cardNumbers[index].length === 0 && index > 0) {
      inputRefs[index - 1]?.current?.focus();
    }
  };

  useEffect(() => {
    const allFieldsFilled = cardNumbers.every((num) => num.length === 4);
    if (allFieldsFilled) {
      submitSuccess(cardNumbers.join(" "));
    } else {
      submitSuccess("");
    }
  }, [cardNumbers]);

  useEffect(() => {
    setCardNumbers(["", "", "", ""]);
  }, [isOpenPopUp]);

  return (
    <div className="card-input__wrapper">
      <p className="input__label text card-input__label">Card number</p>

      <div className="card-input__container">
        {inputRefs.map((ref, index) => (
          <input
            key={index}
            className="input card-input__item"
            ref={ref}
            type="text"
            maxLength={4}
            value={cardNumbers[index]}
            inputMode="numeric"
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            pattern="\d*"
          />
        ))}
      </div>
    </div>
  );
};

export default CreditCardInput;
