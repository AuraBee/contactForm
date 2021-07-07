const container = document.getElementById("container")

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function closeBtn(){
    container.innerHTML = "<h2>We will respond within 24hrs</h2>"
}

function faq(){
    container.innerHTML = "<p>Thanks, query submitted</p>"
    container.innerHTML += "<button onclick='closeBtn()'>Close Page</button>"
}