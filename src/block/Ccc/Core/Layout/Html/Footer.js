import React from 'react';
import Template from './../../Template.js';

class Footer extends Template
{
	content = null;
	constructor()
	{
		super();
		this.setBlocks();
	}

	setBlocks()
	{
		this.content = <footer> This is Footer </footer>;
		this.setTemplate(this.content);
	}
	
}

export default Footer;
