import React from 'react';
import FavoriteRoomcard from './FavoriteRoomcard';
import { Grid, Paper } from '@mui/material';
import Image from 'next/image';

const rooms = [
  { name: "King's Room", price: 100, image: "https://vibe.rw/wp-content/uploads/2023/06/22-12-20-apartment-for-rent-nyarutarama-kigalirwanda-5-1170x751.jpg", booked: false },
  { name: "Kids Room", price: 59, image: "https://vibe.rw/wp-content/uploads/2023/08/23-08-22-house-for-rent-kagugu-kigalirwanda-9-min-1170x750.jpg", booked: false },
  { name: "Kids Room", price: 59, image: "https://vibe.rw/wp-content/uploads/2023/08/23-08-22-house-for-rent-kagugu-kigalirwanda-9-min-1170x750.jpg", booked: false },
  { name: "Kids Room", price: 59, image: "https://vibe.rw/wp-content/uploads/2023/08/23-08-22-house-for-rent-kagugu-kigalirwanda-9-min-1170x750.jpg", booked: false },
  { name: "Kids Room", price: 59, image: "https://vibe.rw/wp-content/uploads/2023/08/23-08-22-house-for-rent-kagugu-kigalirwanda-9-min-1170x750.jpg", booked: false },
];

const FavoriteRoom = () => {
  return (
    <div className='max-w-[1224px] w-full mx-auto mb-[50px]'>
      <h2 className="text-[30px] font-bold py-5 ">Our favorite Rooms</h2>
      <Grid container spacing={1}>

      <FavoriteRoomcard room={rooms[1]}/>
      <FavoriteRoomcard room={rooms[2]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      <FavoriteRoomcard room={rooms[3]}/>
      </Grid>
    </div>
  );
};

export default FavoriteRoom;
