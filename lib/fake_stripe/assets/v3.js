class StripeElement {
  mount(el) {
    if (typeof el === "string") {
      el = document.querySelector(el);
    }

  console.log(this)
      if(this.type === "cardNumber") {
        el.innerHTML = `
          <div class="credit-card-response__card StripeElement StripeElement--empty" data-placeholder="Card Number">
            <div class="__PrivateStripeElement" style="margin: 0px !important; padding: 0px !important; border: medium none !important; display: block !important; background: transparent none repeat scroll 0% 0% !important; position: relative !important; opacity: 1 !important;">
              <input placeholder="Card Number" scrolling="no" id="stripe-cardnumber" name="cardnumber" allowpaymentrequest="true" style="border: medium none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; height: 19.2px;" frameborder="0">
            </div>
          </div>
        `;
      } else if(this.type === "cardExpiry") {
        el.innerHTML =  `
          <div data-placeholder="MM/YY" class="StripeElement StripeElement--empty">
            <div class="__PrivateStripeElement" style="margin: 0px !important; padding: 0px !important; border: medium none !important; display: block !important; background: transparent none repeat scroll 0% 0% !important; position: relative !important; opacity: 1 !important;">
              <input placeholder="MM/YY" allowtransparency="true" scrolling="no" name="exp-date" allowpaymentrequest="true" style="border: medium none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; height: 19.2px;" frameborder="0">
            </div>
          </div>
        `
      } else if(this.type === "cardCvc") {
        el.innerHTML = `
          <div data-target="donations.cvc" data-placeholder="CVC" class="StripeElement StripeElement--empty">
            <div class="__PrivateStripeElement" style="margin: 0px !important; padding: 0px !important; border: medium none !important; display: block !important; background: transparent none repeat scroll 0% 0% !important; position: relative !important; opacity: 1 !important;">
              <input autocomplete="cc-csc" autocorrect="off" spellcheck="false" type="tel" name="cvc" aria-label="Credit or debit card CVC/CVV" placeholder="CVC" aria-invalid="false" value="" scrolling="no" allowpaymentrequest="true" style="border: medium none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; height: 19.2px;" frameborder="0">
            </div>
          </div>
        `
      } else if (this.type === "postalCode") {
        el.innerHTML = `
          <div data-target="donations.postalCode" data-placeholder="ZIP" class="StripeElement StripeElement--empty">
            <div class="__PrivateStripeElement" style="margin: 0px !important; padding: 0px !important; border: medium none !important; display: block !important; background: transparent none repeat scroll 0% 0% !important; position: relative !important; opacity: 1 !important;">
              <input autocomplete="postal-code" autocorrect="off" spellcheck="false" type="text" name="postal" aria-label="Postal code" placeholder="ZIP" aria-invalid="false" value="" allowpaymentrequest="true" style="border: medium none !important; margin: 0px !important; padding: 0px !important; width: 1px !important; min-width: 100% !important; overflow: hidden !important; display: block !important; user-select: none !important; height: 19.2px;" frameborder="0">
            </div>
          </div>
        `
      }
  }

  addEventListener() {}
}

window.Stripe = () => {
  const fetchLastFour = () => {
    return document.getElementById("stripe-cardnumber").value.substr(-4, 4);
  };

  return {
    elements: () => {
      return {
        create: (type, options) => new StripeElement()
      };
    },

    createToken: card => {
      return new Promise(resolve => {
        resolve({ token: { id: "tok_123", card: { last4: fetchLastFour() } } });
      });
    },

    confirmCardSetup: () => {
      return Promise.resolve({});
    },

    handleCardAction: () => {
      return Promise.resolve({});
    },

    handleCardPayment: () => {
      return Promise.resolve({});
    },

    retrievePaymentIntent: () => {
      return Promise.resolve({});
    }
  };
};
