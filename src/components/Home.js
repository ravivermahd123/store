import React, { Component } from 'react'
import { First } from 'react-bootstrap/lib/Pagination'
import { Link } from 'react-router-dom'
import { Container, Header, Button } from 'semantic-ui-react'

function Home() {
 
    return (
      <div id='home-page'>
        <Container>
          <Header as='h1' id='home-logo'>
          Paratha
          </Header>
          <Container id='home-content'>
            <Header as='h1' id='home-header'>
              Delicious paratha delivered to your doorstep
            </Header>
            <Link to='/menu'>
              <Button color='teal' size='large' width={4}>
                {' '}
                ORDER NOW{' '}
              </Button>
            </Link>
          </Container>
        </Container>
      </div>
    )
  }


export default Home
