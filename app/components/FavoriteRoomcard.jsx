import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

const FavoriteRoomcard = () => {
  return (
    <Paper className="w-[300px] h-[300px] rounded-md soleil-shadow relative">
      <Image
        src="/wintana.jpeg"
        alt="imag"
        width={300}
        height={400}
        className="h-[200px] rounded-t-[10px]"
      />
      <div className="px-4 py-2">
        <h3>Kings room</h3>
        <p className="absolute top-2 right-2 bg-green-300 px-3 py-2 rounded-md">
          200$
        </p>
      </div>
    </Paper>
  );
};

export default FavoriteRoomcard;
