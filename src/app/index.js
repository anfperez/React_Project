import React from "react";
import { render } from "react-dom";
import WebFont from "webfontloader";

WebFont.load({
	google: {
		families: ['Titillium Web:300,400,700', 'sans-serif']
	}
});

const fontStyle = {
	fontFamily: 'Titillium Web'
};

class App extends React.Component {
	render() {
		return (
			<div>

				<h1 style={fontStyle}>Swords, Cups, & Wands</h1>
			</div>
			);
	}
}


class GetData extends React.Component {
	render() {
		return (
			<div>
				<Item />
			</div>
		)
	}
}
//this needs a render function to work
class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			elements: [],
		};
	}
	componentWillMount() {
	console.log("got here")
	fetch('http://tech.work.co/shopping-cart/products.json')
	.then(results => {
		return results.json();
	}).then(data => {
		console.log("got here too")
		console.log(data[0])

		// lets try making an array
		let productArray = []
		for (let i =0; i < data.length; i++) {
			productArray.push(data[i].productTitle)
		//	console.log(productTitle)

		}
		console.log(productArray)
		let product1 = data[0].productTitle
		console.log(product1)
		let elements = data.results.map((data) => {
			return (
				<div key={pic.results}>
					<p>{pic.productTitle}</p>
				</div>
				)
		})
		this.setState({elements: elements});
		console.log("state", this.state.elements);
	})
}

render() {
	return (
		<div>
		<div className="container2">
		{this.state.elements}
	</div>
	</div>

)
}
}

const iconStyle = {
	height: '100px',
	width: '100px',
	borderStyle: 'solid',
	borderColor: 'black',
	float: 'left',
	margin: '5px'
};

class Sword extends React.Component {
	render() {
		return (
			<img src="./assets/sword.png" style={iconStyle} />
			);
	}
}

class Cup extends React.Component {
	render() {
		return (
			<img src="./assets/cup.png" style={iconStyle} />
			);
	}
}

class Wand extends React.Component {
	render() {
		return (
			<img src="./assets/wand.png" style={iconStyle} />
			);
	}
}


render(<GetData/>, window.document.getElementById("app"));
render(<Sword/>, window.document.getElementById("sword_container"));
render(<Cup/>, window.document.getElementById("cup_container"));
render(<Wand/>, window.document.getElementById("wand_container"));