import React, { Component } from 'react'

import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerOpenedHandler = () => {
    this.setState({ showSideDrawer: true })
  }

  render() {
    return (
      <React.Fragment>
        <Toolbar openMenu={this.sideDrawerOpenedHandler} />
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
        <main className={classes['content']}>{this.props.children}</main>
      </React.Fragment>
    )
  }
}

export default Layout
