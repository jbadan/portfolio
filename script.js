$('.mainButton').on('click', function(){
  $('#main').addClass('shrink');
});

$('#about').on('click', function(){
  $('#aboutDiv').addClass('display');
  $('#projectsDiv').removeClass('display');
  $('#contactDiv').removeClass('display');
})

$('#projects').on('click', function(){
  $('#projectsDiv').addClass('display');
  $('#contactDiv').removeClass('display');
  $('#aboutDiv').removeClass('display');
})

$('#contact').on('click', function(){
  $('#contactDiv').addClass('display');
  $('#aboutDiv').removeClass('display');
  $('#projectsDiv').removeClass('display');
})