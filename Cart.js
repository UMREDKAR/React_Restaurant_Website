import React, { useContext, useState } from "react";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartCntxt from '../../store/card-context';

const Cart = (props)=>{
   
    const cartCntx = useContext(CartCntxt);
  
    let carditems;
    
    const[decrease , setDecrease] = useState('');
    const[increase , setIncrease] = useState('');

    const decreaseHandler =(id)=>{
      cartCntx.items.forEach((item) => {
        if (item.id === id && item.quantity>0) 
        {
           item.quantity = item.quantity-1;
           setDecrease(item.quantity);
        } 
      });  
    };

    const increaseHandler =(id)=>{
      cartCntx.items.forEach((item) => {
        if (item.id === id) 
        {
           //ids=item.id;
           item.quantity = item.quantity-1+2;
           setIncrease(item.quantity);
        } 
      });  
    };

    carditems=(<ul className={classes['cart-items']}>
      {cartCntx.items.map(item =>
        (
        <li style={{background:"lightblue" , borderRadius: "5px"}} key={item.id}><strong>{item.name}</strong>
         <br/>    
         <strong>${item.price}</strong>

         <aside style={{textAlign: "right"}}>
          <strong>
           Quantity : {item.quantity}
          </strong>
         <button style={{background:"red"}} onClick={()=>decreaseHandler(item.id)}> - </button>
         <span>   </span>
         <button style={{background:"green"}} onClick={()=>increaseHandler(item.id)}> + </button>
         </aside>
         <hr/>
         </li>
         
         ))
      }
      </ul>
     );
     
    
    let total = 0;
    let another;
    cartCntx.items.forEach(item=>{
          total=total+(item.price*item.quantity);
          another=total.toFixed(2);
          //console.log(item.id);
    })

    return(
      <Modal onHideCart={props.onHideCart}>
        {carditems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{another}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onHideCart}>
              close</button>
            <button className={classes.button}>Order</button>
        </div>
      </Modal>);
}

export default Cart;