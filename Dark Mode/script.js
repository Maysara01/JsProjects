var dark = document.getElementById("btn");
 
dark.onclick = function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        dark.innerHTML = "<i class='fa-regular fa-sun'></i> Light Mode";
    } else {
        dark.innerHTML = "<i class='fa-regular fa-moon'></i> Dark Mode";
    }
}