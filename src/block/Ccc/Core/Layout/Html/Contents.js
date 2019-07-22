import React from 'react';
import TextList from './../../TextList';


class Logo extends React.Component {
	render(){
		return <h1>Logo</h1>;
	}
}

class Title extends React.Component {
	static count = 0;
	constructor(props){
		super();
		// this.props = {key : "test"}
		
		// this.props = props;
	}
	render(){
		// console.log(this.props = {key: 'test'});
		this.props = this.count++;
		return <h1>Title</h1>;
	}
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
		// this.addBlock('logo', ((new Logo({key : 'logo'})).render()));
		this.addBlock('title', (new Title()).render());
		this.setTemplate(<section> Main Content</section>);
	}

	preapareTemplate()
	{
		var div = [];
		for (var [key,obj] of Object.entries(this.getBlocks()))
		{
			div.push(this.getBlock(key));
		}
		this.setTemplate(div);
	}
}
export default Contents;
