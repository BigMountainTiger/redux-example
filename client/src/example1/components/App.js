import React from 'react';
import Commander from './Commander';
import ItemAggregator from './ItemAggregator';
import ItemList from './ItemList';

const App = () => (
  <div className="container">
  	<Commander command='ADD_NUMBER'>Add a random number</Commander>
  	<Commander command='CLEAR_NUMBERS'>Clear the numbers</Commander>
  	<ItemList />
  	<ItemAggregator />
  </div>
);

export default App;