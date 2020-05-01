
$(function(){
    $('.loading').fadeIn('slow');

  setTimeout(function(){
    $('#load-wrapper').fadeOut('slow');
  },1500);

  const slideLeft = $('.table');
  const slideRight = $('.right-padding');

  setTimeout(function(){
    $('.page').slideDown('slow');
  },1800);
  setTimeout(function(){
    slideLeft.css({'left':"-20%",'opacity':"0.0"}).animate({'left' : '0','opacity':"1.0" }, 2000);
    slideRight.css({'right':"-20%",'opacity':"0.0"}).animate({'right' : '1%','opacity':"1.0" }, 2000);
  },1000);

  $('#text').fadeIn('slow').css('color','#FFE5C0');
  $('#coming-soon1').hide().css('background-color','#FFE5C0').fadeIn('slow')

  $('#home').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#AED4D5').text('Home')
    $('#coming-soon').hide().css('background-color','#AED4D5').fadeIn('slow')
    $('#coming-soon1').hide()
    $('#contact-tab').hide()
    $('#news-tab').hide()
    $('#character-tab').hide()
  });

  $('#timetable').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#FFE5C0').text('Timetable')
    $('#coming-soon1').hide().css('background-color','#FFE5C0').fadeIn('slow')
    $('#coming-soon').hide()
    $('#contact-tab').hide()
    $('#news-tab').hide()
    $('#character-tab').hide()
  });

  $('#news').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#EAD2DF').text('News')
    $('#news-tab').hide().css('background-color','#EAD2DF').fadeIn('slow')
    $('#coming-soon1').hide()
    $('#contact-tab').hide()
    $('#coming-soon').hide()
    $('#character-tab').hide()
  });
  $('#Character').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#C8A8DA').text('Character')
    $('#character-tab').hide().css('background-color','#C8A8DA').fadeIn('slow')
    $('#coming-soon1').hide()
    $('#news-tab').hide()
    $('#coming-soon').hide()
    $('#contact-tab').hide()
  });
  $('#contact').click(function(){
    $('#text').hide().fadeIn('slow').css('color','#F9CC88').text('Contact')
    $('#contact-tab').hide().css('background-color','#F9CC88').fadeIn('slow')
    $('#coming-soon').hide()
    $('#coming-soon1').hide()
    $('#news-tab').hide()
    $('#character-tab').hide()
  });

  $('#mon').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#mon_content').hide().fadeIn('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')

  });
  $('#tue').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#tue_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')
  });
  $('#wed').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#wed_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')
  });
  $('#thu').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#thu_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')
  });
  $('#fri').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#fri_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')
  });
  $('#sat').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#sat_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sun_content').hide().fadeOut('slow')
  });
  $('#sun').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')
    $('#sun_content').hide().fadeIn('slow')
    $('#mon_content').hide().fadeOut('slow')
    $('#wed_content').hide().fadeOut('slow')
    $('#tue_content').hide().fadeOut('slow')
    $('#thu_content').hide().fadeOut('slow')
    $('#fri_content').hide().fadeOut('slow')
    $('#sat_content').hide().fadeOut('slow')
  });

  const monthEnglishList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const dayEnglishList = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];

  var dateSetting = new Date();
  var month = dateSetting.getMonth();
  var monthEnglish = monthEnglishList[month];
  var day = dateSetting.getDay();
  var dayEnglish = dayEnglishList[day-1];
  var date = dateSetting.getDate();

  $('#time-d').text(dayEnglish);
  $('#time-da').text(date);
  $('#time-m').text(monthEnglish);

  const btnD=['mon','tue','wed','thu','fri','sat','sun'];
  const btnDay=['#mon_content','#tue_content','#wed_content','#thu_content','#fri_content','#sat_content','#sun_content'];
  for(let i=0;i<btnD.length;i++){
    if(dayEnglish === dayEnglishList[i]){
      $('.day').hide().fadeIn('slow').css('color','#F9CC88')
           $(btnDay[i]).hide().fadeIn('slow')
           document.getElementById(btnD[i]).checked = true;

    }
  }
  for(let i=0;i<btnD.length;i++){
    if(dayEnglish === dayEnglishList[i]){
  $('.right-top-box').click(function(){
    $('.day').hide().fadeIn('slow').css('color','#F9CC88')

    $('#text').hide().fadeIn('slow').css('color','#FFE5C0').text('Timetable')
    $('#coming-soon1').hide().css('background-color','#FFE5C0').fadeIn('slow')
    $('#coming-soon').hide()
    $(btnDay[i]).hide().fadeIn('slow')
    for(let j=0 ;j<btnD.length;j++){
      if(dayEnglish !== dayEnglishList[j]){
        $(btnDay[j]).hide().fadeOut('slow')
      }
    }
     document.getElementById(btnD[i]).checked = true;
　　 document.getElementById("timetable").checked = true;
　  });
　　}
　}

  const name= ['.name1','.name2','.name3','.name4','.name5'];
  const nameList=['name1','name2','name3','name4','name5'];
  for(let i= 0;i<name.length;i++){
    $(name[i]).text(nameList[i]);
  }


});
