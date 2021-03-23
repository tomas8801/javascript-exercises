const d = document

export function digitalClock(clock, btnPlay, btnStop){
	let clockTempo

	d.addEventListener('click', e => {
		if(e.target.matches(btnPlay)){

			// imprimimos la hora actual cada 1 segundo
			clockTempo = setInterval(()=>{
				let clockHour = new Date().toLocaleTimeString();
				d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
			}, 1000)
			
			// al hacer click deshabilitamos el boton
			e.target.disabled = true;
			d.querySelector(btnStop).disabled = false;
		}

		if(e.target.matches(btnStop)){
			clearInterval(clockTempo)
			e.target.disabled = true;
			d.querySelector(btnPlay).disabled = false;

		}
	})
}

export function alarm(sound, btnPlay, btnStop){
	let alarmTempo

	const $alarm = d.createElement('audio');
	$alarm.src = sound

	d.addEventListener('click', (e) => {
		if(e.target.matches(btnPlay)){
			alarmTempo = setInterval(() => {
				$alarm.play()
			}, 3900)

			e.target.disabled = true;
			d.querySelector(btnStop).disabled = false;

		}

		if(e.target.matches(btnStop)){
			$alarm.pause();
			$alarm.currentTime = 0;
			d.querySelector(btnPlay).disabled = false;
			clearInterval(alarmTempo);

		}
	});

}