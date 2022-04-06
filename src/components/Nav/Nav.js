import React from 'react'
import "./Nav.scss";
import netflixLogo from '../../assets/images/netflix-logo.png'
import disneyLogo from '../../assets/images/disney-logo.jpg'
import movieKnightLogo from '../../assets/images/MovieKnight-FullColour.svg'
import allison from '../../assets/images/allison.jpg'
import leah from '../../assets/images/leah.jpg'
import prime from '../../assets/images/prime-icon.png'
import Genre from '../Genres/Genre';

const Nav = ({
  netflix,
  disney,
  ranked,
  friend,
  searchMovies,
  selectGenre,
  currentGenre,
  onClickNetflix,
  onClickDisney,
  onClickRanked,
  onClickFriend
}) => {
  return (
    <>
      <section className='nav'>
        <div className='nav__container-left'>
          <img className='nav__website-title' src={movieKnightLogo} alt='Movie Knight Logo' />
          <Genre selectGenre={selectGenre} currentGenre={currentGenre} />
          <div
            onClick={onClickNetflix}
            className={netflix
              ? 'nav__img-button nav__img-button--inactive'
              : 'nav__img-button nav__img-button--active'}>
            <img src={netflixLogo} alt='netflix button' className='streaming-service-img' />
          </div>
          <div
            onClick={onClickDisney}
            className={disney
              ? 'nav__img-button nav__img-button--inactive'
              : 'nav__img-button nav__img-button--active'}>
            <img src={disneyLogo} alt='disney button' className='streaming-service-img' />
          </div>
          <div className='nav__img-button nav__img-button--inactive'>
            <img src={prime} alt='Amazon prime button' className='streaming-service-img' />
          </div>
        </div>

        <div className='nav__container-right'>
          <input type='text' onChange={searchMovies} placeholder='Search Movies' className='nav__search' />
          <div
            className={ranked
              ? 'nav__ranked-container nav__ranked-container--inactive'
              : 'nav__ranked-container nav__ranked-container--active'}>

            <div className={ranked
              ? 'nav__friend-container nav__friend-container--active'
              : 'nav__friend-container nav__friend-container--inactive'}>
              <div
                className='nav__img-button__friend nav__img-button__friend--inactive'>
                <img src={leah} alt='Friend button' className='friend-img' />
              </div>
              <div
                onClick={onClickFriend}
                className={friend
                  ? 'nav__img-button__friend nav__img-button__friend--active'
                  : 'nav__img-button__friend nav__img-button__friend--inactive'}>
                <img src={allison} alt='Friend button' className='friend-img' />
              </div>
            </div>
            <p
              onClick={onClickRanked}
              className={ranked
                ? 'nav__ranked-button nav__ranked-button--inactive'
                : 'nav__ranked-button nav__ranked-button--active'}>Ranked Movies</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav