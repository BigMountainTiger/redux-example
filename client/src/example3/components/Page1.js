import React from 'react';

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

	componentWillUnmount() {
        console.log('componentWillUnmount ' + page);
    }

	render() {
		return <div style={box}>
            <div>This is the page No.1</div>
        </div>;
	}
}

export default Page1;