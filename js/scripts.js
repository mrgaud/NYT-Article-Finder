$(document).ready(function() {

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 100, // Creates a dropdown of 15 years to control year
        max: new Date()
    });

    $(".button-collapse").sideNav();


})
