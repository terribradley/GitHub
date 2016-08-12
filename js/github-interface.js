var GitRepos = require('./../js/github.js').gitreposModule;


$(document).ready(function() {
  var currentGitRepos = new GitRepos();
  $('#search-form').submit(function(event) {
    event.preventDefault();
    $("#output").hide();
    var name = $('#name').val();
    $('#name').val("");
    $('#output').text("Here is a list of " + name + "'s Repositories.");
    currentGitRepos.getRepos(name);
  });
});
