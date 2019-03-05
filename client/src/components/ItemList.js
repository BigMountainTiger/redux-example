import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Item = ({index, item}) => (
	<span>No.{index + 1} - {item}</span>
);

// The ItemList component
const ItemList = ({ items }) => (
	<div>
		<div className="ItemList">
		{items.map((item, i) =>
		    <div key={i}><Item index={i} item={item}></Item></div>
		)}
		</div>
	</div>
);

ItemList.propTypes = {
		items: PropTypes.arrayOf(PropTypes.number).isRequired
};

// Wrap the component into a container
const mapStateToProps = (state) => {
	return {
		items: state.numbers
	};
};
	
export default connect(mapStateToProps)(ItemList);