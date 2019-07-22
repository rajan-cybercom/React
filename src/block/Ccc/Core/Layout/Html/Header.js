import React from 'react';
import Template from './../../Template.js';

class Header extends Template
{
	content = null;
	constructor()
	{
		super();
		this.setBlocks();
	}

	setBlocks()
	{
		
		this.setTemplate(<header> This is Header </header>);
	}
}

export default Header;
