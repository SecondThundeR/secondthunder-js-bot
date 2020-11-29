/* eslint-disable no-undef */
'use strict';
const fs = require('fs');
const pathToMainJSON = fs.readFileSync('./jsonArrays/array.json');
const pathToBotIDsJSON = fs.readFileSync('./jsonArrays/botIDs.json');
const pathTomsgTimeJSON = fs.readFileSync('./jsonArrays/msgTime.json');
const pathToWinWords = fs.readFileSync('./jsonArrays/russianRouletteWords/rouletteWordsWin.json');
const pathToLoseWords = fs.readFileSync('./jsonArrays/russianRouletteWords/rouletteWordsLose.json');
const pathToZeroWords = fs.readFileSync('./jsonArrays/russianRouletteWords/rouletteWordsZero.json');
const pathToMinusWords = fs.readFileSync('./jsonArrays/russianRouletteWords/rouletteWordsMinus.json');

function getJSONWordArray() {
	const wordsArray = JSON.parse(pathToMainJSON);
	return wordsArray;
}

function getJSONUtilityData() {
	const botIDs = JSON.parse(pathToBotIDsJSON);
	const msgTime = JSON.parse(pathTomsgTimeJSON);
	return [ botIDs, msgTime ];
}

function getJSONRouletteData() {
	const winWords = JSON.parse(pathToWinWords);
	const loseWords = JSON.parse(pathToLoseWords);
	const zeroWords = JSON.parse(pathToZeroWords);
	const minusWords = JSON.parse(pathToMinusWords);
	const msgTime = JSON.parse(pathTomsgTimeJSON);
	return [ winWords, loseWords, zeroWords, minusWords, msgTime ];
}

function loadAllJSONArrays() {
	const wordsArray = JSON.parse(pathToMainJSON);
	const botIDs = JSON.parse(pathToBotIDsJSON);
	const winWords = JSON.parse(pathToWinWords);
	const loseWords = JSON.parse(pathToLoseWords);
	const zeroWords = JSON.parse(pathToZeroWords);
	const minusWords = JSON.parse(pathToMinusWords);
	return [ wordsArray, botIDs, winWords, loseWords, zeroWords, minusWords ];
}

function loadAllJSONPaths() {
	const pathToMainJSON = './jsonArrays/array.json'
	const pathToBotIDsJSON = './jsonArrays/botIDs.json'
	const pathToWinWords = './jsonArrays/russianRouletteWords/rouletteWordsWin.json'
	const pathToLoseWords = './jsonArrays/russianRouletteWords/rouletteWordsLose.json'
	const pathToZeroWords = './jsonArrays/russianRouletteWords/rouletteWordsZero.json'
	const pathToMinusWords = './jsonArrays/russianRouletteWords/rouletteWordsMinus.json'
	return [ pathToMainJSON, pathToBotIDsJSON, pathToWinWords, pathToLoseWords, pathToZeroWords, pathToMinusWords ];
}

module.exports = { getJSONWordArray, getJSONUtilityData, getJSONRouletteData, loadAllJSONArrays, loadAllJSONPaths };