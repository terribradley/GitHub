var apiKey = require('./../.env').apiKey;

function GitRepos() {

}

GitRepos.prototype.getRepos = function(name) {
  $.get('https://api.github.com/users/' + name + '/repos?access_token=' + apiKey).then(function(response){

    // console.log(response);
    // for(var i=0; i<response.length; i++) {
      $('#output').text("Here is a list of" + name + "'s Repositories. Included is a title and a brief description:");
      $('repos-list').append('<li>'+ response[1].name + '</li>' + '<li>' response[1].description + '<li>');
    });
      // console.log(response[1].description);
  });.fail(function(error){
    $('.error-message').text(error.responseJSON.message);
  });
};

exports.gitreposModule = GitRepos;
