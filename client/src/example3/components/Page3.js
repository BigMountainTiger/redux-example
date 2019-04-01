import React from 'react';

const box = {
    width: '500px',
    height: '500px',
    padding: '10px',
    backgroundColor: '#575B98'
};

const page = 'Page 3';

class Page3 extends React.Component {

    constructor(props) {
        super(props);

        console.log('constructor ' + page);
    }
    
	componentWillUnmount() {
        console.log('componentWillUnmount ' + page);
    }

	render() {
		return <div style={box}>
            <div>This is the page No.3</div>
        </div>;
	}
}

export default Page3;