/ Footer Component Script
document.addEventListener("DOMContentLoaded", function () {
    // Load the Footer Component into the container
    const footerComponentContainer = document.getElementById("footerComponentContainer");
    const footerComponentURL = "path/to/FooterComponent.html";

    fetch(footerComponentURL)
        .then(response => response.text())
        .then(html => {
            footerComponentContainer.innerHTML = html;
        })
        .catch(error => console.error("Error loading Footer Component:", error));
});