'use strict';
const sharedVars = require('../data/variables');
const secondsArray = ['секунды', 'секунд'];
const minutesArray = ['минуты', 'минут'];
const hoursArray = ['часа', 'часов'];

String.prototype.toHHMMSS = function() {
	const sec_num = parseInt(this, 10);
	const hours = Math.floor(sec_num / 3600);
	const minutes = Math.floor((sec_num - (hours * 3600)) / 60);
	const seconds = sec_num - (hours * 3600) - (minutes * 60);
	return checkForZeroTime(seconds, minutes, hours);
};

function hoursText(hours) {
	if (hours === 1 || hours === 21) {
		return hoursArray[0];
	}
	else {
		return hoursArray[1];
	}
}

function minutesText(minutes) {
	if (minutes === 1 || minutes === 21 || minutes === 31 || minutes === 41 || minutes === 51) {
		return minutesArray[0];
	}
	else {
		return minutesArray[1];
	}
}

function secondsText(seconds) {
	if (seconds === 1 || seconds === 21 || seconds === 31 || seconds === 41 || seconds === 51) {
		return secondsArray[0];
	}
	else {
		return secondsArray[1];
	}
}

function checkForZeroTime(seconds, minutes, hours) {
	let text = '';

	if (minutes < 1 && hours < 1) {
		text = seconds + ' ' + secondsText(seconds);
		return text;
	}
	else if (minutes >= 1 && hours < 1) {
		text = minutes + ' ' + minutesText(minutes) + ' и ' + seconds + ' ' + secondsText(seconds);
		return text;
	}
	else {
		text = hours + ' ' + hoursText(hours) + ' ' + minutes + ' ' + minutesText(minutes) + ' и ' + seconds + ' ' + secondsText(seconds);
		return text;
	}
}

function uptimeBot(msg) {
	const time = process.uptime();
	const uptime = (time + '').toHHMMSS();
	msg.delete({ timeout: 2000 });
	msg.channel.send(`${sharedVars.text.uptimeText} **${uptime}**`).then(msg => {
		msg.delete({ timeout: 2000 });
	});
}

module.exports = {
	name: 'uptime',
	description: 'Get uptime of bot',
	execute(msg) {
		uptimeBot(msg);
	},
};
