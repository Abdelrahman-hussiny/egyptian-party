$('.obtn').click(function(){

    $('.sidenav').animate({width:'250px'},300)
    $('.home-text').css('margin-left','250px');
    $('.obtn').css('left','18%')

})

$('.closebtn').click(function(){
    $('.sidenav').animate({width:'0px'} ,300)
    $('.home-text').css('margin-left','0px');
    $('.obtn').css('left','0%')
})

$('.obtn').scroll(function(){
    
})



$(document).ready(function () {
    $(".singer p").css("display", "block");
    $(".singer h3").click(function () {
        $(this).next().slideToggle(250);
        $(".singers p").not($(this).next()).slideUp(250);
    });
});









//  $('.sidenav').animate({width:'250px'},500)
//     $('.home-text').css('margin-left','250px');


function counter(){
    var now = new Date();
    var eventDate = new Date(2022, 12, 28);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24) - 30;

    h %= 24;
    m %= 60;
    s %= 60;

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";
    document.getElementById("days").innerHTML = "<h3>" + d + " D" + "</h3>";

    document.getElementById("hours").innerHTML = "<h3>" + h + " h" + "</h3>";
    document.getElementById("min").innerHTML = "<h3>" + m + " m" + "</h3>";
    document.getElementById("sec").innerHTML = "<h3>" + s + " s" + "</h3>";

    setTimeout(counter, 1000);
}
counter()

$(function () {
    var max = 100;
    $("textarea").keydown(function () {
        var length = $(this).val().length;
        var character = max - length;
        console.log(character)
        if (character <= 0) {
            $("#char").text("your available character finished");
        } else {
            $("#char").text(character);
        }
    });
});
$(window).scroll(function(){
    let windowscroll = $(window).scrollTop()
    if(windowscroll > 296){
        $('.obtn').css({color:'black'})
        


    }else{
        $('.obtn').css({color:'white'})
    }
})

















































