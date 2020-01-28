var sports = ['плавание','футбол','волейбол','баскетбол','теннис'];

document.write('Я люблю ');

sports.forEach(function(sprt, index) {
	if(index === sports.length - 1) {
		document.write('и ' + sprt + '.');
	} else if(index === sports.length - 2) {
		document.write(sprt + ' ');
	}
	else {
		document.write(sprt + ', ');
	}
});