

//Expand search bar
function toggleSearchForm() {
  document.getElementById('form').classList.toggle('active');
  $('#myBtn span').html('<a href="https://en.wikipedia.org/wiki/Special:Random" target="_blank"><span>Random</span> </a>');
  $("#myBtn").prop("disabled",true);
    
         
  
  
}

//get click button on enter and save input data
//document.getElementById("myInput");

//input.addEventListener('click',clickBtn);
    
  var search = $('.search');
var result = $('.result');

search.keyup(function() {
  if (search.val() === '') {
    result.html('');
    exit;
  }
  
  $.ajax({
    url: '//en.wikipedia.org/w/api.php',
    data: { action: 'query', list: 'search', srsearch: search.val(), format: 'json' },
    dataType: 'jsonp',
    success: function (x) {
      var html  = '  <!-- result -->';
          
          
      x.query.search.map(function(w) {
        html += '    <div class="wikiBlock"><a href="https://en.wikipedia.org/wiki/' + w.title + '" target="_blank"><div class="title"><h3 class="panel-title">' + w.title + '</h3></div><div class="descrip">' + w.snippet+'</div></a></div> </div>';
        
        
      });
      
      result.html(html);
    }
  });
});