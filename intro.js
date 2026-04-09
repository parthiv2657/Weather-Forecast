function selectCity(city) {
    document.getElementById("searchInput").value = city;
    document.getElementById("suggestions").innerHTML = "";
}

function searchCity() {
    let city = document.getElementById("searchInput").value;

    if (!city) {
        alert("Enter city");
        return;
    }

    let user = localStorage.getItem("user");

    if (!user) {
        openSignup(); 
        return;
    }

    localStorage.setItem("lastCity", city);
    window.location.href = "indx.html";
}

function getLocation() {
    let user = localStorage.getItem("user");

    if (!user) {
        openSignup();
        return;
    }
    navigator.geolocation.getCurrentPosition(position => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        localStorage.setItem("lat", lat);
        localStorage.setItem("lon", lon);
        window.location.replace("indx.html");
    });
}

function setBackgroundVideo() {
    let video = document.getElementById("bgVideo");
}

document.addEventListener("DOMContentLoaded", function () {

    setBackgroundVideo();

    let titleText = "Weather Forecast";
    let subtitleText = "Get real-time weather updates instantly";
    let i = 0;
    function typeTitle() {
        let titleEl = document.getElementById("title");
        let subEl = document.getElementById("subtitle");
        if (i < titleText.length) {
            titleEl.innerHTML += titleText.charAt(i);
            i++;
            setTimeout(typeTitle, 80);
        } 
        else {
            subEl.innerHTML = subtitleText;
        }
    }

    typeTitle();
});

function openLogin() {
    document.getElementById("loginModal").style.display = "flex";
}

function closeLogin() {
    document.getElementById("loginModal").style.display = "none";
}


function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function openSignup() {
    document.getElementById("signupModal").style.display = "flex";
    document.getElementById("step1").style.display = "block";
    document.getElementById("step2").style.display = "none";
}

function closeSignup() {
    document.getElementById("signupModal").style.display = "none";
}

function goToStep2() {
    let name = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email) {
        alert("Enter name and email");
        return;
    }
    if (!emailPattern.test(email)) {
        alert("Enter valid email address");
        return;
    }
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
}

function submitSignup() {
    let username = document.getElementById("username").value;

    if (!username) {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", username);

    alert("Account created successfully");

    closeSignup();
    showUser();
}

function showUser() {
    let user = localStorage.getItem("user");

    if (user) {
        document.getElementById("userDisplay").innerText = "👤 " + user;
        document.getElementById("loginLink").style.display = "none";
        document.getElementById("signupBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "inline-block";
    } else {
        document.getElementById("userDisplay").innerText = "";
        document.getElementById("loginLink").style.display = "inline";
        document.getElementById("signupBtn").style.display = "inline-block";
        document.getElementById("logoutBtn").style.display = "none";
    }
}

window.onload = function () {
    showUser();
};

function loginUser() {
    let user = document.getElementById("loginUser").value;

    if (!user) {
        alert("Enter username");
        return;
    }

    localStorage.setItem("user", user);

    alert("Login successful");

    closeLogin();
    showUser();
}

function logoutUser() {
    localStorage.removeItem("user");

    alert("Logged out successfully");

    showUser();
}

