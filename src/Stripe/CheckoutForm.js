import React, { useState, useMemo } from "react";
import {  useStripe, useElements, CardCvcElement, CardNumberElement, CardExpiryElement } from "@stripe/react-stripe-js";
import axios from "axios";
import { Button } from "@material-ui/core";
import styles from './CheckoutForm.module.css'
import { useModal } from 'react-hooks-use-modal';

const CARD_OPTIONS = {
	style: {
		base: {
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "gray", }
		}
	}
}


export const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [modalPopupMsg, setModalPopupMsg] = useState('Please make sure you filled all the fields ');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      card: elements.getElement(CardExpiryElement),
      card: elements.getElement(CardCvcElement),
    });

    if (!error) {
      console.log("Stripe 23 | token generated!", paymentMethod);
      //send token to backend here
      try{
        const { id } = paymentMethod;
        const response = await axios.post(
            "http://localhost:7000/stripe/charge", {
                amount: 999,
                id: id,
            }
        );

        console.log("Stripe 35 | data", response.data.success);
        if(response.data.success){
            console.log("CheckoutForm.js 25 | payment successful!");
            setModalPopupMsg('Your Donation is done successfully! Thanks for being our hero');

        }
      } catch (error){
        console.log("CheckoutForm.js 28 | ", error);
        setModalPopupMsg('Error has accured during donation process, could you try later!')
      }
    } else {
      setError(error.message)
      console.log(error.message);
      setModalPopupMsg(error.message)
    }
  };
  
  /*********Modal popup after submit ******/
  const  [Modal, open, close, isOpen] = useModal('root', {
    preventScroll: true,
    closeOnOverlayClick: false
  });


  return (
    <>
        <form onSubmit={handleSubmit} className={styles.donationForm}>
          <table className={styles.formTable}>
          <tr>
            <td className={styles.labels}>
              <label htmlFor="name">Name</label>
            </td>
            <td className={styles.inputs}>
              <input type="text" placeholder="Name" name="name" required></input> <br/>
            </td>
          </tr>
          <tr>
            <td className={styles.labels}>
            <label htmlFor="email">Email</label>
            </td>
            <td className={styles.inputs}>
            <input type="email" placeholder="Your email address" name="email" reuqired/> <br/>
            </td>
          </tr>
          <tr>
            <td className={styles.labels}>
              Card Number
            </td>
            <td className={styles.inputs}>
               <CardNumberElement className={styles.cardinfos} options={CARD_OPTIONS}/>
            </td>
          </tr>
          <tr>
          <td className={styles.labels}>
              Expiration Date
            </td>
            <td className={styles.inputs}>
               <CardExpiryElement className={styles.cardinfos} options={CARD_OPTIONS} />
            </td>
          </tr>
          <tr>
          <td className={styles.labels}>
              CVC Number
            </td>
            <td className={styles.inputs}>
               <CardCvcElement className={styles.cardinfos} options={CARD_OPTIONS}/>
            </td>
          </tr>
      </table>
          <div id={styles.btnContainer}>
          <Button type="submit" variant="contained" disabled={!stripe} id={styles.submitBtn} onClick={open}>
                SUBMIT DONATION
          </Button>
          <Modal>
            <div className={styles.popupModal}>
              <p>{modalPopupMsg}</p>
              <button onClick={close} className={styles.closeButton}>
                CLOSE
             </button>
            </div>
          </Modal>
          </div>
      </form>


      
    </>
    
  );
};