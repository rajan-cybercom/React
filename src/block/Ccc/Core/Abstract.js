import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Abstract extends React.Component
{
	blocks = {};

	template = null;

	setTemplate(template)
	{
		this.template = template;
		return this;
	}

	getTemplate()
	{
		return this.template;
	}

	getBlocks()
	{
		return this.blocks;
	}

	addBlock(key, block)
	{
		this.blocks[key] = block;
		return this;
	}

	getBlock(key)
	{
		if(typeof (this.blocks[key]) === 'undefined')
		{
			return null;
		}
		return this.blocks[key];
	}

	getRenderedBlock(key){
		if(typeof (this.blocks[key]) === 'undefined')
		{
			return null;
		}
		return this.blocks[key].render();
	}

	getBlockHtml(key){
		return ReactDOMServer.renderToStaticMarkup(this.getRenderedBlock(key));
	}

	toHtml()
	{
		return this.renderTemplate();
	}

	renderTemplate()
	{
		return this.getTemplate();
	}

	render(){
		return this.renderTemplate();
	}
}

export default Abstract;

