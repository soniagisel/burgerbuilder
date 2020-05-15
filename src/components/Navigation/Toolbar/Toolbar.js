import Logo from '../../Logo/Logo'
import React from 'react'
import classes from './Toolbar.module.css'

const toolbar = props => (
  <header className={classes['Toolbar']}>
    <div>Menu</div>
    <Logo />
    <nav>...</nav>
  </header>
)

export default toolbar
