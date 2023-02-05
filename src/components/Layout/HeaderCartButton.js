import React, {useContext, useEffect, useState} from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighted] = useState(false);

const cartContxt = useContext(CartContext)

const {items} = cartContxt;

// const cartItemContext = items.length;

const cartItemContext = items.reduce((curNumber, item) => {
    return curNumber + item.amount
}, 0);

const btnClasses = `${classes.button} ${btnHighlighted ? classes.bump : ''}`;

useEffect(() => {
    if(items.length === 0) {
        return;
    }
    setBtnHighlighted(true)

    const timer = setTimeout(()=>{
        setBtnHighlighted(false)
    }, 300)

    return () => {
        clearTimeout(timer)
    }
}, [items])

    return (
        <button className={btnClasses} onClick={props.onShow}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {cartItemContext}
            </span>
        </button>
    )
}

export default HeaderCartButton