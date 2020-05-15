import React from 'react'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

const layout = props => {
  return (
    <React.Fragment>
      <Toolbar />
      <main className={classes['content']}>{props.children}</main>
    </React.Fragment>
  )
}

export default layout
