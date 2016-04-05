import React from 'react';

import {
  Dropdown,
} from '../AMUIReact';

export class DropdownDemo extends React.Component {
  render() {
    return (
      <div>
        <h2>Dropdown</h2>
        <h3>默认形式</h3>
        <Dropdown title="下拉列表" btnStyle="primary">
          <Dropdown.Item header>标题</Dropdown.Item>
          <Dropdown.Item>快乐的方式不只一种</Dropdown.Item>
          <Dropdown.Item active>最荣幸是</Dropdown.Item>
          <Dropdown.Item>谁都是造物者的光荣</Dropdown.Item>
          <Dropdown.Item disabled>就站在光明的角落</Dropdown.Item>
          <Dropdown.Item divider />
          <Dropdown.Item>天空海阔 要做最坚强的泡沫</Dropdown.Item>
        </Dropdown>
      </div>
    );
  }
}
