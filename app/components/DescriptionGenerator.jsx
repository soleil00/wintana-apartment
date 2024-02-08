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
             
            </Stack>
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
          ) }
        </Stack>
      ) : id === 2 ? (
        <Stack>
          {selectedId === 0 ? (
  <Typography>This is bed 1, located in the big room. It is spacious and comfortable, perfect for a good night's rest.</Typography>
) : selectedId === 1 ? (
  <Typography>This is bed 2, also located in the big room. It offers cozy accommodation and is ideal for relaxation.</Typography>
) : selectedId === 2 ? (
  <Typography>This is washroom 1, attached to bed 1. It includes a toilet and a bathroom for the exclusive use of guests staying in bed 1.</Typography>
) : selectedId === 3 ? (
  <Typography>This is washroom 2, attached to bed 2. It features a toilet and a bathroom for the exclusive use of guests staying in bed 2.</Typography>
) : selectedId === 4 ? (
  <Typography>This is salon 1, a shared living area accessible to all guests staying in the apartment. It's a comfortable space to relax and socialize.</Typography>
) : selectedId === 5 ? (
  <Typography>This is salon 2, another shared living area available to all guests. It provides a cozy atmosphere for gatherings and leisure activities.</Typography>
) : selectedId === 6 ? (
  <Typography>This is kitchen 1, a communal kitchen area where guests can prepare meals and enjoy shared cooking experiences.</Typography>
) : (
  <Typography>This is kitchen 2, another communal kitchen area equipped for culinary activities and shared dining experiences.</Typography>
)}

        </Stack>
      ) : (
        <Stack>
          {selectedId === 0 ? (
                <Typography>Experience comfort in the first bedroom.
                  The bed is complemented by a convenient bedside table
                  equipped with drawers for your essentials</Typography>
          ) : selectedId === 1 ? (
                  <Typography>Unwind in the second bedroom featuring a comfortable single bed.
                    A sleek bedside table with drawers stands beside the bed,
                    offering storage space for your belongings.</Typography>
          ) : selectedId === 2 ? (
                    <Typography>Relax in the third bedroom furnished with a snug queen-sized bed.
                      A functional bedside table with drawers provides easy access to
                      your nighttime essentials.</Typography>
          ) : selectedId === 3 ? (
            <Typography>Convenience meets comfort in the first washroom, a well-appointed space where you can refresh and rejuvenate. This private enclave features a modern combination of bathroom and toilet facilities, providing all the essentials for your daily routine</Typography>
          ) : selectedId === 4 ? (
            <Typography>Welcome to the second washroom, designed for both functionality and style. Equipped with a contemporary combination of bathroom and toilet amenities, this space offers a tranquil retreat for your personal grooming needs</Typography>
          ) : selectedId === 5 ? (
            <Typography>Step into the third washroom, a haven of relaxation and comfort. With its sleek design and thoughtful amenities, including a combined bathroom and toilet setup, this private sanctuary ensures a refreshing experience every time</Typography>
          ) : selectedId === 6 ? (
            <Typography>Indulge in the shared kitchen and salon area, the heart of communal living in the house. This multifunctional space is ideal for cooking, dining, and socializing, offering modern appliances, ample storage, and comfortable seating for all residents to enjoy.</Typography>
          ) : selectedId === 7 ? (
            <Typography>Enjoy the breathtaking view from the salon, where large windows frame stunning vistas of the surrounding landscape. Natural light floods the space, creating a bright and inviting atmosphere. Relax on comfortable seating as you take in the cool scenery, making the salon the perfect spot to unwind and appreciate the beauty of the outdoors.</Typography>
          ) : (
            <Typography>salon 2</Typography>
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
