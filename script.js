

$(function(){
    $('.loading').fadeIn('slow');

  setTimeout(function(){
    $('#load-wrapper').fadeOut('slow');
  },1500);

  setTimeout(function(){
    $('.page').slideDown('slow');
  },1800);
  setTimeout(function(){
    $('.table').fadeIn('slow');
  },1800);


  $('#text').fadeIn('slow').css('color','#AED4D5');
  $('#coming-soon').hide().css('background-color','#AED4D5').fadeIn('slow')

  $('#home').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#AED4D5').text('Home')
    $('#coming-soon').hide().css('background-color','#AED4D5').fadeIn('slow')
    $('#coming-soon1').hide()
  });

  $('#timetable').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#FFE5C0').text('Timetable')
    $('#coming-soon1').hide().css('background-color','#FFE5C0').fadeIn('slow')
    $('#coming-soon').hide()
  });

  $('#news').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#EAD2DF').text('News')
    $('#coming-soon').hide().css('background-color','#EAD2DF').fadeIn('slow')
    $('#coming-soon1').hide()
  });
  $('#Character').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#C8A8DA').text('Character')
    $('#coming-soon').hide().css('background-color','#C8A8DA').fadeIn('slow')
    $('#coming-soon1').hide()
  });
  $('#Access').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#F9CC88').text('Access')
    $('#coming-soon').hide().css('background-color','#F9CC88').fadeIn('slow')
    $('#coming-soon1').hide()
  });


});
