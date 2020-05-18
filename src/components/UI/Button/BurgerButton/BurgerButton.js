import React from 'react'
import classes from './BurgerButton.module.css'

const burgerButton = props => (
  <div className={classes.buttonContainer} onClick={props.clicked}>
    <div className={classes.burgerLayer}></div>
    <div className={classes.burgerLayer}></div>
    <div className={classes.burgerLayer}></div>
  </div>
)

export default burgerButton
