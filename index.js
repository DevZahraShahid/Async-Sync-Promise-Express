console.log("Before");

// Issue with ASYNC Operation
// const user = getUser(1);
// console.log(user);

// CALLBACKS - Approach
// ASYNC-Nesting makes it ASynchronous (Callback HELL)
// getUser(1, (user) => {
//   // console.log("User", user);
//   getRepos(user.githubUsername, (repos) => {
//     // console.log("Repos", repos);
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     });
//   });
// });

// Callback Hell (Solution)
// getUser(1, displayUser);

// function displayCommits(commits) {
//   console.log(commits);
// }

// function displayRepos(repos) {
//   getCommits(repos, displayCommits);
// }

// function displayUser(user) {
//   getRepos(user.githubUsername, displayRepos);
// }

// PROMISES - Approach
// Consuming Promise
// getUser(1)
//   .then((user) => getRepos(user.githubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("Error", err.message));

// ASYNC and AWAIT - Approach
async function displayCommits() {
  try {
    const user = await getUser(3);
    const repos = await getRepos(user.githubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}
displayCommits();

console.log("After");

// Issue with ASYNC Operation
// function getUser(id) {
//   setTimeout(() => {
//     console.log("Reading from DB...");
//     return { id: id, githubUsername: "zash" };
//   }, 2000);
// }

// CALLBACKS - Approach
// function getUser(id, callback) {
//   setTimeout(() => {
//     console.log("Reading from DB...");
//     callback({ id: id, githubUsername: "zash" });
//   }, 2000);
// }

// function getRepos(username, callback) {
//   setTimeout(() => {
//     console.log("Reading Repos for the user...");
//     callback(["repo1", "repo2", "repo3"]);
//   }, 2000);
// }

// function getCommits(repo, callback) {
//   setTimeout(() => {
//     console.log("Reading Commits for the repo...");
//     callback(["commit"]);
//   }, 2000);
// }

// PROMISES - Approach
// Callbacks replaced with Promises
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading from DB...");
      resolve({ id: id, githubUsername: "zash" });
    }, 2000);
  });
}

function getRepos(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Repos for the user...");
      resolve(["repo1", "repo2", "repo3"]);
      // reject(new Error("Couldn't get Repos"));
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading Commits for the repo...");
      resolve(["commit-X", "commit-Y"]);
    }, 2000);
  });
}
