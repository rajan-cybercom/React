import React from 'react';
import TextList from './../../TextList';

class Components extends React.Component{
	static key = 0;
}

class Logo extends Components {
	render(){
		return <h1 key = {Components.key++}>Logo</h1>;
	}
}

class Title extends Components {
	render(){
		return (<h1 key = {Components.key++}>Title</h1>);
	}
}

function Hello(props){
	return props.obj.getRenderedBlocks()
}

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
		this.addBlock('logo', Logo);
		this.addBlock('title', Title);
		// var template = <section> Main Content</section>;
		// this.setTemplate(template);
	}

	preapareTemplate()
	{


		// var content = .map(i => i)
		var arr = [this.getRenderedBlock('logo'), this.getRenderedBlock('title')];		
		var div = arr;
		// var div = [];
		// for (var [key,obj] of Object.entries(this.getBlocks()))
		// {
		// 	div.push(this.getBlock(key));
		// }
		// (this.getBlocks()).map((key) => div.push(this.getBlock(key)));
		// var div = <h1>Temp</h1> ;
		this.setTemplate(div);
	}
}
export default Contents;