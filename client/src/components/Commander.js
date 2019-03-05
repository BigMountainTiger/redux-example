import React from 'react';
import PropTypes from 'prop-types';
import { addNumberEvent, clearNumbersEvent } from '../actions';

import { connect } from 'react-redux';

// Commander NG component
const Commander = ({ onClick, ownProps, children }) => (
    <button onClick={onClick} className="commander">{children}</button>
);

Commander.propTypes = {
  onClick: PropTypes.func.isRequired
};

// Wrap the component to a container
const mapDispatchToProps = (dispatch, ownProps) => ({
	  onClick: () => {
		  switch (ownProps.command) {
			case 'ADD_NUMBER':
				// Create a random number & dispatch it
				let number = Math.floor((Math.random() * 100) + 1);
				dispatch(addNumberEvent(number));
				break;
			case 'CLEAR_NUMBERS':
				dispatch(clearNumbersEvent());
				break;
			default:
				return;
		  }
	  }
});

export default connect(null, mapDispatchToProps)(Commander);