import { Room, RoomService } from "@mui/icons-material";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const cardStyles = {
  maxWidth: "100%",
};

const imageStyles = {
  height: 170,
};

const AccomodationRoomCard = ({ path, display, title, type }) => {
  return (
    <Grid item {...display}>
      <Link
        href={`${
          type === "commercial" ? "/floors/commercial" : "/floors"
        }/${title}`}
      >
        <Card style={cardStyles}>
          <CardMedia
            component="img"
            alt="Wintana"
            height="140"
            image={path}
            style={imageStyles}
          />
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              fontSize={"small"}
              fontWeight={"bold"}
            >
              {title}
            </Typography>

            {type !== "commercial" && (
              <Stack
                direction={"row"}
                spacing={1}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Stack
                  direction={"row"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  spacing={1}
                >
                  <BedroomParentIcon fontSize="medium" color="secondary" />
                  <Typography variant="body2">
                    3 full furnished rooms for various categories
                  </Typography>
                </Stack>
              </Stack>
            )}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default AccomodationRoomCard;
