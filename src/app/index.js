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

render(<App/>, window.document.getElementById("app"));
render(<Sword/>, window.document.getElementById("sword_container"));
render(<Cup/>, window.document.getElementById("cup_container"));
render(<Wand/>, window.document.getElementById("wand_container"));

console.log("it works");