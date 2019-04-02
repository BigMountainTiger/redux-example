import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Page = {
  Page1: Page1,
  Page2: Page2,
  Page3: Page3
}

class App extends React.Component {
	constructor(props) {
    super(props);
    
		this.state = {
      page: Page.Page1
    };

    this.navigate = this.navigate.bind(this);
	}

  navigate(page) {
    this.setState({page: page});

    history.pushState({}, "", "#Astupid");
  }

	componentWillUnmount() {}

	render() {
		return <div className="container">
            <div>This is the navigation example</div>
            <span>
              <button onClick={() => this.navigate(Page.Page1)}>Page 1</button>
              <button onClick={() => this.navigate(Page.Page2)}>Page 2</button>
              <button onClick={() => this.navigate(Page.Page3)}>Page 3</button>
              <button onClick={() => alert(history.length)}>History length</button>
            </span>
            { React.createElement(this.state.page, null, null) }
          </div>;
	}
}

export default App;