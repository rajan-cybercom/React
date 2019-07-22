import React from 'react';
import TextList from './../../TextList';
// import Style from '/src/css/style.css';

class Components extends React.Component{
	static key = 0;
}

// export class Logo extends React.Component {
// 	render(){
// 		return <span key = {Components.key++}><h1>Logo</h1></span>;
// 	}
// }

class Title extends React.Component {
	render(){
		return <span key = {Components.key++}><h1>Title</h1></span>;
	}
}

// function Hello(props){
// 	return props.obj.getRenderedBlocks()
// }

class Contents extends TextList
{
	content = null;
	constructor()
	{
		super();
		this.setBlocks();
		this.preapareTemplate();
	}

	setBlocks()
	{
		// this.addBlock('logo', new Logo());
		this.addBlock('title', new Title());
	}

	preapareTemplate()
	{
		var div = this.getRenderedBlocks();
		this.setTemplate(div);
	}
}
export default Contents;