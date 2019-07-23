import React from 'react';
import Template from './../../../Template';

class Title extends Template{
	render(){
		return (
			<h2 key = {Template.key++}>Title is coming here hello</h2>
		);
	}
}

export default Title;