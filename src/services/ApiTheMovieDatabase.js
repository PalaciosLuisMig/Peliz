import { useFetch } from "../hooks/useFetch";


const APIKEY = "93587aa68fdaaae01ac07464aabe066e";
const APIURL = "https://api.themoviedb.org/3/";


export const GetPopularMovies = () => {
    
    const url = `${APIURL}discover/movie?sort_by=popularity.desc&api_key=${APIKEY}`
    const response  =  useFetch(url);

    return response;
}

