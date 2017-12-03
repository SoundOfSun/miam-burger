import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
  // curly braces to return JSX

  // change ingredients object into an array (see state)
  // .keys get the keys only to populate an array
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />
      });
    })
    // reduce is a js array func to transform an array into smtg else
    .reduce((prevVal, currVal) => {
      return prevVal.concat(currVal);
    }, []);
  console.log(transformedIngredients);
  // Now we end up with empty array or array of jsx objects

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients !</p>
  }

  // need div for style height/width
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
