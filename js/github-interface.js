var GitRepos = require('./../js/github.js').gitreposModule;

// var displayGitHubUser = function(ghUser) {
//   $('.show-gh-user-info').text("The GitHub username you entered is " + ghUser + ".");
// }
//
// $(document).ready(function() {
//   var currentGitHubObject = new GitHub();
//   $('#gh-username-button').click(function() {
//     var ghUser = $('#gh-username-input').val();
//     $('#gh-username-input').val("");
//     currentGitHubObject.getRepos(ghUser, displayGitHubUser);
//     // currentGitHubObject.getGitHub(ghUser, displayGitHubUser);
//   });
// });

$(document).ready(function() {
  var currentGitRepos = new GitRepos();
  $('#search-form').submit(function(event) {
    event.preventDefault();
    var name = $('#name').val();
    $('#name').val("");
    currentGitRepos.getRepos(name);
  });
});
