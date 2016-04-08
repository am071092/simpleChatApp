window.onload = function () {
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", sendMessage);
}

var sendMessage = function () {
    var messageElem = document.getElementById("sendMessage");
    var message = messageElem.value;

    var xhr = new XMLHttpRequest();
    var params = message;
    xhr.open('POST', "http://localhost:1337/" + params, true);
    xhr.onreadystatechange = processRequest;

    xhr.send(params);


    function processRequest(e) {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = xhr.responseText;
            var chatBoxElem = document.getElementById("chatBox");
            chatBoxElem.value += response + "\n";
            messageElem.value = "";
        }
    }
}