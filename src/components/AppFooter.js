import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react'

class AppFooter extends Component {
  render() {
    return (
      <div>
        <Menu className='footer' attached='bottom'>
          <Menu.Item>
            Section 1
          </Menu.Item>
          <Menu.Item>
            Homer
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default AppFooter;
