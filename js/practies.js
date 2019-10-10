$(document).ready(function(){
    $('#subject').on('click',function(){
        var subject = $('#subject').val();
        $('.alert-success').html(subject);
    });
});
