import React from 'react';
import {Elements, injectStripe, CardElement, StripeProvider} from 'react-stripe-elements';
// import "../../css/servicebot--form-elements.css";

class CardSection extends React.Component {

    constructor(props){
        super(props);
        this.state = {  loading: false,
            uid: uid,
            email: username,
            CardModal: false,
            rows: {},
            cardObject: {},
            price: props.plan.amount
        };
    }

    render() {
        return (
            <div className="form-group" id="card-element">
                <h5>Payment Info</h5>
                <CardElement style={{
                    base: {
                        color: '#32325d',
                        lineHeight: '24px',
                        fontFamily: 'Helvetica Neue',
                        fontSmoothing: 'antialiased',
                        fontSize: '16px',
                        '::placeholder': {
                            color: '#aab7c4'
                        }
                    },
                    invalid: {
                        color: '#fa755a',
                        iconColor: '#fa755a'
                    }
                }}/>
            </div>
        );
    }
}




export {CardSection};
