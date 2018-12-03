import React from 'react';

const splitTitle = (string) => {
	let result = string.split("");
	let newResult = [];

	result.forEach(element => {
		newResult.push(<span>{{element}}</span>)
		console.log(newResult)
	});

	console.log(newResult)
	return newResult

}

export default splitTitle