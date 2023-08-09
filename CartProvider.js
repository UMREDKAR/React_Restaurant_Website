import { useState } from "react";
import CardContext from "./card-context"

const CartProvider = (props) =>{
   const [items,updateItems] = useState([]);

   const addItemToCartHandler = (item) =>{
     const exist = items.find((x)=>x.id===item.id);
     
     if(exist)
     {
      const newCartItems = items.map((x)=>
      x.id===item.id ? {...exist, quantity: parseInt(exist.quantity)+parseInt(item.quantity)} : x
      );
      updateItems(newCartItems);
     }
     else
     {
       const newCartItems = [...items,{...item,quantity: item.quantity}];
       updateItems(newCartItems);
     }
   };

   const removeItemFromCartHandler = (id) =>{};

 const cartContext ={
    items: items,
   // totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler};
 
   return(<CardContext.Provider value={cartContext}>
    {props.children}
   </CardContext.Provider>)
}

export default CartProvider;