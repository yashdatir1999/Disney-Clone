import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3"
// console.log(movieBaseUrl)

// const api_key='e83762597b8833b66a7569199e1bea84'

//api.themoviedb.org/3/trending/all/day?api_key=e83762597b8833b66a7569199e1bea84

// const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)

const getTrendingVideos=axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=e83762597b8833b66a7569199e1bea84")

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id)
// console.log(getMovieByGenreId)

export default{getTrendingVideos , getMovieByGenreId}

