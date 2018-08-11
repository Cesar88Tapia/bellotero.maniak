import React, { Component } from 'react';

export default class Calculator extends Component {

  constructor(props) {
    super(props);
    this.state = {
      valueIngredients: 10,
      valueEmployees: 5,
      foodCost: 10 * 0.3,
      annualSaving: 5 * 1334 + 3
    }
  }


/*calcuating formula*/
  calculate_value = (e) => {
    e.preventDefault()
    var ingridients = document.getElementById("ingridientControl").value;
    var rangeE = document.getElementById("employeeControl").value;

    this.setState({
      valueIngredients: ingridients,
      valueEmployees: rangeE,
      foodCost: this.state.valueIngredients * 0.3,
      annualSaving: this.state.valueEmployees * 1334 + this.state.foodCost
    })
  }

  render() {
    return(
        <div className='calculator'>
          <div>
            <h3 className="calculator__title">
              <p>See how much you can<br/> save with Bellotero.io</p>
            </h3>
            <p className="calculator_p">
              With Bellotero.io you save time and money make real-time<br/>
              decisions that boost your business and your bottom line. Get less<br/>
              wrongfully blocked payments, save time on bookkeeping and no<br/>
              need to worry about safety.
            </p>
          <div>
            <h3 className="monthly">
              Monthly ingredient spending
            </h3>
            <div className="calculating_monthly">${this.state.valueIngredients}</div>
            <input
              type="range"
              className="slider_control"
              id="ingridientControl"
              min = {10}
              max = {100}
              value= {this.state.valueIngredients}
              onChange={this.calculate_value}>
            </input>
          </div>
          <div>
            <h3 className="invoice">
              Full-time employees that process invoices
            </h3>
            <div className="calculator__value">{this.state.valueEmployees}</div>
             <input
               id="employeeControl"
               type="range"
               className="slider_control"
               min = {1}
               max = {10}
               value = {this.state.valueEmployees}
               onChange={this.calculate_value}>
             </input>
          </div>
          </div>
          <div >
            <div >
              <div className="annualSaving">
                <h2>Your Estimated Anual savings</h2>
                <div>
                  <small>$</small>{this.state.annualSaving}
                </div>
              </div>
              <div className="foodCost">
                <h2>Your Estimated Food cost savings</h2>
                <div>
                  <small>$</small>{this.state.foodCost.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
};
