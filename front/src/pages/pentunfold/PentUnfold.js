import React, {useState} from 'react';
import TabPanel from "../../components/TabPanel";
import PdbPanel from "./components/PdbPanel";
import AaSequencePanel from "./components/AaSequencePanel";
import {Container, Tabs, Tab, ButtonGroup, Button} from "@mui/material";

const PentUnfold = () => {

  const [selectedTab, setSelectedTab] = useState('pdb');

  return (
    <Container sx={{mt: 1}}>
      <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)}>
        <Tab label="PDB" value="pdb"/>
        <Tab label="Amino acid sequence" value="sequence"/>
      </Tabs>
      <TabPanel value="pdb" selected={selectedTab}>
        <PdbPanel />
      </TabPanel>
      <TabPanel selected={selectedTab} value="sequence">
        <AaSequencePanel />
      </TabPanel>
    </Container>
  );
}

export default PentUnfold;
