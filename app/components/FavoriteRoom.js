import React from 'react'
import FavoriteRoomcard from './FavoriteRoomcard'

const rooms = [
    { name: "King's Room", price: 100, image: "https://vibe.rw/wp-content/uploads/2023/06/22-12-20-apartment-for-rent-nyarutarama-kigalirwanda-5-1170x751.jpg", booked: false },
    {name:"Honeymoon Room",price:75,image:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/113268751.jpg?k=7d6cec860da7246a275e5e104ca1a845377afdc708428212331f394f997da09f&o=",booked:false},
    {name:"Family Room",price:70,image:"https://media-cdn.tripadvisor.com/media/vr-splice-j/0c/00/ec/28.jpg",booked:false},
    {name:"Kids Room",price:59,image:"https://vibe.rw/wp-content/uploads/2023/08/23-08-22-house-for-rent-kagugu-kigalirwanda-9-min-1170x750.jpg",booked:false}]

const FavoriteRoom = () => {
  return (
      <div className='max-w-[1224px] w-full mx-auto mb-[50px]'>
          <FavoriteRoomcard/>
    </div>
  )
}

export default FavoriteRoom