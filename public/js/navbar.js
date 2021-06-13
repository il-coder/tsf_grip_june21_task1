$(document).ready(function () {
    /** Navbar Toggle */
    $('#mobile-menu-toggle').click(function () {
        $('#mobile-menu-toggle > svg').toggleClass('hidden');
        $('#mobile-menu').toggleClass('hidden');
    });

    /** Footer Dynamic Content */
    $('#footer').html(`&copy; Copyright ${new Date().getFullYear()} Piyush Garg`);
});