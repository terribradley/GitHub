var apiKey = require('./../.env').apiKey;

function GitRepos() {

}

GitRepos.prototype.getRepos = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
      $('#output').text("Here is a list of" + name + "'s Repositories. Included is a title and a brief description:"+ response[2].name);
      // console.log(response[1].name);
      // console.log(response[1].description);
  }).fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;
