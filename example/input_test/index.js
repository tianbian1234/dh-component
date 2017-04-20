import React from 'react';
import Markdown from '../home/Markdown';

import { Input } from '../../src';
import md from './Input.md';
class InputTest extends React.Component {
  render() {
    return (
      <div>
        <Input placeholder="请输入内容"/>
        <Input.Number placeholder="请输入内容" />
        <Markdown content={md}/>
      </div>
    )
  }
}
export default InputTest;
