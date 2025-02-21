const locations = [
    "New York", "Los Angeles", "Chicago", "Houston", "Phoenix",
    "San Diego", "Dallas", "San Francisco", "Las Vegas", "Miami"
];

function filterDropdown() {
    let input = document.getElementById("locationInput").value.toLowerCase();
    let dropdown = document.getElementById("locationDropdown");
    dropdown.innerHTML = "";
    
    if (input.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    let filteredLocations = locations.filter(loc => loc.toLowerCase().includes(input));

    if (filteredLocations.length === 0) {
        dropdown.style.display = "none";
        return;
    }

    dropdown.style.display = "block";

    filteredLocations.forEach(location => {
        let item = document.createElement("li");
        item.classList.add("dropdown-item");
        item.textContent = location;
        item.onclick = () => {
            document.getElementById("locationInput").value = location;
            dropdown.style.display = "none";
        };
        dropdown.appendChild(item);
    });
}

document.addEventListener("click", (e) => {
    if (!document.getElementById("locationSearch").contains(e.target)) {
        document.getElementById("locationDropdown").style.display = "none";
    }
    function toggleProfileDropdown(event) {
        event.preventDefault();
        let menu = document.getElementById("profileMenu");
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    }
    
    document.addEventListener("click", function(event) {
        let profileDropdown = document.querySelector(".profile-dropdown");
        let profileMenu = document.getElementById("profileMenu");
    
        if (!profileDropdown.contains(event.target)) {
            profileMenu.style.display = "none";
        }
    });
    
    function logout() {
        alert("Logging out...");
        window.location.href = "login.html";
    }
});