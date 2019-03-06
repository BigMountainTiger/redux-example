import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import { addNumberEvent } from './actions';

import App from './components/App';
import './styles/app-style.css';

const store = createStore(reducers);

store.dispatch(addNumberEvent(1223));

ReactDOM.render(<Provider store={store}><App /></Provider>,
		document.getElementById('root'));
