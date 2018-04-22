import axios from "axios";

const API = {
    searchNYT: (topic, startYear, endYear) => {
        const authKey = "2112f0da9d2640808ea08e568ec54e8:0:74623931";
        const queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + 
        authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
        return axios.get(queryUrl);
    },
    getArticle: () => {
        return axios.get("/api/saved");
    },
    saveArticle: (articleObj) => {
        return axios.post("/api/saved", articleObj);
    },
    deleteArticle: (id) => {
        return axios.delete(`/api/saved/"${id}`);
    }
};

export default API;