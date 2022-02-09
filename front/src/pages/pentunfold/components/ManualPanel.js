import {
    Accordion, AccordionDetails, AccordionSummary,
    Box, styled, Table, TableBody, TableContainer, TableHead, TableRow,
} from "@mui/material";
import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#496AC2",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const baseUrl = "http://" + window.location.hostname + ":8080";
const manualLink = baseUrl + "/chemistry/pent-un-fold/manual"

export default function ManualPanel() {

    return (
        <Box sx={{ pt: 1, maxWidth:'900px'}}>
            <Box sx={{ pb: 1, pt:2, textAlign:"center", color:"#496AC2", fontWeight:"bold"}}>
                USER MANUAL for the PentUnFOLD algorithm
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                    <Typography sx={{color:"#525252"}}>PDB Prediction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>1.</b> To start the prediction, you have to upload your PDB file into the area in the middle of the screen, or click the icon on the “file.pdb” input field and select your file from a folder, and click on the button “open”.
                        <br/><b>2.</b> In the drop-down menu you have to choose a chain from the pdb file. Automatically the first chain (usually Chain A) from the pdb file will be selected for predictions.
                        <br/><b>3.</b> Select checkbox with the required version of the PentUnFOLD algorithm (“1D”, “2D”, or “3D”) for predictions. Actually, you may select three of them simultaneously.
                        <br/><b>4.</b> Turn on the switch if you want to get the result from DSSP server according to the name of the pdb file (the name must be the same as in Protein Data Bank).
                        <br/><b>5.</b> Click on the button “Get result”.
                        <br/><b>6.</b> Download the results of prediction in xlsx format.
                        <br/><b>7.</b> Open the downloaded files with MS Excel or Libre Office Calc.
                        <br/><b>8.</b> Press “Ctrl+Alt+F9” (for MS Excel) or “Ctrl+Shift+F9” (for Libre Office Calc) in case if those spreadsheets do not recalculate all the cells automatically.
                        <br/><b>9.</b> See the result of prediction.
                        <br/><b>10.</b> For “2D” spreadsheet you may replace amino acids and change secondary structure (in the columns “User input”). Do not forget that recalculation may take some time.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>AMINO ACID SEQUENCE Prediction</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>1.</b> To start the process, you need to switch to the “AMINO ACID SEQUENCE”.
                        <br/><b>2.</b> Paste amino acid sequence in the window. Please, DO NOT paste any other symbols, such as FASTA heading.
                        <br/><b>3.</b> Click on the button “Get result”.
                        <br/><b>4.</b> Download the results of prediction in xlsx format.
                        <br/><b>5.</b> Open the downloaded files with MS Excel or Libre Office Calc.
                        <br/><b>6.</b> Press “Ctrl+Alt+F9” (for MS Excel) or “Ctrl+Shift+F9” (for Libre Office Calc) in case if those spreadsheets do not recalculate all the cells automatically.
                        <br/><b>7.</b> See the result of prediction.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box sx={{ pb: 1, pt:4, textAlign:"center", color:"#496AC2", fontWeight:"bold"}}>
                Getting initial data
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>Secondary structure determination</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>1.</b> Our server sends the pdb file to the <a href="https://www3.cmbi.umcn.nl/xssp/">DSSP</a> server and receives its results.
                        <br/><b>2.</b> DSSP server may fail with pdb file processing. So, you have an option to try to receive it via the name of the pdb file (PDB ID). In this case, you need to turn on the switch.
                        <br/><b>3.</b> In case if DSSP server doesn’t work, our own script will determine secondary structure of the protein.
                        <br/><b>4.</b> The principle of our own script is exactly the same as the one for DSSP in terms of helices and beta strands finding. The only difference is in the way to estimate positions of hydrogen atoms. That is why minimal differences in lengths of alpha helices and beta strands are possible.
                        <br/><b>5.</b> In “1D” version of the PentUnFOLD algorithm secondary structure is predicted from the amino acid sequence.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>3D contacts counting</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <b>1.</b> Our script follows the principles of the <a href="http://pic.mbu.iisc.ernet.in/">PIC</a> and finds the same types of intraprotein contacts.
                        <br/><b>2.</b> Minor differences with PIC server may appear in cation-pi and ionic contacts, since our script calculates distances from Nitrogen atoms to centroids of aromatic residues and Oxygen atoms of carboxylic groups, respectively.
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box sx={{ pb: 1, pt:4, textAlign:"center", color:"#496AC2", fontWeight:"bold"}}>
                Interpretation of the predictions
            </Box>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>For “1D” spreadsheets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{width:"100px"}}>Designation</StyledTableCell>
                                        <StyledTableCell align="center">Signification</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>№</b></StyledTableCell>
                                        <StyledTableCell align="left">Amino acid residue number</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>AA</b></StyledTableCell>
                                        <StyledTableCell align="left">The name of amino acid residue (in one-letter code)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>HELIX</b></StyledTableCell>
                                        <StyledTableCell align="left">stability of predicted alpha helices: “HS” is a stable alpha helix; “HN” is a nonstable alpha helix (prone to turn into random coil)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>SHEET</b></StyledTableCell>
                                        <StyledTableCell align="left">Stability of predicted beta strands: “ES” is a stable beta strand; “EN” is a nonstable beta strand (prone to turn into random coil)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>COIL</b></StyledTableCell>
                                        <StyledTableCell align="left">Stability of predicted random coils: “C” is a stable random coil; “CE” is a nonstable random coil (prone to turn into beta strand); “CH” is a nonstable random coil (prone to turn into alpha helix)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Disorder</b></StyledTableCell>
                                        <StyledTableCell align="left">shows by “D” residues that are prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>For “2D” spreadsheets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{width:"100px"}}>Designation</StyledTableCell>
                                        <StyledTableCell align="center">Signification</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>№</b></StyledTableCell>
                                        <StyledTableCell align="left">Amino acid residue number</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>AA</b></StyledTableCell>
                                        <StyledTableCell align="left">The name of amino acid residue (in one-letter code)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>User input</b></StyledTableCell>
                                        <StyledTableCell align="left">Type a name of amino acid residue (in one-letter code) in a cell in this column, and it will be taken into calculations</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>SS</b></StyledTableCell>
                                        <StyledTableCell align="left">Secondary structure according to the DSSP: “H” is alpha helix; “E” is beta strand; “C” is random coil (neither “H”, nor “E”)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>User input</b></StyledTableCell>
                                        <StyledTableCell align="left">Type a name of secondary structure element (in one-letter code) in a cell in this column, and it will be taken into calculations</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>HELIX</b></StyledTableCell>
                                        <StyledTableCell align="left">stability of predicted alpha helices: “HS” is a stable alpha helix; “HN” is a nonstable alpha helix (prone to turn into random coil)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>SHEET</b></StyledTableCell>
                                        <StyledTableCell align="left">Stability of predicted beta strands: “ES” is a stable beta strand; “EN” is a nonstable beta strand (prone to turn into random coil)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Disordered coil</b></StyledTableCell>
                                        <StyledTableCell align="left">Stability of random coils: “C” is a stable random coil; “CE” is a nonstable random coil (prone to turn into beta strand); “CH” is a nonstable random coil (prone to turn into alpha helix); “D” is a disordered coil (prone to turn into the disordered state)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Disordered helix</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues in alpha helices that are prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Disordered sheet</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues in beta strands that are prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Completely disordered coil</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues in random coils that are especially prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Completely disordered helix</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues in alpha helices that are especially prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Completely disordered sheet</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues in beta strands that are especially prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header">
                    <Typography  sx={{color:"#525252"}}>For “3D” spreadsheets</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <TableContainer component={Paper}>
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell sx={{width:"100px"}}>Designation</StyledTableCell>
                                        <StyledTableCell align="center">Signification</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>№</b></StyledTableCell>
                                        <StyledTableCell align="left">Amino acid residue number</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>AA</b></StyledTableCell>
                                        <StyledTableCell align="left">The name of amino acid residue (in one-letter code)</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>SS</b></StyledTableCell>
                                        <StyledTableCell align="left">Secondary structure according to the DSSP: “H” is alpha helix; “E” is beta strand; “G” is 3/10 helix; “I” is π helix; “B” is beta bridge; “T” is turn; “S” is bend. Our own script finds just: “H”; “G”; “I”; “B”; and “E”.</StyledTableCell>
                                    </StyledTableRow>
                                    <StyledTableRow key='test'>
                                        <StyledTableCell component="th" scope="row"><b>Disorder</b></StyledTableCell>
                                        <StyledTableCell align="left">Shows by “D” residues that are prone to turn into the disordered state, and by “O” residues that are not prone to turn into the disordered state</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Box sx={{ pb: 1, pt:2}}>
                <a href={manualLink}> <DownloadForOfflineIcon/> Download manual.pdf</a>
            </Box>



        </Box>
    );
}
