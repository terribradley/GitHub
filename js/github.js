var apiKey = require('./../.env').apiKey;

function GitRepos() {

}

GitRepos.prototype.getRepos = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
    for (i=0 i<response.length; i++) {
      $('#output').text("Here is a list of" + name + "'s Repositories. Included is a title and a brief description:"+ response[i].name + response[i].description);  
    }
      // console.log(response[1].name);
      // console.log(response[1].description);
  }).fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;
