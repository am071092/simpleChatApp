window.onload = function () {
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", sendMessage);
}

var sendMessage = function () {
    var messageElem = document.getElementById("sendMessage");
    var message = messageElem.value;

    var xhr = new XMLHttpRequest();
    var params = "message=" + message;
    xhr.open('POST', "http://localhost:1337/", true);
    xhr.onreadystatechange = processRequest;

    xhr.send(params);


    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
        }
    }
}