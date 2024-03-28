document.addEventListener('DOMContentLoaded', function() {
    var logoutButton = document.getElementById('logout');
    logoutButton.addEventListener('click', function(e) {
        var confirmed = confirm('Are you sure you want to log out?');
        if (!confirmed) {
            e.preventDefault(); 
        }
    });
});
