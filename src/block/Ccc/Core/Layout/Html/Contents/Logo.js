import React from 'react';
import Template from './../../../Template';

class Logo extends Template{
	render(){
		return (
			<h2 key = {Template.key++}>Logo</h2>
		);
	}
}

export default Logo;