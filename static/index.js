if ($.cookie('username') != undefined){
  if($.cookie('password') != undefined){
    /*var xhr = new XMLHttpRequest();

    data = {
      username: $.cookie('username'),
      password: $.cookie('password')
    };

    xhr.onreadystatechange = function(){
      if (xhr.readyState == 4){
        $("html").html(xhr.response)
      }
    }

    xhr.open("POST", "/login")
    xhr.setRequestHeader('contetn-type', 'application/json');
    xhr.send(JSON.stringify(data));

  }*/

  $("#user").val($.cookie('username'));
  $("#pass").val($.cookie('password'));
  $("#loginform").submit();
}