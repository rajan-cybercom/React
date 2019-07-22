// import React from 'react';
// import ReactDOM from 'react-dom';
import Layout from './Core/Layout.js';
import Template from './Core/Template.js';

class Front extends Template
{
	layout = null;
	constructor()
	{
		super();
		this.setLayout();
		//this.render();
	}

	getLayout()
	{
		return this.layout;
	}

	setLayout()
	{
		this.layout = new Layout();
		return this;
	}

	render()
	{
		return this.getLayout().toHtml();
	}
}

export default Front;

// this.getLayout().createBlock('header').toHtml();