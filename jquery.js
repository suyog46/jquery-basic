$('.a').click(function(){
    $('h1').show()
})
$('.b').click(function(){
    $('h1').hide()
})
$('.c').click(function(){
    $('h1').toggle()
})

//slide tutorial
$('.d').click(function(){
    $('h1').slideUp(3000)    //slide vako animation sahit aauxa...vitra chai time deko..3000ms ma
})
$('.e').click(function(){
    $('h1').slideDown()
})
$('.f').click(function(){
    $('h1').slideToggle()
})

//fade fumction
$('.g').click(function(){
    $('h2').fadeIn(2000)
})
 $('.h').click(function(){
    $('h2').fadeOut(2000)
})
 $('.i').click(function(){
    $('h2').fadeToggle()
})
$('.j').click(function(){
    $('h2').fadeTo(2000,0.3)  //2000 sec ma chai opacity 0.3 samma pugxa
})

//class concept
$('.k').click(function(){
    $('h3').addClass('new')  //class 'new' add gareko
})
$('.l').click(function(){
    $('h3').removeClass('new')  //class 'new' remove gareko
})
$('.m').click(function(){
    $('h3').toggleClass('new')  //class 'new' toggle gareko
})
$('.n').click(function(){
    $('h3').css({background:'black',fontSize: '30px'})  //css chai as a object pass garnu parca
})


//append haru ko concept
$('.o').click(function(){
    $('h4').append('<input>') //input vanni html lai h1 vitra nai append gardeko
})
$('.p').click(function(){
    $('h4').prepend('<input>') //input vanni html lai h1 vitra nai beofre prepend gardeko
}) 
 $('.q').click(function(){
    $('h4').after('<input>') //input vanni html lai h4 bahira after add gardeko
})

  $('.r').click(function(){
    $('h4').before('<input>') //input vanni html lai h4 bahira before add gardeko
})


//innnerhtml haru jastai concept
$('.u').click(function(){
    $('p').html('hi i am changed') //innerhtml jastai change hunxa
})
$('.w').click(function(){
    $('p').text('<span>hi i am changed<span>') //innertext jastai vitra ko sabai dekhauxa
})
$('.s').click(function(){
    $('p').remove() //innerhtml jastai change hunxa
})
$('.t').click(function(){
    $('p').empty() //innerhtml jastai change hunxa
})
$('.x').click(function(){
    $('p').animate({left:'400px'},3000) //left bata 400 px samma animate vayera aauxa
})

$('.y').click(function(){
    $('p').stop() //animation stop hunxa
})


//form ko content change garna
$('.v').click(function(){
    $('.aa').val('hi i am changed') //form vitra input ko text change gardyo
  })