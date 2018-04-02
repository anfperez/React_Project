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
	constructor() {
		super();
	}

	render() {
		return (
			<div>
				<Item />
			</div>
		)
	}
}

let productArray= [];
let productJSON;
//this needs a render function to work
class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			elements: [],
			productJSON: []
		};
	}
	componentWillMount() {
/*
const jsonFile = "/tmp/exampleFile.json";
writeJsonFile(jsonFile,{"isThisReal":ture,"author":"amit"}).catch(err => console.log(err));
	*/
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
			productArray.push(data[i])
		//	console.log(productTitle)

		}
		console.log(JSON.stringify(productArray))

		productJSON = JSON.stringify(productArray)
		let product1 = data[0].productTitle
		console.log(product1)
		let elements = data.map((product) => {
			return (
				<div key={product.results}>
					<p>{product.productTitle}</p>
					<p>{product.price.value} {product.price.currency}</p>
				</div>
				)
		})
		console.log("elements is" + elements.ty)
		this.setState({elements: elements});
		console.log("state", this.state.elements[0]);
		console.log(productJSON) // this is the exact thing I need to get!!!
	})
	// console.log(productJSON) is this the extent of where I can access productJSON? it won't log to the console here...
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

console.log(Item.productJSON)

const iconStyle = {
	height: '100px',
	width: '100px',
	borderStyle: 'solid',
	borderColor: 'black',
	float: 'left',
	margin: '5px'
};

/*
 const productLink = 'http://tech.work.co/shopping-cart/products.json'
class PracticingApiCalls extends React.Component {
	fetch(productLink)
	.then((response) => response.json())
	.then((responseJson) => {
		return responseJson.id;
		console.log(responseJson.id);
	})
	.catch((error) => {
		console.log(error);
	});
	render() {
		<div> stuff </div>
	}
}
	/*
	fs.readFile("http://tech.work.co/shopping-cart/products.json", (err, data) => {
  if (err) throw errr;
  products = JSON.parse(data);
  console.log(data)
	render() {
		return (
			<div> yup </div>
			)
	}
});
}
*/

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


render(<Item/>, window.document.getElementById("app"));
render(<Sword/>, window.document.getElementById("sword_container"));
render(<Cup/>, window.document.getElementById("cup_container"));
render(<Wand/>, window.document.getElementById("wand_container"));