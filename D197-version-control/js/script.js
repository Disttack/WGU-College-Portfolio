if (!location.hash) {
    location.hash = "#home";
}

function loadContent() {
    var pages = ['home', 'about', 'customers', 'team', 'services', 'missionvision', 'contact']
    fragmentId = location.hash.substr(1);
    pages.forEach(element => {
        var x = document.getElementById(element)
        var y = document.getElementById(element + '-link')
        if (element === fragmentId || !fragmentId) {
            x.style.display = "block";
            y.classList.add('selected');
        } else {
            x.style.display = "none";
            y.classList.remove('selected');
        }
    });
}

loadContent();

window.addEventListener("hashchange", loadContent);

