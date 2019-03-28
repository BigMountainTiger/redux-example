import React from 'react';
import Page1 from './Page1';

class App extends React.Component {
	constructor(props) {
    super(props);
    
		this.state = {};
	}

	componentWillUnmount() {}

	render() {

		return <div className="container">
            <div>This is the navigation example</div>
            <Page1></Page1>
          </div>;
	}
}

export default App;