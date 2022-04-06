import React, { Component } from 'react'
import './Browse.scss'
import MovieCard from '../../components/MovieCard/MovieCard';
import axios from "axios";
import Nav from "../../components/Nav/Nav";

class Browse extends Component {
  state = {
    movies: [],
    netflix: true,
    disney: true,
    ranked: false,
    friend: false,
    topMovie: {},
    genre: "All Genres"
  }

  getMovies = () => {
    axios.get("http://localhost:8080/browse")
      .then(response => {
        let filteredMovies = response.data
        let topMovie = {}
        if (!this.state.netflix) {
          filteredMovies = filteredMovies.filter(netflixTrue => !netflixTrue.streamingInfoNetflix)
        }
        if (!this.state.disney) {
          filteredMovies = filteredMovies.filter(disneyTrue => !disneyTrue.streamingInfoDisney)
        }
        if (this.state.ranked && !this.state.friend) {
          filteredMovies = filteredMovies.filter(ratingTrue => ratingTrue.rating).sort((a, b) => b.rating - a.rating)
        }
        if (this.state.friend) {
          filteredMovies = filteredMovies.filter(friendTrue => friendTrue.friendRating || friendTrue.rating).sort((a, b) => b.rating - a.rating)
          let totalRating = 0
          filteredMovies.forEach(movie => {
            totalRating = 0
            if(movie.rating && movie.friendRating){
              totalRating = +movie.rating + +movie.friendRating;
            }
            movie.totalRating = totalRating;
          })
          filteredMovies.sort((a, b) => b.totalRating - a.totalRating)
        }
        if (this.state.genre !== "All Genres") {
          filteredMovies = filteredMovies.filter(genre => genre.genre1 === this.state.genre)
        }
        if (this.state.search) {
          filteredMovies = filteredMovies.filter(search => search.genre1 === this.state.genre)
        }
        if (this.state.ranked) {
          topMovie = filteredMovies[0]
          this.setState({
            topMovie: topMovie
          })
        }
        this.setState({
          movies: filteredMovies
        })
      })
  }

  handleToggleNetflix = () => {
    if (this.state.netflix) {
      this.setState({
        netflix: false
      })
      this.getMovies()
    } else {
      this.setState({
        netflix: true
      })
      this.getMovies()
    }
  }

  handleToggleDisney = () => {
    if (this.state.disney) {
      this.getMovies()
      this.setState({
        disney: false
      })
    } else {
      this.getMovies()
      this.setState({
        disney: true
      })
    }
  }

  handleToggleRanked = () => {
    if (this.state.ranked) {
      this.setState({
        ranked: false,
        friend: false
      })
      this.getMovies()
    } else {
      this.setState({
        ranked: true
      })
      this.getMovies()
    }
  }
  
  handleToggleFriend = () => {
    if (this.state.friend) {
      this.setState({
        friend: false
      })
      this.getMovies()
    } else {
      this.setState({
        friend: true
      })
      this.getMovies()
    }
  }

  searchMovies = e => {
    const search = e.target.value
    this.setState({
      search: search
    })
  }
  
  selectGenre = e => {
    const genre = e.target.innerHTML
    this.setState({
      genre: genre
    })
    this.getMovies()
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      <>
        <Nav
          onClickNetflix={this.handleToggleNetflix}
          onClickDisney={this.handleToggleDisney}
          onClickRanked={this.handleToggleRanked}
          onClickFriend={this.handleToggleFriend}
          netflix={this.state.netflix}
          disney={this.state.disney}
          ranked={this.state.ranked}
          friend={this.state.friend}
          genre={this.state.genre}
          searchMovies={this.searchMovies}
          selectGenre={this.selectGenre}
          currentGenre={this.state.genre}
        />
        <div className="movie-cards__container">
          {this.state.movies
            .filter(movie => {
              if (!this.state.search) {
                return true
              }
              if (movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) {
                return true
              }
              return false
            })
            .map(movie =>
              <MovieCard
                key={movie.imdbID}
                imdbID={movie.imdbID}
                title={movie.title}
                overview={movie.overview}
                imdbRating={movie.imdbRating}
                genre1={movie.genre1}
                genre2={movie.genre2}
                genre3={movie.genre3}
                year={movie.year}
                streamingInfo1={movie.streamingInfo1}
                streamingInfo2={movie.streamingInfo2}
                streamingInfo={movie.streamingInfo}
                streamingInfoNetflix={movie.streamingInfoNetflix}
                streamingInfoDisney={movie.streamingInfoDisney}
                posterURL={movie.posterURL}
                yourRating={movie.rating}
                ratingState={this.state.ranked}
                friendRating={movie.friendRating}
                friendRatingState={this.state.friend}
                topMovie={this.state.topMovie}
              />
            )}
        </div>
      </>
    )
  }
}

export default Browse;