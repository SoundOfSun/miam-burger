import React from 'react';

import Aux from '../../../hoc/Aux';

const orderSummary = ( props ) => {
  // Here, curly braces because we'll add some logic

  // Ingredients are objects, we need an array format to map
  const ingredientSummary = Object.keys(props.ingredients)
    .map(ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li> );
    });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burger with the following infredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout ?</p>
      <button>CANCEL</button>
      <button>CONTINUE</button>
    </Aux>
  );
};

export default orderSummary;
