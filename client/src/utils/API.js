import axios from "axios";
/*
const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
const url =
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
    authKey;
*/
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
    //searches the NYT for articles
    search: function(query) {
        return axios.get(BASEURL + APIKEY + "&q=" + query);
    },
    // Gets all articles
    getSavedArticles: function() {
        return axios.get("/api/articles");
    },
    // Gets the book with the given id
    getSavedArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the book with the given id
    deleteSavedArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves an article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    }
};