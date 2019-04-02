import React from 'react';
import $ from 'jquery';

const box = {
    width: '500px',
    height: '500px',
    padding: '10px',
    backgroundColor: '#F3C5C5'
};

const page = 'Page 1';

class Page1 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {which: 'Page 1'};

        console.log('constructor ' + page);
    }

    componentDidMount() {
        this.setState({text: 'This is stupid'});

        let url = 'http://localhost:3000/json';
        // ES6 syntax does not have it own scope
        $.get(url, (data) => {
            this.setState({text: JSON.stringify(data)});
        });

    }

	componentWillUnmount() {
        
        console.log(this.state);
        console.log('componentWillUnmount ' + page);
    }

	render() {
		return <div style={box}>
            <div>This is the page No.1</div>
            <div id="theDiv">{this.state.text}</div>
        </div>;
	}
}

export default Page1;