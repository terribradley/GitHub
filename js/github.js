var apiKey = require('./../.env').apiKey;

function GitRepos() {

}

GitRepos.prototype.getRepos = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){
      $('#output').text("Here is a list of " + name + "'s Repositories");
  }).fail(function(error){
    $('.output').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;


console.log(response[0].name);
console.log(response[0].description);
