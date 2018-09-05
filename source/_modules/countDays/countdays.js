'use strict';

export default class CountDays {
  constructor() {
    this.renderDayCountResult();
  }

  _calculatingDays() {
    let initialDate = 0;
    let today = 0;
    let differenceBetweenDays = 0;
    let calculateResult = 0;

    initialDate = new Date( 2018, 2, 25 );
    today = new Date();
    differenceBetweenDays = Math.abs( initialDate - today );
    calculateResult = Math.ceil( differenceBetweenDays /  ( ( 1000 * 3600 ) * 24 ) )

    return calculateResult;
  }

  renderDayCountResult() {
    let calculateResult = this._calculatingDays();
    console.log(calculateResult);
  }
}
