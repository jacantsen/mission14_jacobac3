import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { useState, useEffect } from "react"
import MainLayout from "../layout/MainLayout"
import { Movie } from '../types/Movie';
function Movies() {
    
    const [movieData, setMovieData] = useState<Movie[]>([]);

    useEffect (()=>{
        const fetchMovies = async () =>{
            const rsp = await fetch('https://localhost:4000/movie')
            const temp = await rsp.json()
            setMovieData(temp)
        }
        fetchMovies();
    },[])



  return (
    <MainLayout>
        <div><h1>Joel Hiltons Movie Collection</h1></div>
        <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th >Category</th>
                        <th >Title</th>
                        <th >Year</th>
                        <th >Director</th>
                        <th >Rating</th>
                        <th >Edited</th>
                        <th >Lent To</th>
                        <th >Notes</th>
                    </tr>
                </thead>
                <tbody>
                {movieData.map((m)=>(
                        
                        <tr key = {m.movieId}>
                            <td>{m.category}</td>
                            <td>{m.title}</td>
                            <td>{m.year}</td>
                            <td>{m.director}</td>
                            <td>{m.rating}</td>
                            <td>{m.edited}</td>
                            <td>{m.lentTo}</td>
                            <td>{m.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
    </MainLayout>
  )
}

export default Movies