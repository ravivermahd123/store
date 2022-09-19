import React, { Component, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid, Image, Button, Segment, Header, Rating } from 'semantic-ui-react'
import { formatPrice, veg } from '../helpers'

class para extends Component {
  static propTypes = {
    addToOrder: PropTypes.func.isRequired,
    details: PropTypes.object.isRequired
  }

  render () {
    const {
      name,
      image,
      price,
      description,
      rating,
      isVeg
    } = this.props.details

    return (
      <Grid.Column mobile={5} tablet={8} computer={5}>
        <Segment id='Parathas-card' raised>
          <Image src={image} />
          <Header as='h3'>{name}</Header>
          <p>{description}</p>
          <p>
            <strong>{veg(isVeg)}</strong>
          </p>
          <Rating defaultRating={rating} maxRating={5} disabled />
          <div id='Parathas-order-info'>
            <Header as='h3'>{formatPrice(price)}</Header>
            <p>
              <Button
                onClick={() => this.props.addToOrder(this.props.index)}
                color='teal'
              >
                Add to order
              </Button>
            </p>
          </div>
        </Segment>
      </Grid.Column>
    )
  }
}

export default para
