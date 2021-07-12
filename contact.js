const container = document.getElementById("container")

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function closeBtn(){
    container.innerHTML = ""
}

function faq(){
    container.innerHTML = "<h3>Thanks, query submitted, <h3>We will respond with 24hrs</h3>"
    container.innerHTML += "<button onclick='closeBtn()'>Close Page</button>"
}