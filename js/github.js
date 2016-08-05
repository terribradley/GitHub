var apiKey = require('./../.env').apiKey;

function GitRepos() {
  this.name = name;
}

GitRepos.prototype.getRepos = function(name) {
  $.get("https://api.github.com/users/" + name + "/repos?access_token=" + apiKey).then(function(response){
    console.log(response);
    for(var i=0; i<response.length; i++) {
      $("#repos-list").append("<li class='repo'>" + response[i].name + ":</li> " + "<li>" + response[i].description + "</li>");
    };
      // console.log(response[1].description);
  }).fail(function(error){
    $('.error-message').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;
