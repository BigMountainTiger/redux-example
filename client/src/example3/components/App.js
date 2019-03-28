import React from 'react';
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';

const Page = {
  Page1: 'Page1',
  Page2: 'Page2',
  Page3: 'Page3'
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
  }

	componentWillUnmount() {}

	render() {
		return <div className="container">
            <div>This is the navigation example</div>
            <span>
              <button onClick={() => this.navigate(Page.Page1)}>Page 1</button>
              <button onClick={() => this.navigate(Page.Page2)}>Page 2</button>
              <button onClick={() => this.navigate(Page.Page3)}>Page 3</button>
            </span>
            {(() => {
              switch (this.state.page) {
                case Page.Page1:  return <Page1></Page1>;
                case Page.Page2:  return <Page2></Page2>;
                case Page.Page3:  return <Page3></Page3>;
                default:  return <Page1></Page1>;
              }
            })()}
          </div>;
	}
}

export default App;