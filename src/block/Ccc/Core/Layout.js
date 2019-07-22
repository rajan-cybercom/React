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
		this.setBlocks();
		this.preapareTemplate();
	}

	setBlocks(){
		this.addBlock('header', new Header());
		this.addBlock('contents', new Contents());
		this.addBlock('footer', new Footer());
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