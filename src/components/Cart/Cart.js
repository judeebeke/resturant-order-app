import React, {useContext} from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import  CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = (props) => {
  const cartContxt = useContext(CartContext)

  const cartItemRemoveHandler = (id) => {
    cartContxt.removeItem(id)
  } 
  
  const cartItemAddHandler = (item) => {
    cartContxt.addItem({...item, amount: 1})
  }

  const totalAmount = `$${cartContxt.totalAmount.toFixed(2)}`;
  const hasItems = cartContxt.items.length > 0;

  const cartItems = <ul className={['cart-items']}> {
    cartContxt.items.map((item, i) =>  <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler.bind(null, item)} /> )
  }</ul>
    
  return (
    <Modal onHide={props.onClose}>
        <div className={classes.cartitems}>
        {cartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
      </div>
    </Modal>
  )
}

export default Cart;