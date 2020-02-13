import React, { useState } from 'react';
import { PaymentInputsWrapper, usePaymentInputs } from 'react-payment-inputs';
import images from 'react-payment-inputs/images';

function Card(props) {
  const [name, nameChange] = useState('');
  const [isName, changeIsName] = useState(true);

  const {
    meta,
    wrapperProps,
    getCardImageProps,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
  } = usePaymentInputs();


  const validate = (from) => {
    const errors = {};
    if (meta.erroredInputs.cardNumber) {
      errors.cardNumber = meta.erroredInputs.cardNumber;
    }
    if (meta.erroredInputs.expiryDate) {
      errors.expiryDate = meta.erroredInputs.expiryDate;
    }
    if (meta.erroredInputs.cvc) {
      errors.cvc = meta.erroredInputs.cvc;
    }
    if (name.length < 2 || name.length === undefined) {
      errors.name = 'Not enough character in name';
      changeIsName(false);
    } else {
      changeIsName(true);
    }
    if (from === 'pay' && Object.keys(errors).length === 0) {
      props.finishOrder();
      props.toggle();
    }
    return errors;
  };

  return (
    <div className="Card-main">
      <div className="Card-container">
        <button className="Close-card" onClick={() => props.toggle()}><span>Close</span></button>
        <div className="Card-input">
          <PaymentInputsWrapper {...wrapperProps}>
            <svg {...getCardImageProps({ images })} />
            <input {...getCardNumberProps()} />
            <input {...getExpiryDateProps()} />
            <input {...getCVCProps()} />
          </PaymentInputsWrapper>
        </div>
        <input className="Name" type="text" placeholder="Name on card" onChange={(input) => { nameChange(input.target.value); validate(); }} />
        {!isName && <span className="Name-error">Enter a name</span>}
        <button className="Pay" onClick={() => validate('pay')}><span>Pay</span></button>
      </div>
    </div>
  );
}

export default Card;
