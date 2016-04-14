const GITHUB_API_BASE = "https://api.github.com";
const FIREBASE_API_BASE = "https://oal-github-notetaker.firebaseio.com";

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
  },

  getNotes(username) {
    username = username.toLowerCase().trim();
    var url = `${FIREBASE_API_BASE}/${username}.json`;

    return fetch(url).then((res) => res.json());
  },
  addNote(username, note) {
    username = username.toLowerCase().trim();
    var url = `${FIREBASE_API_BASE}/${username}.json`;

    return fetch(url, {
      method: "POST",
      body: JSON.stringify(note)
    }).then((res) => res.json());
  }
};

module.exports = API;
