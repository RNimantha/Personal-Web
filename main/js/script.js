// JavaScript to handle page switching
document.querySelectorAll('#navbar ul li a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('#content > div').forEach(function(page) {
            page.style.display = 'none';
        });
        var target = this.getAttribute('href').substring(1);
        document.getElementById(target).style.display = 'block';
    });
});
