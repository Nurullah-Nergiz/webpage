import axios from "axios";

axios.defaults.baseURL = "https://api.github.com/";

const getRepos = () => axios({
    url: "users/Nurullah-Nergiz/repos",
});
export default getRepos;
