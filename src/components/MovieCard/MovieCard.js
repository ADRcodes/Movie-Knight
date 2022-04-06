import React, { Component } from 'react'
import './MovieCard.scss'
import axios from "axios";
import netflixLogo from '../../assets/images/netflix-logo.png'
import disneyLogo from '../../assets/images/disney-logo.jpg'
import Stars from '../Stars/Stars';
import { FaStar } from 'react-icons/fa'


class MovieCard extends Component {
    state = {
        rating: null
    }

    changeRating = (e) => {
        let newRating = e.target.value;
        console.log("new rating:", newRating)
        // e.preventDefault();

        axios.put(`http://localhost:8080/browse/${this.props.imdbID}`, { rating: e.target.value })
            .then(response => {
                console.log("rating editted")
                console.log(e.target.value)
                console.log(response)
            })
            .catch(error => {
                console.log(error);
                alert("Unable to complete PUT request");
            });

        this.setState({
            rating: e.target.value
        });
    }


    render() {
        let {
            imdbID,
            title,
            overview,
            imdbRating,
            year,
            genre1,
            genre2,
            genre3,
            streamingInfoNetflix,
            streamingInfoDisney,
            posterURL,
            yourRating,
            ratingState,
            friendRating,
            friendRatingState,
            topMovie
        } = this.props
        return (
            <div className='movie' >
                <div className='movie__poster-container'>
                    <img className='movie__poster' src={posterURL} alt='Movie Poster' />
                    <div className={friendRatingState
                        ? 'movie__friend-ranked movie__friend-ranked--active'
                        : 'movie__friend-ranked movie__friend-ranked--inactive'}>
                        <Stars
                            changeRating={this.changeRating}
                            yourRating={friendRating}
                            color={`#1fd01f`} />
                    </div>
                    <div className={ratingState
                        ? 'movie__ranked movie__ranked--active'
                        : 'movie__ranked movie__ranked--inactive'}>
                        <Stars
                            changeRating={this.changeRating}
                            yourRating={yourRating}
                            color={`#ffee10`} />
                        <p className={topMovie.imdbID === imdbID
                            ? 'movie__top-movie--active'
                            : 'movie__top-movie--inactive'}

                        >Top Pick!</p>
                    </div>
                </div>
                <div className='movie__text-container'>
                    <p className='movie__title' >{title}</p>
                    <p className='movie__year' >{year}</p>
                    <div className='movie__genres'>
                        <p className='movie__genre1'>{genre1}</p>
                        <p className='movie__genre2'>{genre2}</p>
                        <p className={genre3
                            ? 'movie__genre3 movie__genre3--active'
                            : 'movie__genre3 movie__genre3--inactive'}>{genre3}</p>
                    </div>
                    <p className='movie__overview' >{overview}</p>
                    <p className='movie__imdbRating' >IMDB Rating: {imdbRating}</p>
                    <div className='movie__streaming-links'>
                        <a className={streamingInfoNetflix
                            ? 'movie__streaming-info-netflix movie__streaming-info-netflix--active'
                            : 'movie__streaming-info-netflix movie__streaming-info-netflix--inactive'}
                            href={streamingInfoNetflix}>
                            <img className='movie__netflix-icon' src={netflixLogo} alt='netflix button' />
                        </a>
                        <a className={streamingInfoDisney
                            ? 'movie__streaming-info-disney movie__streaming-info-disney--active'
                            : 'movie__streaming-info-disney movie__streaming-info-disney--inactive'}
                            href={streamingInfoDisney}>
                            <img className='movie__disney-icon' src={disneyLogo} alt='Disney Button' />
                        </a>
                    </div>
                    <div className='movie__stars' >
                        <label>
                            <input
                                type="radio"
                                name='rating'
                                value={1}
                                onClick={this.changeRating}
                            />
                            <FaStar className='star' color={"1" <= yourRating ? "#ffc107" : "e4e5e9"} size={20} />
                        </label>
                        <label>
                            <input
                                type="radio"
                                name='rating'
                                value='2'
                                onClick={this.changeRating}
                            />
                            <FaStar className='star' color={2 <= yourRating ? "#ffc107" : "e4e5e9"} size={20} />
                        </label>
                        <label>
                            <input
                                type="radio"
                                name='rating'
                                value='3'
                                onClick={this.changeRating}
                            />
                            <FaStar className='star' color={3 <= yourRating ? "#ffc107" : "e4e5e9"} size={20} />
                        </label>
                        <label>
                            <input
                                type="radio"
                                name='rating'
                                value='4'
                                onClick={this.changeRating}
                            />
                            <FaStar className='star' color={4 <= yourRating ? "#ffc107" : "e4e5e9"} size={20} />
                        </label>
                        <label>
                            <input
                                type="radio"
                                name='rating'
                                value='5'
                                onClick={this.changeRating}
                            />
                            <FaStar className='star' color={5 <= yourRating ? "#ffc107" : "e4e5e9"} size={20} />
                        </label>
                    </div>
                </div >
            </div>
        )
    }
}

export default MovieCard