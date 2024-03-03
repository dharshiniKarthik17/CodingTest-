let countDownBox	= document.querySelector(".TimerSec");
		let daysBox			= document.querySelector(".days");
		let hrsBox			= document.querySelector(".hrs");
		let minBox			= document.querySelector(".min");
		let secBox			= document.querySelector(".sec");
		let countDownDate	= new Date("Dec 31, 2022 00:01:00").getTime();

		// COUNT DOWN FUNCTION
		let x = setInterval(function() {

			// GET DATE
			let now = new Date().getTime();

			// TIME BETWEEN NOW AND DATE
			let distance = countDownDate - now;

			// CALCULATION TIME
			let days 	= Math.floor(distance / (1000 * 60 * 60 * 24));
			let hours 	= Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes	= Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			let seconds	= Math.floor((distance % (1000 * 60)) / 1000);

			daysBox.innerHTML	= days + "<p>Days</p>";
			hrsBox.innerHTML 	= hours + "<p>Hours</p>";
			minBox.innerHTML 	= minutes + "<p>Minutes</p>";
			secBox.innerHTML 	= seconds + "<p>Seconds</p>";

			// IF FINISH
			if (distance < 0) {
				clearInterval(x);
				countDownBox.innerHTML = "¡FELICIDADES!";
			}
		}, 1000);



		
