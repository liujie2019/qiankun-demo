import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const render = (props) => {
  const { container } = props;
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  );
};

if (!window.__POWERED_BY_QIANKUN__) {
  // 子应用独立运行
  render({});
}
// 子组件协议
export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}
export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props); //装载
}
export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector('#root')
      : document.querySelector('#root')
  ); // 卸载
}
