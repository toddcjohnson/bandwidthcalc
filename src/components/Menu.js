import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import '../img/logo.png';

export default class MenuBasic extends Component {
  constructor(props) {
    super(props);

    this.state = { activeItem: 'UCaaS' };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu>
          <Menu.Menu position='left'>
            <Menu.Item>
              <img src='http://media.masslive.com/mass_river_boston_news/photo/windstream-logo-via-fbjpg-ac4f949a6942da4d.jpg' alt="Windstream" />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Menu.Item name='UCaaS' active={activeItem === 'UCaaS'} onClick={this.handleItemClick} />
            <Menu.Item name='IP Simple' active={activeItem === 'IP Simple(Coming Soon)'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
        <br />
      </div>
    )
  }
}
