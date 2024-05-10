import React, { FC, useContext, useEffect, useState } from "react";
import "./Payment.scss";
import "@/components/UI/forms/RadioButton/RadioButton.scss";
import Button from "@/components/UI/buttons/Button/Button";
import plusIcon from "@icons/plus.svg";
import removeIcon from "@icons/menu/cross.svg";
import paymentMethodsData from "@/data/PaymentMethods.json";
import { GlobalContext } from "@/components/widgets/GlobalContext/GlobalContext";
import ClientAddPaymentMethodForm from "@/components/UI/forms/ClientAddPaymentMethodForm/ClientAddPaymentMethodForm";

export interface PaymentMethod {
  alias: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  CVV: string;
  expirationDate: string;
}

const Payment: FC = () => {
  const {
    breadcrumbsLinks,
    setBreadcrumbsLinks,
    breadcrumbsTitles,
    setBreadcrumbsTitles,
    isOpenPopUp,
    setOpenPopUp,
    popUpData,
    setPopUpData,
  } = useContext(GlobalContext);

  const [currentPaymentMethod, setCurrentPaymentMethod] = useState<string>("Name1");
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([...paymentMethodsData]);

  useEffect(() => {
    setBreadcrumbsLinks(["/payment"]);
    setBreadcrumbsTitles(["Payment Methods"]);
  }, []);

  const handleOpenAddPopUp = () => {
    setPopUpData(<ClientAddPaymentMethodForm submitSuccess={handleAddPaymentMethod} formTitle="Add Payment Methods" />);
    setOpenPopUp(true);
  };

  const handleAddPaymentMethod = (data: PaymentMethod) => {
    paymentMethods.push(data);
  };

  const removeElement = (index: number) => {
    setPaymentMethods(paymentMethods.filter((_, i) => i !== index));
  };

  return (
    <div className="payment">
      <h1 className="title clientPage__main-title payment__title">Payment Methods</h1>

      <div className="payment__wrapper">
        {paymentMethods.length > 0 ? (
          <div className="payment__list">
            {paymentMethods.map((payment, index) => (
              <label
                className={`radio__container secondary big payment__item ${
                  currentPaymentMethod === payment.alias ? "active" : ""
                } ${paymentMethods.length === 1 ? "payment__item-one" : ""}`}
                htmlFor={`${payment.alias}-${index}`}
                key={index}
              >
                <button
                  className="payment__remove-button"
                  aria-label="Remove payment method"
                  onClick={() => removeElement(index)}
                >
                  <img
                    src={removeIcon}
                    alt="remove icon"
                    className="payment__remove-button-icon"
                    width="20"
                    height="20"
                    aria-hidden="true"
                    loading="lazy"
                  />
                </button>

                <input
                  type="checkbox"
                  id={`${payment.alias}-${index}`}
                  name="PaymentMethods"
                  value={currentPaymentMethod}
                  checked={currentPaymentMethod === payment.alias}
                  onChange={() => {
                    setCurrentPaymentMethod(payment.alias);
                  }}
                />

                <p className="radio-label radio__text text">{payment.alias}</p>

                <div className="payment__number">
                  <span className="payment__number-section ">XXXX</span>
                  <span className="payment__number-section ">XXXX</span>
                  <span className="payment__number-section ">XXXX</span>
                  <span className="payment__number-section ">{payment.cardNumber.split(" ")[3]}</span>
                </div>
              </label>
            ))}
          </div>
        ) : (
          <p className="heading-h2 payment__no-payment">no payment methods</p>
        )}

        <Button click={handleOpenAddPopUp} type="primary" buttonType="button" addClass="payment__add-button">
          <img
            src={plusIcon}
            alt="plus icon"
            className="payment__add-button-icon"
            width="15"
            height="15"
            aria-hidden="true"
            loading="lazy"
          />
          Add a new payment method
        </Button>
      </div>
    </div>
  );
};

export default Payment;
