import React, { Component } from 'react'

import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: true,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes['content']}>{this.props.children}</main>
      </React.Fragment>
    )
  }
}

export default Layout
