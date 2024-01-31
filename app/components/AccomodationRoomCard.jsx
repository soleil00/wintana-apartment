import { Kitchen, Room, RoomService, Wc } from "@mui/icons-material";
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

const AccomodationRoomCard = ({
  path,
  display,
  title,
  type,
  beds,
  kitchen,
  salon,
  toilet,
  rooms,
  link,
}) => {
  return (
    <Grid item {...display}>
      <Link href={link}>
        <Card style={cardStyles}>
          <CardMedia
            component="img"
            alt="Wintana"
            height="140"
            image={path}
            style={imageStyles}
          />
          <CardContent sx={{ padding: `${beds} && 0` }}>
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
                {rooms && (
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
                )}

                {/* for bed existing */}
                {beds && (
                  <>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      // spacing={1}
                    >
                      <BedroomParentIcon fontSize="small" color="secondary" />
                      <Typography variant="body2">{beds}</Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      // spacing={1}
                    >
                      <Kitchen fontSize="small" color="secondary" />
                      <Typography variant="body2">{kitchen} </Typography>
                    </Stack>
                    <Stack
                      direction={"row"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      // spacing={1}
                    >
                      <Wc fontSize="small" color="secondary" />
                      <Typography variant="body2">{toilet}</Typography>
                    </Stack>
                  </>
                )}
              </Stack>
            )}
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default AccomodationRoomCard;
