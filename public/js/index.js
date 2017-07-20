
$(function(){

    $('#men').click(function(){
        $(this).addClass('select');
        $('#women').removeClass('select');
        $('#secrecy').removeClass('select');
        document.getElementById("user_sex").value='0';
    });

    $('#women').click(function(){
        $(this).addClass('select');
        $('#men').removeClass('select');
        $('#secrecy').removeClass('select');
        document.getElementById("user_sex").value='1';
    });

    $('#secrecy').click(function(){
        $(this).addClass('select');
        $('#women').removeClass('select');
        $('#men').removeClass('select');
        document.getElementById("user_sex").value='2';
    });

    $('#zk').click(function(){
        $(this).addClass('select');
        $('#fd').removeClass('select');
        $('#zhongjie').removeClass('select');
        document.getElementById("user_role").value='0';
    });

    $('#fd').click(function(){
        $(this).addClass('select');
        $('#zk').removeClass('select');
        $('#zhongjie').removeClass('select');
        document.getElementById("user_role").value='1';
    });

    $('#zhongjie').click(function(){
        $(this).addClass('select');
        $('#fd').removeClass('select');
        $('#zk').removeClass('select');
        document.getElementById("user_role").value='2';
    });





});
