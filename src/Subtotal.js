import React from "react";
import './Subtotal.css';
import CurrencyInput from 'react-currency-input-field';

function Subtotal() {
    const [value, setValue] = React.useState(0);

    return (
        <div className="subtotal">
            <p>
                Subtotal (0 items): <strong>${value}</strong>
            </p>
            <CurrencyInput
                decimalScale={2}
                value={value}
                onValueChange={(newValue) => setValue(newValue)}
                prefix="$"
            />
            <small className="subtotal__gift">
                <input type="checkbox" /> This contains a gift
            </small>
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal;
