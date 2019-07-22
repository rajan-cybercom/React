import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Core/Layout.js';
import Template from './Core/Template.js';

class Front extends React.Component
{
	static layout = null;
	static init()
	{
		Front.setLayout();
		//this.render();
	}

	static getLayout()
	{
		// var test = require('./test.js', 'test');
		// console.log(test.test2);
		return Front.layout;
	}

	static setLayout()
	{
		Front.layout = new Layout();
		return this;
	}

	static renderLayout()
	{
		ReactDOM.render(Front.getLayout().toHtml(), document.getElementById('root'));
	}
}

export default Front;

// this.getLayout().createBlock('header').toHtml();