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
              Our fully furnished bathroom includes everything you need for comfort, including a toilet.
            </Typography>
          ) : selectedId === 1 ? (
            <Typography>
               full furnished modern kitchen, where style meets functionality for an innovative cooking experience
            </Typography>
          ) : selectedId === 2 ? (
            <Stack>
              <Typography sx={{ paddingBottom: "20px" }}>
                    modern salon, complete with sleek sofas, a modern TV, and a
                    stylish dining area. It's a chic space designed for
                    relaxation and entertainment, where style and comfort
                    meet seamlessly.
              </Typography>
             
            </Stack>
          ) : selectedId ===3 ? (
             <Typography>
                    Experience ultimate comfort living room with smart bed,
                    complete with supportive mattress and soft linens.
                    Wardrobes are provided for convenient storage, ensuring a
                    sanctuary of relaxation and organization.
            </Typography>
          ) :(
             <Typography>
                    wardlob
            </Typography>
          )}
        </Stack>
      ) : id === 2 ? (
       <Stack>
  {selectedId === 0 ? (
    <Typography>
      This is first living room in 2 rooms apartment, It is spacious and comfortable,this room include single bed, wardrobe for storage  and other furnished materials.
    </Typography>
  ) : selectedId === 1 ? (
    <Typography>
      This is second living room. It offers cozy accommodation and is ideal for relaxationm including 1 bed alongside with wardrobe for stoarge too.
    </Typography>
  ) : selectedId === 2 ? (
    <Typography>
      This is full bathroom, attached to first living room and It includes a toilet. making it private for first living room.
    </Typography>
  ) : selectedId === 3 ? (
    <Typography>
      This is full bathroom, attached to second living room and It includes a toilet. making it private for second living room.
    </Typography>
  ) : selectedId === 4 ? (
    <Typography>
      This is salon including nice sofa and dinning area, a shared by all living rooms. It's a comfortable space to relax and socialize.
    </Typography>
  ) : selectedId === 5? (
    <Typography>
     Indulge in meals amidst sophistication with our stylish dining area, complemented by cozy sofas for ultimate comfort
    </Typography>
  ) :(
    <Typography>
     This is full and modern kitchen designed to enhance best cooking experience
    </Typography>
  ) }
</Stack>

      ) : (
        <Stack>
          {selectedId === 0 ? (
                <Typography>This is living big room , which located in apartment with 3 rooms, it contain with a big modern bed as you shown and
                  equipped with wardrobe for store and related components.
                </Typography>
          ) : selectedId === 1 ? (
                  <Typography>This is the second bedroom located in 3 room apartment, comfortable full single bed, and wardrobe to store.</Typography>
          ) : selectedId === 2 ? (
                    <Typography>This is the 3rd bedroom located in 3 room apartment, very nice full sleeping bed with, wardrobe to store.</Typography>
          ) : selectedId === 3 ? (
                      <Typography>This is VIP washroom for vip room, a well-appointed
                        space and private one  comfortable
                        and toilet facilities,
                        providing all the essentials that needed.</Typography>
          ) : selectedId === 4 ? (
                        <Typography>This is washroom for 2 nd room, very nice one and  private one  comfortable
                        and toilet facilities,
                        providing all the essentials that needed.
                        </Typography>
          ) : selectedId === 5 ? (
                          <Typography>This is washroom for 3 rd room, very nice one and  private one  comfortable
                        and toilet facilities,
                        providing all the essentials that needed.</Typography>
          ) : selectedId === 6 ? (
                            <Typography>Here we have  shared full modern kitchen , and dining room This multifunctional space is ideal for cooking, and you can alse se the 
                              dining near, and socializing, offering modern appliances, ample storage, and
                              comfortable seating for all residents to enjoy.</Typography>
          ) : selectedId === 7 ? (
                              <Typography>Enjoy the breathtaking view from the salon, where large
                                windows frame stunning vistas of the surrounding landscape.
                                Natural light and big space, with good and enough sofa , smart TV.</Typography>
          ) : (
            <Typography>Here we have  modern dining room in our apartment with 3 rooms , very good one and everyone can like it, thia ia shared with other rooms in this apartment 3, and is very enough to all. </Typography>
          )}
        </Stack>
      )}
    </Stack>
  );
};

export default DescriptionGenerator;

