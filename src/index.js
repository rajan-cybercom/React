import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Front from './block/Ccc/Front';

Front.init();
Front.renderLayout();


// class Test extends React.Component{
// 	test = 'text'
// 	static count = 0;
// 	setText(text) {
// 		this.test = text;
// 		return this;
// 	}
// 	render(){
// 		return <h1 key={Test.count++} className = {Test.count++}>{this.test} !!</h1>;
// 	}
// }
// var test = [];
// test.push((new Test()).setText(1).render());
// test.push((new Test()).setText(2).render());

// ReactDOM.render(test, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();