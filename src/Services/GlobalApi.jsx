import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3"

const api_key='e83762597b8833b66a7569199e1bea84'

// https://api.themoviedb.org/3/trending/all/day?api_key=e83762597b8833b66a7569199e1bea84

const getTrendingVideos=axios.get(this.movieBaseUrl+"/trending/all/day?api_key"+api_key)

export default{getTrendingVideos}