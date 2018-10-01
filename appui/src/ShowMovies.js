import React, { Component } from 'react';
import './ShowMovies.css'

export class ShowMovies extends Component{
    handleChange=(movie)=>{
        let _movie=movie;
        this.props.vote(_movie)
    }

    render(){
        let movieList=this.props.movies.map((movie,i)=>
        <tr key={i}>
            <td>#{movie.id}</td>
            <td>{movie.name}</td>
            <th><img width="100" src={movie.img}/></th>
            <th>{movie.synopsis}</th>
            <th>{movie.casts}</th>
            <td>{movie.rating}</td>
            <td>
                <button className="btn" onClick={this.handleChange.bind(this,movie.name)}>Rate Now!</button>
            </td>
        </tr>)

        return(
            <div>
            <h3> My 2018 top movies</h3>
            <hr />
            <table >
                <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Movie Title</th>
                        <th></th>
                        <th>Synopsis</th>
                        <th>Casts</th>
                        <th>Rating</th>
                    </tr>
                    {movieList}
                </tbody>
            </table>
          </div>
        )
    } 
}

export default ShowMovies;