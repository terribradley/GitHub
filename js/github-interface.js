var GitRepos = require('./../js/github.js').gitreposModule;


$(document).ready(function() {
  var currentGitRepos = new GitRepos();
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#name').val("");
    currentGitRepos.getRepos(name);
  });
});
