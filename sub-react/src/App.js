import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter
      basename={window.__POWERED_BY_QIANKUN__ ? '/sub-react' : '/'}
    >
      <Link to='/'>首页</Link> | <Link to='/about'>关于</Link>
      <Route path='/' exact render={() => <h1>hello home</h1>}></Route>
      <Route path='/about' render={() => <h1>hello about</h1>}></Route>
    </BrowserRouter>
  );
}

export default App;
