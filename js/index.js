const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 3000,
    delay: 400,
})

sr.reveal('.welcome-main')
// sr.reveal('.welcome-main', {delay: 600, distance: '100px', interval: 100})
// sr.reveal('.welcome-main', {origin: 'right'})
// sr.reveal('.welcome-main', {origin: 'left'})
// sr.reveal('.welcome-main', {interval: '200'})

document.getElementById('menu-icon').addEventListener('click', function () {
    var dropdown = document.querySelector('.menu .dropdown');
    if (dropdown.style.display === 'block') {
        dropdown.style.display = 'none';
    } else {
        dropdown.style.display = 'block';
    }
});

// Close the dropdown if clicked outside
window.onclick = function (event) {
    if (!event.target.matches('#menu-icon')) {
        var dropdowns = document.getElementsByClassName("dropdown");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.style.display === 'block') {
                openDropdown.style.display = 'none';
            }
        }
    }
};
        
