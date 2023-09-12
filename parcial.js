function toggleNews() {
    var newsMenu = document.getElementById("newsMenu");
    var loginForm = document.getElementById("loginForm");
    var registrationForm = document.getElementById("registrationForm");
    
    if (newsMenu.style.display === "none") {
        newsMenu.style.display = "block";
        loginForm.style.display = "none";
        registrationForm.style.display = "none";
    } else {
        newsMenu.style.display = "none";
    }
}

function showLoginForm() {
    var loginForm = document.getElementById("loginForm");
    var newsMenu = document.getElementById("newsMenu");
    var registrationForm = document.getElementById("registrationForm");
    
    loginForm.style.display = "block";
    newsMenu.style.display = "none";
    registrationForm.style.display = "none";
}

function showRegistrationForm() {
    var loginForm = document.getElementById("loginForm");
    var newsMenu = document.getElementById("newsMenu");
    var registrationForm = document.getElementById("registrationForm");
    
    registrationForm.style.display = "block";
    loginForm.style.display = "none";
    newsMenu.style.display = "none";
}

function register() {
    console.log("Usuario registrado.");
}
function redirectToSignUp(){
    var loginForm = document.getElementById("loginForm");
    var registrationForm = document.getElementById("registrationForm");
    loginForm.style.display = "none";
    registrationForm.style.display = "block";
}
function cancelRegistration() {
    var registrationForm = document.getElementById("registrationForm");
    var newsMenu = document.getElementById("newsMenu");
    
    registrationForm.style.display = "none";
    newsMenu.style.display = "block";
}
function validarRegistro() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var telefono = document.getElementById("telefono").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;

    var nombreRegex = /^[A-Za-z\s]+$/;
    var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var telefonoRegex = /^\d{10}$/; 
    var fechaNacimientoRegex = /^\d{4}-\d{2}-\d{2}$/; 

    if (!nombreRegex.test(nombres) || !nombreRegex.test(apellidos)) {
        alert("Por favor, ingresa nombres y apellidos válidos.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, ingresa un email válido.");
        return false;
    }

    if (!telefonoRegex.test(telefono)) {
        alert("Por favor, ingresa un número de teléfono válido (10 dígitos).");
        return false;
    }

    if (!fechaNacimientoRegex.test(fechaNacimiento)) {
        alert("Por favor, ingresa una fecha de nacimiento válida (Formato: YYYY-MM-DD).");
        return false;
    }

    alert("Registro exitoso. ¡Gracias!");
    return true;
}
function toggleAbout() {
    var dropdown = document.getElementById("aboutDropdown");
    dropdown.style.display = dropdown.style.display === "none" ? "block" : "none";
  }
  
  function showMission() {
    hideAllContent();
    document.getElementById("mission").style.display = "block";
  }
  
  function showVision() {
    hideAllContent();
    document.getElementById("vision").style.display = "block";
  }
  
  function showTeam() {
    hideAllContent();
    document.getElementById("team").style.display = "block";
  }
  
  function hideAllContent() {
    document.getElementById("mission").style.display = "none";
    document.getElementById("vision").style.display = "none";
    document.getElementById("team").style.display = "none";
  }
  