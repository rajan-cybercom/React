import React from 'react';
import Template from './Template';
import Header from './Layout/Html/Header';
import Contents from './Layout/Html/Contents';
import Footer from './Layout/Html/Footer';
// import layoutHtml from './Layout/Html/HeaderHtml.js';

class Layout extends Template
{
	constructor()
	{
		super();
		this.setLayout(this);
		this.setBlocks();
		this.preapareTemplate();
	}

	setBlocks(){
		// this.addBlock('header', (new Header()).setLayout(this));
		// this.addBlock('contents', (new Contents()).setLayout(this));
		// this.addBlock('footer', (new Footer()).setLayout(this));
		this.addBlock('header', Header);
		this.addBlock('contents', Contents);
		this.addBlock('footer', Footer);
	}

	preapareTemplate()
	{
		var div = <table border="1" width="100%"> 
			<tbody>
				<tr>
					<td>
						{this.getRenderedBlock('header')}
					</td>
				</tr>
				<tr>
					<td>
						{this.getRenderedBlock('contents')}
					</td>
				</tr>
				<tr>
					<td>
						{this.getRenderedBlock('footer')}
					</td>
				</tr>
			</tbody>
		</table>;

		this.setTemplate(div);

		//console.log(div);
	}
}
export default Layout;