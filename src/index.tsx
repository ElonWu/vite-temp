import ReactDOM from 'react-dom';

import RootStore from '@/store';
import RootRouter from '@/routes';

import './index.css';

const App = () => (
  <RootStore>
    <RootRouter />
  </RootStore>
);

ReactDOM.render(<App />, document.getElementById('root'));
