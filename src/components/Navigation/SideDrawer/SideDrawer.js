import Backdrop from '../../UI/Backdrop/Backdrop'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import React from 'react'
import classes from './SideDrawer.module.css'

const sideDrawer = props => {
  console.log('PROPS OPEN', props.open)
  let attachedClasses = [classes['SideDrawer'], classes['Close']]
  //console.log('attached string ', attachedClasses.join(' '))
  if (props.open) {
    attachedClasses = [classes['SideDrawer'], classes['Open']]
    //console.log('after open ', attachedClasses.join(' '))
  }
  console.log('attached string ', attachedClasses.join(' '))
  return (
    <React.Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </React.Fragment>
  )
}

export default sideDrawer
