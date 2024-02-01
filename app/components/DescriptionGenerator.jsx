import { Stack, Typography } from "@mui/material";
import React from "react";

const DescriptionGenerator = ({ selectedId, id, setSelectedId }) => {
  const room = id === 1 ? "Room One" : id === 2 ? "Room two" : "Room three";
  return (
    <Stack>
      {id === 1 ? (
        <Stack>
          {selectedId === 0 ? (
            <Typography>
              Welcome to a bathroom oasis that seamlessly blends functionality
              with modern design. This sophisticated space features a unique
              2-in-1 bathroom and toilet, meticulously crafted for single-person
              usage.
            </Typography>
          ) : selectedId === 1 ? (
            <Typography>
              Step into a culinary sanctuary with our modern kitchen, where
              innovation meets sophistication in a harmonious blend of style and
              functionality.
            </Typography>
          ) : selectedId === 2 ? (
            <Stack>
              <Typography sx={{ paddingBottom: "20px" }}>
                Step into the epitome of contemporary luxury in our fully
                furnished modern salon. The sleek typography sets the tone for a
                meticulously curated space, featuring a modern TV, plush chairs,
                and an elegant dining area. This thoughtfully designed ambiance
                seamlessly combines chic furnishings and ambient lighting to
                create an inviting atmosphere for relaxation and entertainment.
                Whether you are unwinding in the plush chairs or enjoying a meal
                in the sophisticated dining space, this salon is a celebration
                of modern living, where style and comfort converge in every
                corner.
              </Typography>
              <p
                className=" italic text-blue-500"
                onClick={() => setSelectedId((prev) => prev + 1)}
              >
                See next Img
              </p>
            </Stack>
          ) : selectedId === 3 ? (
            <Typography>
              Every detail, from stylish furnishings to modern technology
              integration, contributes to a visual delight. This salon is a
              refined escape, providing a luxurious backdrop for every aspect of
              modern living. Welcome to a fully equipped sanctuary where each
              moment is an opportunity to experience the perfect balance of
              contemporary design and ultimate comfort.
            </Typography>
          ) : (
            <Typography>
              Experience ultimate comfort with our specially designed bed,
              perfect for a single person. Marked by elegant typography, this
              bed is crafted with precision, ensuring a sanctuary of relaxation.
              From the supportive mattress to the soft linens, every detail
              contributes to a redefined sense of restfulness. Welcome to a
              haven where design meets comfort, offering not just a piece of
              furniture but a promise of unparalleled relaxation for those
              seeking a peaceful retreat.
            </Typography>
          )}
        </Stack>
      ) : id === 2 ? (
        <Stack>
          {selectedId === 0 ? (
            <Typography>bed 1</Typography>
          ) : selectedId === 1 ? (
            <Typography>bed 2</Typography>
          ) : selectedId === 2 ? (
            <Typography>toilet 1</Typography>
          ) : selectedId === 3 ? (
            <Typography>toilet 2</Typography>
          ) : selectedId === 4 ? (
            <Typography>salon 1</Typography>
          ) : selectedId === 5 ? (
            <Typography>salon 2</Typography>
          ) : (
            <Typography>kitchen</Typography>
          )}
        </Stack>
      ) : (
        <Stack>
          {selectedId === 1 ? (
            <Typography>bed 1</Typography>
          ) : selectedId === 2 ? (
            <Typography>bed 2</Typography>
          ) : selectedId === 3 ? (
            <Typography>bathroom 1</Typography>
          ) : selectedId === 4 ? (
            <Typography>bathroom 2</Typography>
          ) : selectedId === 5 ? (
            <Typography>bathroom 3</Typography>
          ) : selectedId === 6 ? (
            <Typography>Kitchen</Typography>
          ) : selectedId === 7 ? (
            <Typography>salon 1</Typography>
          ) : selectedId === 8 ? (
            <Typography>salon 2</Typography>
          ) : (
            <Typography>extra</Typography>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default DescriptionGenerator;

// const thumbImages1 = [
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/kitchen3.jpg", id: 5 },
//   { path: "/salon3.jpeg", id: 4 },
//   { path: "/salon3.jpeg", id: 4 },
//   { path: "/bed4.jpeg", id: 2 },
// ];
// const thumbImages2 = [
//   { path: "/bed4.jpeg", id: 2 },
//   { path: "/bed5.webp", id: 2 },
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/salon3.jpeg", id: 4 },
//   { path: "/salon3.jpeg", id: 4 },
//   { path: "/kitchen3.jpg", id: 5 },
// ];
// const thumbImages3 = [
//   { path: "/bed4.jpeg", id: 2 },
//   { path: "/bed5.webp", id: 2 },
//   { path: "/bed4.jpeg", id: 2 },
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/bathroom.jpeg", id: 1 },
//   { path: "/kitchen3.jpg", id: 5 },
//   { path: "/salon3.jpeg", id: 4 },
//   { path: "/salon3.jpeg", id: 4 },
// ];
