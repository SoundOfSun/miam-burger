import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  // JS object
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  // state or constructor
  state = {
    // object
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4,
  }

  // Method 1 : Add ingredients
  addIngredientHandler = (type) => {
    // Get old ing count
    const oldCount = this.state.ingredients[type];
    // Calculate updated count
    const updatedCount = oldCount + 1;
    // Update Ingredients - immutable way
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // Acces the type of ingredient to add + set the count value
    updatedIngredients[type] = updatedCount;
    // Update price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    // Update ingredients & price in state
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  // Method 2 : Remove ingredients
  removeIngredientHandler = (type) => {
    // Get old ing count
    const oldCount = this.state.ingredients[type];
    // Count cannot be negative, if neg, stop here
    if (oldCount <= 0) {
      return;
    }
    // Calculate updated count
    const updatedCount = oldCount - 1;
    // Update Ingredients - immutable way
    const updatedIngredients = {
      ...this.state.ingredients
    };
    // Acces the type of ingredient to add + set the count value
    updatedIngredients[type] = updatedCount;
    // Update price
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    // Update ingredients & price in state
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});
  }

  render () {
    // Logic for disabled btns
    const disabledInfo = {
      ...this.state.ingredients
    };

    for ( let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice} />
      </Aux>
    );
  }
}

export default BurgerBuilder;
