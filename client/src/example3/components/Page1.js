import React from 'react';
import $ from 'jquery';

const box = {
    width: '500px',
    height: '500px',
    padding: '10px',
    backgroundColor: 'red'
};

const page = 'Page 1';

class Page1 extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor ' + page);
    }

    componentDidMount() {
        $('#theDiv').html('This is stupid');
    }

	componentWillUnmount() {
        console.log('componentWillUnmount ' + page);
    }

	render() {
		return <div style={box}>
            <div>This is the page No.1</div>
            <div id="theDiv"></div>
        </div>;
	}
}

export default Page1;