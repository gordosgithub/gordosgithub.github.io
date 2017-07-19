function loadNews(){
$( "#newsTxt1" ).load( "news/news_1.html", function(response, status, jqxhr) {
  alert( "Load Complete. Response:" + response + " || Status: " + status );
});
$('#newsTxt2').load('news/news_2.txt');
$('#newsTxt3').load('news/news_3.txt');
}