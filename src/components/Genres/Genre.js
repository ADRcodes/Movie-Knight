import React from 'react';
import './Genre.scss'

const Genre = ({selectGenre, currentGenre}) => {
    return (
        <>
            <div className="dropdown">
                <button className='dropdown__button'>{currentGenre}</button>
                <div className="dropdown__content">
                    <p className="dropdown__option" onClick={selectGenre}>All Genres</p>
                    <p className="dropdown__option" onClick={selectGenre}>Action</p>
                    <p className="dropdown__option" onClick={selectGenre}>Adventure</p>
                    <p className="dropdown__option" onClick={selectGenre}>Animation</p>
                    <p className="dropdown__option" onClick={selectGenre}>Comedy</p>
                    <p className="dropdown__option" onClick={selectGenre}>Drama</p>
                    <p className="dropdown__option" onClick={selectGenre}>Fantasy</p>
                    <p className="dropdown__option" onClick={selectGenre}>Mystery</p>
                    <p className="dropdown__option" onClick={selectGenre}>Science Fiction</p>
                </div>
            </div>
        </>
    )
}

export default Genre