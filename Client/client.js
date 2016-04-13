var counter;
window.onload = function () {
	counter = 0;
	var submitButton = document.getElementById("submit");
	addClickHandler(submitButton);
	window.setInterval(poll, 3000);

}

function addClickHandler(elem, arg) {
	elem.addEventListener("click", function () {
		sendRequest();
	});
}

function poll() {
	sendRequest("poll/" + counter);
}

var sendRequest = function (e) {
	var messageElem = document.getElementById("sendMessage");
	var chatBoxElem = document.getElementById("chatBox");
	var messageElem = document.getElementById("sendMessage");


	var xhr = new XMLHttpRequest();
	xhr.ontimeout = function () {
		console.error("The request for timed out.");
	};
	var params;
	if (e && e.substr(0, 5) === "poll/") {
		params = e;
	} else {
		var message = messageElem.value;
		params = message;
	}
	xhr.open('POST', "http://localhost:1337/" + params, true);
	xhr.onreadystatechange = processRequest;

	xhr.send(params);


	function processRequest(e) {
		if (xhr.readyState == 4 && xhr.status == 200) {
			var response = xhr.responseText;

			if (response) {
				var jsonResponse = JSON.parse(response);
				chatBoxElem.value += jsonResponse.append + "\n";
				counter = jsonResponse.count;
			}
			messageElem.value = "";
		}
	}
}