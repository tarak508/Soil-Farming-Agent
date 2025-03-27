document.addEventListener('DOMContentLoaded', function () {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        const navbarContent = document.getElementById('navbarContent');
        navbarContent.innerHTML = `
            <li><a href="#"><span class="glyphicon glyphicon-user"></span> ${user.name}</a></li>
            <li><a href="#" id="logoutBtn"><span class="glyphicon glyphicon-log-out"></span> Logout</a></li>
        `;

        document.getElementById('logoutBtn').addEventListener('click', function () {
            localStorage.removeItem('user');
            window.location.href = 'index.html';
        });
    }
});