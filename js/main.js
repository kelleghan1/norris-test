// Chuck norris code goes here

$( document ).ready( function(){

  function appendJokes(id, joke){
    $('#target').append('<div class="joke"><span class="joke-id">ID: ' + id + ' </span> - ' + joke + '</div>');
  }

  $.get('https://api.icndb.com/jokes/random/6', function(res){

    for (var i = 0; i < res.value.length; i++) {
      appendJokes(res.value[i].id, res.value[i].joke);
    }

  });

});
