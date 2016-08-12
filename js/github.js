var apiKey = require('./../.env').apiKey;

function GitRepos() {
}

GitRepos.prototype.getRepos = function(name) {
  $.get("https://api.github.com/users/" + name + "/repos?&per_page=200&access_token=" + apiKey).then(function(response){
    console.log(response);
    $("#repos-list").empty();
    for(var i=0; i<response.length; i++) {
      $("#repos-list").append("<li class='repo'>" + response[i].name + ":</li> " + "<li>" + response[i].description + "</li>");
    }
  }).fail(function(error){
    $('.error-message').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;
