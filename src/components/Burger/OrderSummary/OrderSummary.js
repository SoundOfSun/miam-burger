import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // Here, curly braces because we'll add some logic
  // This could be a functional component
  // It's stateful to get the debugging WillUpdate

  // Check when the Summary inside the modal updates : each time add ing.
  componentWillUpdate() {
    console.log('[OrderSummary] WillUpdate');
  }

  render () {
    // Ingredients are objects, we need an array format to map
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ingKey => {
        return (
          <li key={ingKey}>
            <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
          </li> );
      });

    return (
      <Aux>
        <h3>Your order</h3>
        <p>A delicious burger with the following infredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total price: {this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout ?</p>
        <Button
          btnType="Danger"
          clicked={this.props.purchaseCancelled}>CANCEL</Button>
        <Button
          btnType="Success"
          clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
    );
  }
}

export default OrderSummary;
