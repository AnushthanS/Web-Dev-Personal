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