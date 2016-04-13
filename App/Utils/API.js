const GITHUB_API_BASE = "https://api.github.com";

var API = {
  getBio(username) {
    username = username.toLowerCase().trim();
    var url = `${GITHUB_API_BASE}/users/${username}`;

    return fetch(url).then((response) => response.json());
  },

  getRepos(username) {
    username = username.toLowerCase().trim();
    var url = `${GITHUB_API_BASE}/users/${username}/repos`;

    return fetch(url).then((response) => response.json());
  }
};

module.exports = API;
