$("button").css('background-color', 'aliceblue');
$('button').css('cursor', 'pointer');

//essentially, document.querySelectorAll is replaced with $

console.log($('button').css('cursor'));
$("h1").addClass("title");

// setTimeout(()=>{
//     $('h1').removeClass('title');
// }, 4000)

console.log($('h1').hasClass('title'));

$('button').text('Button to click');

$('.two').html('<i>Button to not click</i>').css('background-color', 'pink');

$('.three').click(function(){
    $('h1').slideToggle();
})

$('.four').click(function(){
    $('h1').fadeOut(500).fadeIn(500);
})

$('.one').click(function(){
    $('h1').toggle()
})

$('.two').click(function(){
    $('h1').animate({
        opacity: 0.5
    }) 
})
