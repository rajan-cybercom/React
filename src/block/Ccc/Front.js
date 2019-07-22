import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Core/Layout.js';

class Front extends React.Component
{
	static layout = null;
	static init()
	{
		Front.setLayout();
	}

	static getLayout()
	{
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