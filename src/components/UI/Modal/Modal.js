import React, { Component } from 'react'

import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

class Modal extends Component {
  //this could be a functional component but I'm just ckecking the lifecycle work
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.show !== this.props.show || nextProps.children !== this.props.children
  }

  componentWillUpdate() {
    console.log('[Modal] WillUpdate')
  }

  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes['Modal']}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}

export default Modal
