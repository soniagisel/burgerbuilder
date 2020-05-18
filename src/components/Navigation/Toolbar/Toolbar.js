import BurgerButton from '../../UI/Button/BurgerButton/BurgerButton'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import React from 'react'
import classes from './Toolbar.module.css'

const toolbar = props => (
  <header className={classes['Toolbar']}>
    <BurgerButton clicked={props.openMenu} />
    <div className={classes.Logo}>
      <Logo />
    </div>
    <nav className={classes['DesktopOnly']}>
      <NavigationItems />
    </nav>
  </header>
)

export default toolbar
