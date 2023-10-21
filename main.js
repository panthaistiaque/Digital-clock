setInterval(clook, 1000);

function clook() {
	let big_time = document.getElementById("big-time").checked;
	let date = new Date(); 
	let second = padWithLeadingZeros(date.getSeconds(),2);
	let minute = padWithLeadingZeros(date.getMinutes(),2);
	let hour = 0;
	let ampm = "";
	if(big_time){
		hour = padWithLeadingZeros(date.getHours(),2);
	}else{ 
		hour = date.getHours();
		ampm = hour  >= 12 ? 'PM' : 'AM';
		hour = hour % 12;
		hour = hour ? padWithLeadingZeros(hour,2) : 12; 
		
	}
	let offset = date.getTimezoneOffset(); 
	document.getElementById("time-box").textContent = hour+" : "+minute+" : "+second+" "+ampm;
}
clook();

function padWithLeadingZeros(num, totalLength) {
  return String(num).padStart(totalLength, '0');
}