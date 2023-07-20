import React from "react";
import classes from './MealItemForm.module.css';

const MealItemForm = ()=>{
    return(
     <form className={classes.form}>
       {<label>Amount</label>}
       <input value={1}></input>
       <button>+Add</button>
     </form>);
}

export default MealItemForm;