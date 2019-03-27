import React from 'react';

const width = {
  width: '500px',
  color: 'red'
}

class App extends React.Component {
	constructor(props) {
    super(props);
    
		this.state = {
      value: 'This is bullshit?'
    };

    this.handleChange = this.handleChange.bind(this);
    this.clicked = this.clicked.bind(this);
    this.keyup = this.keyup.bind(this);
	}

  handleChange(e) {
    let v = e.target.value;
    this.setState({value: v});
  }

  keyup(e) {
    if(e.keyCode === 13) {
      let v = this.state.value.trim();

      this.setState({value: v});
      console.log(v);
    }
  }

  clicked(e) {
    let v = this.state.value;

    console.log(v);
  }

	componentWillUnmount() {}

	render() {
    let t = this;
    let s = t.state;

		return <div className="container">
            <div>This is the example 2</div>
            <div>
              <input type="text"
                style={width}
                value={s.value}
                onChange={t.handleChange}
                onKeyUp={t.keyup}></input>
            </div>
            <div>
              <button type="button" style={width} onClick={t.clicked}>Check value</button>
            </div>
          </div>;
	}
}

export default App;