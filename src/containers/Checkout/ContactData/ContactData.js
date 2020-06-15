import React, { Component } from 'react'

import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import axios from '../../../axios-orders'
import classes from './ContactData.module.css'

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: '',
    },
    loading: false,
  }

  orderHandler = event => {
    event.preventDefault()
    console.log(this.props.ingredients)
    this.setState({ loading: true })
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Sonia',
        address: {
          street: '742 Evergreen Ave.',
          zipCode: '765456',
          country: 'United States',
        },
        email: 'test@burgertesting.com',
      },
      deliveryMethod: 'fastest',
    }
    axios
      .post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false })
        this.props.history.push('/')
      })
      .catch(err => this.setState({ loading: false }))
  }

  render() {
    let form = (
      <form>
        <input className={classes['Input']} type='text' name='name' placeholder='Your Name' />
        <input className={classes['Input']} type='email' name='email' placeholder='Your Email' />
        <input className={classes['Input']} type='text' name='street' placeholder='Street' />
        <input className={classes['Input']} type='text' name='postal' placeholder='Postal Code' />
        <Button btnType='Success' clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    )
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes['ContactData']}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData