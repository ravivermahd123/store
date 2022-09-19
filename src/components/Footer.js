import React from 'react'
import { Menu } from 'semantic-ui-react'

const Footer = () => (
  <Menu fluid widths={1} fixed='bottom' id='footer'>
    <Menu.Item>
      <p>
        © 2022 Paratha
        <span role='img' aria-label='Paratha'>
          {' '}
           Made by{' '}
          <a
            href='https://github.com/ravivermahd123'
            target='_blank'
            rel='noopener noreferrer'
          >
            Ravi
          </a>
        </span>
      </p>
    </Menu.Item>
  </Menu>
)

export default Footer
