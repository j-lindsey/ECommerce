import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import Logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = 'pk_test_51ITxC6BVZVCVUkGALVmDayCA7yvp0T2BrWhnd5lJ3VI1YQdqMNdEKJcjCz7VNjY7OKSDcKprZ57I9ctvdxjd8SOY00WxTQJLV4';

    const onToken = token=>{
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout label='Pay Now'
            name='Ecom Clothing'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishablekey}
        />
    )
}

export default StripeCheckoutButton;