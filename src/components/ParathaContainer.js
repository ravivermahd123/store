import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Grid } from 'semantic-ui-react'
import { ParathaList } from '../data/parathas'
import Parat from './para'

const ParathasContainer = props => {
  let parathas = Object.keys(ParathaList).map(key => {
    return (
      <Parat
        key={key}
        details={ParathaList[key]}
        addToOrder={props.addToOrder}
        index={key}
      />
    )
  })
  return (
    <Grid stackable columns={3}>
      {parathas}
    </Grid>
  )
}

ParathasContainer.propTypes = {
  addToOrder: PropTypes.func.isRequired
}

export default ParathasContainer
