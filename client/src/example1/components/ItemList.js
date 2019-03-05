import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Item extends React.Component {
	constructor(props) {
		super(props);

		console.log("Item constructed");
	}

	componentWillUnmount() {
		console.log("Item component Will Unmount");
	}

	render() {
		let p = this.props;
		return <span>No.{p.index + 1} - {p.item}</span>;
	}
}

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