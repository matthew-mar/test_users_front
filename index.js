function hideMainContent() {
    var content = document.getElementById("mainPageContent")
    content.style.display = "none"
}

function onButtonPressed() {
    hideMainContent()
}

async function main() {
    var searchButton = document.getElementById("searchButton")
    searchButton.addEventListener("click", onButtonPressed)

    var sportsmen = document.getElementById("sportsmen")
    sportsmen.addEventListener("click", onButtonPressed)

    var programmers = document.getElementById("programmers")
    programmers.addEventListener("click", onButtonPressed)

    var url = "http://127.0.0.1:8000/communities"
    var response = await fetch(url)
    if (response.ok) {
        var json = await response.json()
        console.log(json)
    } else {
        console.log("error", response.status)
    }
}    

window.onload = main
