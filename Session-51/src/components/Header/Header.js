import React from "react";

import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

// import { Inbox } from "@mui/icons-material";

function Header() {
  return (
    <div style={{ padding: "50px" }}>
      <h2>Material UI</h2>
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed
        voluptatem natus ipsa, ratione similique error id nostrum repellendus
        tenetur accusantium, repellat sapiente dolores eius quibusdam aliquid.
        Molestias nobis voluptatem saepe placeat error voluptates, debitis vel
        quas, a velit, aperiam perferendis! Tempora saepe nisi exercitationem
        numquam dignissimos, maiores labore unde ab? Culpa eius, facere porro
        unde laboriosam molestias iusto enim! Quia, doloremque? Voluptatem
        pariatur aliquam, labore reprehenderit magni totam numquam aperiam eaque
        culpa sapiente veniam est impedit magnam adipisci dolores corrupti
        excepturi. Odit harum voluptas inventore repellat architecto molestiae
        sit quae beatae, quibusdam modi. Velit eius atque nihil id delectus.
      </p> */}
      <Button variant="contained" color="success" size="medium">
        Designed Button
      </Button>
      {/* <List>
        <ListItem>
          <ListItemText primary="Apple" />
          <List>
            <ListItem>
              <ListItemText primary="" />
            </ListItem>
          </List>
        </ListItem>
      </List> */}
      {/* <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                src="https://th.bing.com/th/id/OIP.SLXZeuIoCke-8XztFgrLYwHaE8?rs=1&pid=ImgDetMain"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="product" secondary="Jan 9, 2024" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                src="https://i.pinimg.com/originals/35/94/79/3594793ee69d85ab8e82e780537fa83e.jpg"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="product 2" secondary="Sep 19, 2023" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <img
                src="https://www.pixelo.net/wp-content/uploads/2018/07/Cosmetics-Preview1.jpg"
                width={50}
                height={50}
                style={{ borderRadius: "50%" }}
              />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="product 3" secondary="Jul 29, 2022" />
        </ListItem>
      </List> */}
      {/* <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>NAME</TableCell>

              <TableCell>CITY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Advait</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Advait</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Advait</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Advait</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>101</TableCell>
              <TableCell>Advait</TableCell>
              <TableCell>Mumbai</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer> */}
      <Accordion>
        <AccordionSummary
          expandIcon={
            <img
              src="https://th.bing.com/th/id/R.61784c37a2e26bd4afa05c2777d50907?rik=dRxz2txHboft%2bA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdown-arrow-png-down-icon-1600.png&ehk=AtCYQs09Cv%2b2Br%2fb7%2bOJShaXA8L4Iwcv6m%2fWOcZI4f0%3d&risl=&pid=ImgRaw&r=0"
              width={50}
              height={50}
            />
          }
        >
          Java
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eaque
          esse dolorem illum nam, dolores corrupti quae cum molestiae
          necessitatibus consectetur explicabo accusamus. Voluptates officia
          nostrum molestias quae magnam vel facilis pariatur at ducimus! Aut
          officiis illum sunt consequatur id temporibus ex blanditiis explicabo,
          iste perferendis ut, unde illo error dicta eius commodi qui pariatur
          eos. Doloribus dolore provident quod asperiores labore quisquam
          placeat fugiat laboriosam natus doloremque, voluptatem, odio officiis
          sed perferendis! Qui vero totam animi esse voluptate. Obcaecati sed
          ipsum quam cupiditate quasi dicta ipsa enim eos fugiat, dignissimos
          commodi sunt voluptates quis quo, repellendus voluptatem tenetur
          doloremque?
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={
            <img
              src="https://th.bing.com/th/id/R.61784c37a2e26bd4afa05c2777d50907?rik=dRxz2txHboft%2bA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fdown-arrow-png-down-icon-1600.png&ehk=AtCYQs09Cv%2b2Br%2fb7%2bOJShaXA8L4Iwcv6m%2fWOcZI4f0%3d&risl=&pid=ImgRaw&r=0"
              width={50}
              height={50}
            />
          }
        >
          React JS
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum eaque
          esse dolorem illum nam, dolores corrupti quae cum molestiae
          necessitatibus consectetur explicabo accusamus. Voluptates officia
          nostrum molestias quae magnam vel facilis pariatur at ducimus! Aut
          officiis illum sunt consequatur id temporibus ex blanditiis explicabo,
          iste perferendis ut, unde illo error dicta eius commodi qui pariatur
          eos. Doloribus dolore provident quod asperiores labore quisquam
          placeat fugiat laboriosam natus doloremque, voluptatem, odio officiis
          sed perferendis! Qui vero totam animi esse voluptate. Obcaecati sed
          ipsum quam cupiditate quasi dicta ipsa enim eos fugiat, dignissimos
          commodi sunt voluptates quis quo, repellendus voluptatem tenetur
          doloremque?
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Header;
