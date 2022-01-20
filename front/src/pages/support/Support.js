import React, {useState} from "react";
import {
    Avatar,
    Box,
    Button,
    Checkbox,
    Container,
    Divider,
    FormControlLabel,
    Grid,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Tab,
    Tabs,
} from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import ComputerIcon from '@mui/icons-material/Computer';

const Support = () => {

    return (
        <Container sx={{mt: 1}}>
            <Box sx={{pt:3, color:"#505050"}}>
                <Box sx={{textAlign:"center"}}>
                    The project was developed by a team that you can contact for relevant questions
                </Box>
                <hr/>
                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://www.bsmu.by/images/fakulteti/f_prof/news/2017/0505/4.jpg"
                            sx={{ width: 80, height: 80}}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <h5>Khrustalev Vladislav Viktorovich</h5>
                        <Box sx={{pt:1, fontSize:"12px"}}>
                            Doctor habilitated Biology. Head of the Department of General Chemistry of the Belarusian State Medical University.
                            <br/>
                            Creator of the Pent Unfold algorithm. Creator of the algorithm for determining the secondary structure, used on the server, in case of failure of the main DSSP algorithm.
                            You can contact us for any questions related to the logic of the algorithm using the contacts provided.
                        </Box>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon/>
                                Email:
                            </ListItemIcon>
                            <ListItemText sx={{pl:3}}primary="vvkhrustalev@mail.ru" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <CallIcon />
                                Phone:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="+375 (29) 648-77-95" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ComputerIcon />
                                Skype:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="live:vvkhrustalev" />
                        </ListItemButton>
                    </Grid>
                </Grid>
                <hr/>
                <Grid container spacing={2} sx={{pt:2}}>
                    <Grid item xs={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://st3.depositphotos.com/1003456/13246/i/600/depositphotos_132463446-stock-photo-front-face-portrait-avatar-office.jpg"
                            sx={{ width: 80, height: 80}}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <h5>Kasko Tihon Evgenyevich</h5>
                        <Box sx={{pt:1, fontSize:"12px"}}>
                            Doctor habilitated Biology. Head of the Department of General Chemistry of the Belarusian State Medical University.
                            <br/>
                            Creator of the Pent Unfold algorithm. You can contact us for any questions related to the logic of the algorithm using the contacts provided.
                        </Box>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon/>
                                Email:
                            </ListItemIcon>
                            <ListItemText sx={{pl:3}}primary="97kasko@gmail.com" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <CallIcon />
                                Phone:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="+375 (29) 102-72-06" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ComputerIcon />
                                Skype:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="live:tihon_1997" />
                        </ListItemButton>
                    </Grid>
                </Grid>
                <hr/>
                <Grid container spacing={2} sx={{pt:2}}>
                    <Grid item xs={1}>
                        <Avatar
                            alt="Remy Sharp"
                            src="https://st3.depositphotos.com/1003456/13246/i/600/depositphotos_132463446-stock-photo-front-face-portrait-avatar-office.jpg"
                            sx={{ width: 80, height: 80}}
                        />
                    </Grid>
                    <Grid item xs={9}>
                        <h5>Popkov Vadim Dmitrievich</h5>
                        <Box sx={{pt:1, fontSize:"12px"}}>
                            Student of the Belarusian State Medical University, Faculty of Pharmacy. Front-end developer, participant of scientific works in chemistry.
                            <br/>
                            You can contact him for any questions related to styles and design, as well as determining the PIC result which is using by Pent Unfold algorithm in 3D files.
                        </Box>
                        <ListItemButton>
                            <ListItemIcon>
                                <EmailIcon/>
                                Email:
                            </ListItemIcon>
                            <ListItemText sx={{pl:3}}primary="playvarian@gmail.com" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <CallIcon />
                                Phone:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="+375 (33) 393-00-22" />
                        </ListItemButton>
                        <ListItemButton>
                            <ListItemIcon>
                                <ComputerIcon />
                                Skype:
                            </ListItemIcon>
                            <ListItemText sx={{pl:2}} primary="live:playvarian" />
                        </ListItemButton>
                    </Grid>
                </Grid>



            </Box>
        </Container>

    );
}

export default Support;