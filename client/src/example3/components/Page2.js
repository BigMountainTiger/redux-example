import React from 'react';

const box = {
    width: '500px',
    height: '500px',
    padding: '10px',
    backgroundColor: 'blue'
};

const page = 'Page 2';

class Page2 extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor ' + page);
    }
    
	componentWillUnmount() {
        console.log('componentWillUnmount ' + page);
    }

	render() {
		return <div style={box}>
            <div>This is the page No.2</div>
        </div>;
	}
}

export default Page2;