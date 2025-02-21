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
});
function startPackingAssistant() {
    let destination = prompt("Enter your travel destination:");
    if (!destination) return;
    
    let weather = prompt("What's the expected weather? (e.g., sunny, rainy, cold, hot)");
    let activities = prompt("Enter your planned activities (e.g., hiking, swimming, sightseeing):");
    
    let packingList = ["Passport/ID", "Travel tickets", "Wallet & Credit Cards", "Phone & Charger"];
    
    if (weather.toLowerCase().includes("cold")) {
        packingList.push("Warm Jacket", "Gloves", "Scarf", "Boots");
    } else if (weather.toLowerCase().includes("hot")) {
        packingList.push("Sunglasses", "Sunscreen", "Hat", "Light Clothing");
    } else if (weather.toLowerCase().includes("rainy")) {
        packingList.push("Umbrella", "Raincoat", "Waterproof Shoes");
    }
    
    if (activities.toLowerCase().includes("hiking")) {
        packingList.push("Hiking Boots", "Backpack", "Water Bottle", "Trail Map");
    }
    if (activities.toLowerCase().includes("swimming")) {
        packingList.push("Swimsuit", "Towel", "Flip Flops", "Waterproof Bag");
    }
    if (activities.toLowerCase().includes("sightseeing")) {
        packingList.push("Camera", "Guidebook", "Comfortable Shoes");
    }
    
    alert("Your Smart Packing List:\n" + packingList.join("\n"));
    document.addEventListener("DOMContentLoaded", function () {
        let username = localStorage.getItem("username") || "User";
        document.getElementById("username").textContent = username;
    });
}