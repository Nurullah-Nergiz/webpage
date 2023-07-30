import axios from "axios";

export const getRepos = () =>
  axios({
    url: "https://api.github.com/users/Nurullah-Nergiz/repos",
  });

export const getRepoReadme = (repoName, branch) =>
  axios({
    url: `https://raw.githubusercontent.com/Nurullah-Nergiz/${repoName}/${branch}/README.md`,
  });

export const getRepoDetails = (repoName) =>
  axios({
    url: `https://api.github.com/repos/Nurullah-Nergiz/${repoName}`,
  });
