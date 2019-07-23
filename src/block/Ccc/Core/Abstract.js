import React from 'react';
import ReactDOMServer from 'react-dom/server';

class Abstract extends React.Component
{
	blocks = {};
	layout = null;
	template = null;

	setLayout(layout)
	{
		this.layout = layout;
		return this;
	}

	getLayout()
	{
		return this.layout;
	}
	setTemplate(template)
	{
		this.template = template;
		return this;
	}
	getTemplate()
	{
		return this.template;
	}
	createBlock(block){
		// console.log(className);
		var obj = new block();
		// console.log(obj);
		obj.setLayout(this.getLayout());
		return obj;
	}
	getBlocks()
	{
		return this.blocks;
	}

	getRenderedBlocks()
	{
		if(typeof (this.blocks) === 'undefined')
		{
			return null;
		}
		var div = [];
		for (var [key] of Object.entries(this.getBlocks()))
		{
			div.push(this.getBlock(key).render());
		}
		return div;
		// return this.blocks;
	}

	addBlock(key, block)
	{
		this.blocks[key] = this.createBlock(block);
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

