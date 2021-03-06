import React from 'react';
import { Menu } from '../../src/'
class ButtonTest extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div style={{marginTop: 12, width: 230}}>
          <h2>inline类型</h2>
          <Menu mode="inline">
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.SubMenu title="我能展开">
              <Menu.Item>我是可展开的菜单</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
        <div style={{marginTop: 12, width: 230}}>
          <h2>vertical类型</h2>
          <Menu mode="vertical">
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.SubMenu title="我能展开">
              <Menu.Item>我是可展开的菜单</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
        <div style={{marginTop: 12}}>
          <h2>horizontal</h2>
          <Menu mode="horizontal">
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.Item>我是菜单1</Menu.Item>
            <Menu.SubMenu title="我能展开">
              <Menu.Item>我是可展开的菜单</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
export default ButtonTest;
