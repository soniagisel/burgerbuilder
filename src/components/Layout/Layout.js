import React from 'react'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <SideDrawer />
      <main className={classes['content']}>{props.children}</main>
    </React.Fragment>
  )
}

export default layout
