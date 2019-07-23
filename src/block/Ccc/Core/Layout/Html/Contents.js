// import React from 'react';
import TextList from './../../TextList';
import Title from './Contents/Title'
import Logo from './Contents/Logo'

// export class Logo extends React.Component {
// 	render(){
// 		return <span key = {Components.key++}><h1>Logo</h1></span>;
// 	}
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
		this.addBlock('logo', Logo);
		this.addBlock('title', Title);
	}

	preapareTemplate()
	{
		var div = this.getRenderedBlocks();
		this.setTemplate(div);
	}
}
export default Contents;