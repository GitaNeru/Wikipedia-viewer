$(document).ready(function(){
  $("#random").on("click", function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", '_blank');
  });

  $("#search").on("click",function(){
    var searchTerm = $("#searchTerm").val();
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
    $.ajax({
      type:"GET",
      url : url,
      async : false,
      dataType : "json",
      success : function(data){
        for(var i = 0 ; i < data[1].length ; i++){
        $("#output").prepend("<li><h3>"+'<a href="' +data[3][i] +'" target=_blank>' + data[1][i] + "</a></li>"+"</h3>" + data[2][i] );
        };
        $("#searchTerm").val("");
      },
      error : function(errorMessage){
        alert("Error");
      }
    });
  });
});