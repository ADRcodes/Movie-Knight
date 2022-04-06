import React from 'react'
import { FaStar } from 'react-icons/fa'

const Stars = ({changeRating, yourRating, color}) => {
    return (
        <div className='movie__stars' >
            <label>
                <input
                    type="radio"
                    name='rating'
                    value={1}
                    onClick={changeRating}
                />
                <FaStar className='star' color={"1" <= yourRating ? color : "e4e5e9"} size={20} />
            </label>
            <label>
                <input
                    type="radio"
                    name='rating'
                    value='2'
                    onClick={changeRating}
                />
                <FaStar className='star' color={2 <= yourRating ? color : "e4e5e9"} size={20} />
            </label>
            <label>
                <input
                    type="radio"
                    name='rating'
                    value='3'
                    onClick={changeRating}
                />
                <FaStar className='star' color={3 <= yourRating ? color : "e4e5e9"} size={20} />
            </label>
            <label>
                <input
                    type="radio"
                    name='rating'
                    value='4'
                    onClick={changeRating}
                />
                <FaStar className='star' color={4 <= yourRating ? color : "e4e5e9"} size={20} />
            </label>
            <label>
                <input
                    type="radio"
                    name='rating'
                    value='5'
                    onClick={changeRating}
                />
                <FaStar className='star' color={5 <= yourRating ? color : "e4e5e9"} size={20} />
            </label>
        </div>
    )
}

export default Stars