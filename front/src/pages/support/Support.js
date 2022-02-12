import {
  Box,
  Container,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import ComputerIcon from "@mui/icons-material/Computer";
import React from "react";
import classes from "./support.module.css";

const Support = () => {
  return (
    <Container sx={{mt: 1, pt: 3, pb: 3, color: "#505050"}}>
      <Box sx={{textAlign: "center"}}>
        The project was developed by a team that you can contact for relevant
        questions
      </Box>

      <hr/>

      <div className={classes.person}>
        <img
          className={classes.avatar}
          alt="Vladislav Khrustalev"
          src="https://www.bsmu.by/images/fakulteti/f_prof/news/2017/0505/4.jpg"
        />
        <div>
          <h1>Khrustalev Vladislav Viktorovich</h1>
          <Box sx={{pt: 1, fontSize: "12px"}}>
            Doctor habilitated Biology. Head of the Department of General
            Chemistry of the Belarusian State Medical University.
            <br/>
            Creator of the Pent Unfold algorithm. Creator of the algorithm for
            determining the secondary structure, used on the server, in case
            of failure of the main DSSP algorithm. You can contact us for any
            questions related to the logic of the algorithm using the contacts
            provided.
          </Box>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:vvkhrustalev@mail.ru">vvkhrustalev@mail.ru</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375296487795">+375 (29) 648-77-95</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon/>
              Skype:
            </ListItemIcon>
            <a className={classes.link} href="skype:live:vvkhrustalev">live:vvkhrustalev</a>
          </ListItemButton>
        </div>
      </div>

      <hr/>

      <div className={classes.person}>
        <div>
          <img
            className={classes.avatar}
            alt="user"
            src="https://st3.depositphotos.com/1003456/13246/i/600/depositphotos_132463446-stock-photo-front-face-portrait-avatar-office.jpg"
          />
        </div>
        <div>
          <h1>Kasko Tihon Evgenyevich</h1>
          <Box sx={{pt: 1, fontSize: "12px"}}>
            A graduate of the Belarusian State University with a bachelor's
            degree in human medicine. Industrial web development engineer.
            Co-creator of the internal algorithm for determining the secondary
            structure.
            <br/>
            You can contact the provided contacts for any technical issues
            related to the operation of the server.
          </Box>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:97kasko@gmail.com">97kasko@gmail.com</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375291027206">+375 (29) 102-72-06</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon/>
              Skype:
            </ListItemIcon>
            <a className={classes.link} href="skype:live:tihon_1997">live:tihon_1997</a>
          </ListItemButton>
        </div>
      </div>

      <hr/>

      <div className={classes.person}>
        <div>
          <img
            className={classes.avatar}
            alt="user"
            src="https://st3.depositphotos.com/1003456/13246/i/600/depositphotos_132463446-stock-photo-front-face-portrait-avatar-office.jpg"
          />
        </div>
        <div>
          <h1>Popkov Vadim Dmitrievich</h1>
          <Box sx={{pt: 1, fontSize: "12px"}}>
            Student of the Belarusian State Medical University, Faculty of
            Pharmacy. Front-end developer, participant of scientific works in
            chemistry.
            <br/>
            You can contact him for any questions related to styles and
            design, as well as determining the PIC result which is using by
            Pent Unfold algorithm in 3D files.
          </Box>
          <ListItemButton>
            <ListItemIcon>
              <EmailIcon/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:playvarian@gmail.com">playvarian@gmail.com</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <CallIcon/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375333930022">+375 (33) 393-00-22</a>
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <ComputerIcon/>
              Skype:
            </ListItemIcon>
            <a className={classes.link} href="skype:live:playvarian">live:playvarian</a>
          </ListItemButton>
        </div>
      </div>

    </Container>
  );
};

export default Support;
