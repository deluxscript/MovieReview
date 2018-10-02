import React, { Component } from 'react';
import './ShowMovies.css'

export class ShowMovies extends Component{
    handleChange=(movie)=>{
        let _movie=movie;
        this.props.vote(_movie)
    }

    render(){
        let movieList=this.props.movies.map((movie,i)=>
        // <tr key={i}>
            <div key={i} class="cf">
                <div class="fl w-10 tc pv3">
                <p className="id">#{movie.id}</p>
                </div>
                <div class="fl w-10 tc pv3">
                <p className="title">{movie.name}</p>
                </div>
                <div class="fl w-10 tc pv3">
                <img width="100" src={movie.img}/>
                </div>
                <div class="fl w-30 tc pv3">
                <p className="synopsis">{movie.synopsis}</p>
                </div>
                <div class="fl w-20 tc pv3">
                <p className="casts">{movie.casts} </p>
                </div>
                <div class="fl w-10 tc pv3">
                <p className="rating">{movie.rating}</p>
                </div>
                <div class="fl w-10 tc pv3">
                    <button className="btn" onClick={this.handleChange.bind(this,movie.name)}>Rate Now!</button>
                </div>
            </div>)

        return(
            <div>
            <h3 className="app-text"> My 2018 top movies</h3>
    
            <div class="cf">
                <div class="fl b w-10 tc pv3 white">
                Id
                </div>
                <div class="fl b w-10 tc pv3 white">
                Movie Title
                </div>
                <div class="fl b w-10 tc pv3 white">
                    3
                </div>
                <div class="fl b w-30 tc pv3 white">
                Synopsis
                </div>
                <div class="fl b w-20 tc pv3 white">
                Casts
                </div>
                <div class="fl b w-10 tc pv3 white">
                Rating
                </div>
            </div>
            {movieList}
          </div>
        )
    } 
}

export default ShowMovies;