$(document).ready(function(){

/*step 1*/
let alertButton = $('<button></button>');
alertButton.text("fancy Button");
$("body").append(alertButton);

$(alertButton).click(function(){
    alert("you are loved")
})

/*step 2*/
$("#button2").click(function(){
    alert($("input[type=text]").val())
})

/*step 3*/
$('#mydiv').css({
    'width':'150px',
    'height':'150px',
});
$('#mydiv').mouseover(function(){
    $('#mydiv').css({'width':'150px','height':'150px'})
    $('#mydiv').css('background-color','red');

});
$('#mydiv').mouseout(function(){
    $('#mydiv').css({'width':'150px','height':'150px'})
    $('#mydiv').css('background-color','green');

});

/*step 4*/
$('#para').click(function() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    $('#para').css('color', "#"+randomColor);
});

/*step 5*/
$('#button3').click(function(){
    let $span = $('<span>kaley</span>')
    $('#nextdiv').append($span);
})

/*step 6*/
counter=0;
let $ul=$('#list');
let friends=['hunter', 'Dariss', 'Putrid', 'Asymptote', 'Calisnow', 'Foxbrush', 'Ferragamoo', 'Ark', 'Kona', 'Luum', 'Navi'];
$('#button4').click(function(){
    console.log('ive been clicked')
    let $li =$(`<li>${friends[counter]}</li>`)

    $ul.append($li);
    counter ++

})
})