function toggleMenu() {
    let dropdown = document.getElementById("menuDropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// Close menu if clicked outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            dropdowns[i].style.display = "none";
        }
    }
}
