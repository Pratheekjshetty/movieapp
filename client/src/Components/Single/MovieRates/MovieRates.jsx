import React, { useState } from 'react'
import Titles from '../../Titles/Titles'
import {BsBookmarkStarFill} from 'react-icons/bs'
import { Message, Select } from '../../UsedInputs/UsedInputs'
import Stars from '../../Stars/Stars'

const MovieRates = ({movie}) => {
  const Ratings =[
    {
      title:"0 - Poor",
      value:0,
    },
    {
      title:"1 - Fair",
      value:1,
    },
    {
      title:"2 - Good",
      value:2,
    },
    {
      title:"3 - Very Good",
      value:3,
    },
    {
      title:"4 - Excellent",
      value:4,
    },
    {
      title:"5 - Masterpiece",
      value:5,
    },
  ]

  const [rating,setRating] = useState();

  return (
    <div className='my-12'>
      <Titles title="Reviews" Icon={BsBookmarkStarFill}/>
      <div className='mt-10 xl:grid flex-colo grid-cols-5 gap-12 bg-dry xs:p-10 py-10 px-2 sm:p-20 rounded'>
        {/* Write Review */}
        <div className='xl:col-span-2 w-full flex flex-col gap-8'>
          <h3 className='text-xl text-text font-semibold'>Review "{movie?.name}"</h3>
          <p className='text-sm leading-7 font-medium text-border'>
            Write a review for this movie. It will be posted on this page.
          </p>
          <div className='text-sm w-full'>
            <Select label="Select Rating" options={Ratings} onChange={(e)=> setRating(e.target.value)}/>
            <div className='flex mt-4 text-lg gap-2 text-star'>
              <Stars value={rating}/>
            </div>
          </div>
          {/* Message */}
          <Message label="Message" placeholder="Make it short and sweet......"/>
          {/* Submit */}
          <button className='bg-subMain text-white py-3 w-full flex-colo rounded'>Submin</button>
        </div>
      </div>
    </div>
  )
}

export default MovieRates