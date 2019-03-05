import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// ItemAggregator NG component
const ItemAggregator = ({ sum }) => (
    <div className="ItemAggregator">Total SUM - {sum}</div>
);

ItemAggregator.propTypes = {
		sum: PropTypes.number.isRequired
};

// Wrap the component into a container
const mapStateToProps = (state) => {
	return {
		sum: state.numbers.reduce((a, b) => a + b, 0)
	};
};
	
export default connect(mapStateToProps)(ItemAggregator);