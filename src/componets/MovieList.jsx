import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import HrMovieCard from './HrMovieCard'

const MovieList = ({genereId , index_}) => {
    const [movieList, setmovieList] = useState([])
    useEffect(()=>{
        getMovieByGenereId()
    },[])
    const getMovieByGenereId=()=>{
        GlobalApi.getMovieByGenreId(genereId).then(resp=>{
            // console.log(resp.data.results)
            setmovieList(resp.data.results)
        })
    }

    return (
    <div className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth py-5  px-3  '>
        {movieList.map((item,index)=>(
           <>
           {index_%3==0? <HrMovieCard movie={item}/> :<MovieCard key={index} movie={item}/>}
           </> 
        ))}
    </div>
  
    )
}

export default MovieList