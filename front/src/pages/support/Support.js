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
    <Container sx={{mt: 1, pt: 3, pb: 3, color: "#505050", backgroundColor:"#F8F8F8"}}>
      <Box sx={{textAlign: "center"}}>
        ABOUT SERVER’S AUTHORS
      </Box>

      <hr/>

      <div className={classes.person}>
        <img
          className={classes.avatar}
          alt="Vladislav Khrustalev"
          src="https://www.bsmu.by/images/fakulteti/f_prof/news/2017/0505/4.jpg"
        />
        <div>
          <h5>Khrustalev Vladislav Victorovich</h5>
          <Box sx={{pt: 1, fontSize: "12px", pb:1}}>
            Doctor habilitated Biology. Head of the Department of General
            Chemistry of the Belarusian State Medical University.
            <br/>
            Creator of the Pent Unfold algorithm. You can contact for any
            questions related to the logic of the algorithm using the contacts
            provided.
          </Box>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <EmailIcon sx={{maxHeight:"15px"}}/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:vvkhrustalev@mail.ru">vvkhrustalev@mail.ru</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <CallIcon  sx={{maxHeight:"15px"}}/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375296487795">+375 (29) 648-77-95</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <ComputerIcon sx={{maxHeight:"15px"}}/>
              Skype:
            </ListItemIcon>
            <a className={classes.link} href="skype:live:vvkhrustalev">Vladislav Khrustalev</a>
          </ListItemButton>
        </div>
      </div>

      <hr/>

      <div className={classes.person}>
        <div>
          <img
              className={classes.avatar}
              alt="user"
              src="https://www.bsmu.by/images/persons/2019/poboenev.jpg"
          />
        </div>
        <div>
          <h5>Poboinev Victor Vitoldovich. MD</h5>
          <Box sx={{pt: 1, fontSize: "12px", pb:1}}>
            Assistant professor of the General Chemistry department of the Belarusian State
            Medical University.
            <br/>Developer of the concept, design, probability scales of the PentUnFOLD
            algorithm.
            <br/>Co-creator of the algorithm for the secondary structure determination,
            used by the server in case of failure of the DSSP algorithm.
          </Box>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <EmailIcon sx={{maxHeight:"15px"}}/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:dremozzew@mail.ru">dremozzew@mail.ru</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <CallIcon sx={{maxHeight:"15px"}}/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375296858986">+375 (29) 685-89-86 (Viber, WhatsAPP)</a>
          </ListItemButton>
        </div>
      </div>

      <hr/>

      <div className={classes.person}>
        <div>
          <img
              className={classes.avatar}
              alt="user"
              src="http://physiology.by/wp-content/uploads/2021/08/Khrustaleva.png"
          />
        </div>
        <div>
          <h5>Khrustaleva Tatyana Aleksandrovna. PhD</h5>
          <Box sx={{pt: 1, fontSize: "12px", pb:1}}>
            Senior researcher of the Institute of Physiology of the National Academy of Sciences of Belarus.
            <br/>Co-developer of the concept of the PentUnFOLD algorith. The author of the name of the algorithm.
          </Box>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <EmailIcon sx={{maxHeight:"15px"}}/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:tanissia.lir@gmail.com">tanissia.lir@gmail.com</a>
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
          <h5>Kasko Tihon Evgenyevich</h5>
          <Box sx={{pt: 1, fontSize: "12px", pb:1}}>
            A graduate of the Belarusian State University with a bachelor's
            degree in human medicine.
            <br/>Industrial software engineer.
            Creator of the algorithm for determining the secondary structure.
          </Box>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <EmailIcon sx={{maxHeight:"15px"}}/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:97kasko@gmail.com">97kasko@gmail.com</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <CallIcon sx={{maxHeight:"15px"}}/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375291027206">+375 (29) 102-72-06</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <ComputerIcon sx={{maxHeight:"15px"}}/>
              Skype:
            </ListItemIcon>
            <a className={classes.link} href="skype:live:8e4ea466d4f8aa6f">Tihon Kasko</a>
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
          <h5>Popkov Vadim Dmitrievich</h5>
          <Box sx={{pt: 1, fontSize: "12px", pb:1}}>
            Student of the Belarusian State Medical University, Faculty of
            Pharmacy. Front-end developer, participant of scientific works in
            chemistry.
            <br/>
            You can contact him for any questions related to styles and
            design, as well as determining the PIC result which is using by
            Pent Unfold algorithm in 3D files.
          </Box>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <EmailIcon sx={{maxHeight:"15px"}}/>
              Email:
            </ListItemIcon>
            <a className={classes.link} href="mailto:playvarian@gmail.com">playvarian@gmail.com</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <CallIcon sx={{maxHeight:"15px"}}/>
              Phone:
            </ListItemIcon>
            <a className={classes.link} href="tel:375333930022">+375 (33) 393-00-22</a>
          </ListItemButton>
          <ListItemButton sx={{maxHeight:"25px", fontSize:"12px"}}>
            <ListItemIcon>
              <ComputerIcon sx={{maxHeight:"15px"}}/>
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
