import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ratingContract } from "./setup";
import {ShowMovies } from "./ShowMovies";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      movies : [
                {
                  id: 1,
                  name:'Acrimony',
                  img:'https://i2.wp.com/brandspurng.com/wp-content/uploads/2018/07/Acrimony-brandspurng.jpg?fit=1920%2C1000&ssl=1',
                  synopsis:"A faithful wife, tired of standing by her devious husband, is enraged when it becomes clear she has been betrayed.",
                  casts:' Taraji P. Henson, Lyriq Bent, Crystle Stewart',
                  rating:0
                },
                {
                  id: 2,
                  name:'Blank Panther',
                  img:'https://cdn.britannica.com/s:700x450/36/198336-004-0F77A000.jpg',
                  synopsis:"T'Challa, heir to the hidden but advanced kingdom of Wakanda, must step forward to lead his people into a new future and must confront a challenger from his country's past.",
                  casts:'Chadwick Boseman, Michael B. Jordan, Lupita Nyong',
                  rating:0
                },
                {
                  id: 3,
                  name:'Damsel',
                  img:'https://resizing.flixster.com/cg4C8_Z_ByuEz3uTBb2hFh9EtDY=/300x300/v1.bjsxOTU5NTkyO2o7MTc4ODc7MTIwMDsyMjc1Ozg1Mw',
                  synopsis:"Samuel Alabaster (Robert Pattinson), an affluent pioneer, ventures across the American Frontier to marry the love of his life, Penelope (Mia Wasikowska). As Samuel traverses the Wild West with a drunkard named Parson Henry (David Zellner) and a miniature horse called Butterscotch, their once-simple journey grows treacherous, blurring the lines between hero, villain and damsel. A loving reinvention of the western genre from the Zellner brothers (Kumiko, the Treasure Hunter), DAMSEL showcases their trademark unpredictability, off-kilter sense of humor, and unique brand of humanism.",
                  casts:'Robert Pattinson, Mia Wasikowska, Robert Forster, David Zellner',
                  rating:0
                },
                {
                  id: 4,
                  name: 'Beirut',
                  img:'https://resizing.flixster.com/uFzQwYKQmtLqhZbzEmOry5LhLq0=/206x305/v1.bTsxMjY0MTk2MjtwOzE3ODMxOzEyMDA7NjcyOzk5Nw',
                  synopsis:"Caught in the crossfires of civil war, CIA operatives (Rosamund Pike, Dean Norris) must send a former U.S. diplomat (Jon Hamm) to negotiate for the life of a friend he left behind.",
                  casts:'Jon Hamm, Rosamund Pike, Dean Norris, Shea Whigham',
                  rating:0
                },
                {
                  id: 5,
                  name: 'Nancy',
                  img:'https://resizing.flixster.com/hIWHq7Sdbdn663J_BUii7BXZRis=/206x305/v1.bTsxMjczMDY0NDtqOzE3ODMyOzEyMDA7MjAyNTszMDAw',
                  synopsis:"NANCY is a provocative psychological thriller about love, intimacy, and trust - and what happens when lies become truth. Craving connection with others, Nancy creates elaborate identities and hoaxes under pseudonyms on the internet. When she meets a couple whose daughter went missing thirty years ago, fact and fiction begin to blur in Nancy's mind, and she becomes increasingly convinced these strangers are her real parents. As their bond deepens, reasonable doubts give way to willful belief - and the power of emotion threatens to overcome all rationality.",
                  casts:'Andrea Riseborough, J. Smith-Cameron, Ann Dowd, John Leguizamo',
                  rating:0
                },
                {
                  id: 6,
                  name: 'Blockers',
                  img:'https://resizing.flixster.com/_KMIzO0B1p0Q9UYtlHQfhU5HTBM=/206x305/v1.bTsxMjY2MjMxOTtqOzE3ODMxOzEyMDA7NjQ3OzEwMjQ',
                  synopsis:"When three parents stumble upon their daughters' pact to lose their virginity at prom, they launch a covert one-night operation to stop the teens from sealing the deal.",
                  casts:'Leslie Mann, Ike Barinholtz, John Cena, Kathryn Newton',
                  rating:0
                },
                {
                  id: 7,
                  name: 'Leave No Trace',
                  img:'https://resizing.flixster.com/01pR_mkvOVfUShZG2xbcJXqDGI0=/206x305/v1.bTsxMjcyMzc5MDtqOzE3ODMyOzEyMDA7NDA1MDs2MDAw',
                  synopsis:"Will (Ben Foster) and his teenage daughter, Tom (Thomasin Harcourt McKenzie), have lived off the grid for years in the forests of Portland, Oregon. When their idyllic life is shattered, both are put into social services. After clashing with their new surroundings, Will and Tom set off on a harrowing journey back to their wild homeland. The film is directed by Debra Granik from a script adapted by Granik and Anne Rosellini.",
                  casts:'Ben Foster, Thomasin McKenzie, Jeff Kober, Dale Dickey',
                  rating:0
                },
                {
                  id: 8,
                  name: 'Paddington 2',
                  img:'https://resizing.flixster.com/hGcHXzBQ-nuK2EVuSRPunVBHYeg=/206x305/v1.bTsxMjY0MTAwNDtqOzE3ODMxOzEyMDA7Mjc2NDs0MDk2',
                  synopsis:"PADDINGTON 2 finds Paddington happily settled with the Brown family in Windsor Gardens, where he has become a popular member of the community, spreading joy and marmalade wherever he goes. While searching for the perfect present for his beloved Aunt Lucy's hundredth birthday, Paddington spots a unique pop-up book in Mr. Gruber's antique shop, and embarks upon a series of odd jobs to buy it. But when the book is stolen, it's up to Paddington and the Browns to unmask the thief",
                  casts:'Hugh Grant, Ben Whishaw, Brendan Gleeson, Hugh Bonneville',
                  rating:0
                },
                {
                  id: 9,
                  name: 'Night Comes On',
                  img:'https://resizing.flixster.com/7hCPhlvv-nx01wj1ZCjqoEiIcyY=/206x305/v1.bTsxMjc3OTQwMTtqOzE3ODMyOzEyMDA7MjAyNTszMDAw',
                  synopsis:"Angel LaMere is released from juvenile detention on the eve of her 18th birthday. Haunted by her past, Angel embarks on a journey with her 10 year-old sister to avenge her mother's death.",
                  casts:'Dominique Fishback, John Earl Jelks, Max Casella, Tatum Marilyn ',
                  rating:0
                },
                {
                  id: 10,
                  name: 'Eight Grade',
                  img:'https://resizing.flixster.com/hAy62HD2yfa6YAfA79Ek13hTpLI=/206x305/v1.bTsxMjc5NTM3OTtqOzE3ODMzOzEyMDA7NDY4NTs3MzE1',
                  synopsis:"Thirteen-year-old Kayla endures the tidal wave of contemporary suburban adolescence as she makes her way through the last week of middle school--the end of her thus far disastrous eighth grade year before she begins high school.",
                  casts:'Elsie Fisher, Josh Hamilton, Emily Robinson, Jake Ryan',
                  rating:0
                }
              ]
    }
    this.handleVoting=this.handleVoting.bind(this)
  }

handleVoting(movie){
    ratingContract.voteForMovie(movie)
    let votes=ratingContract.totalVotesFor(movie).toNumber()
    this.setState({movies:this.state.movies.map(
      (el)=>el.name===movie? Object.assign({},el,{rating:votes}):el
    
    )});
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ethereum</h1>
        </header>
        <p className="App-intro">
          Movie Rating Application with Ethereum and React
        </p>
        <div className="movie-table">
          <ShowMovies movies={this.state.movies} vote={this.handleVoting}/>
        </div>
      </div>
    );
  }
}

export default App;