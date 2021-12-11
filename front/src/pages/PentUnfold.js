import React, {useState} from 'react';
import TabPanel from "../components/TabPanel";
import PdbPanel from "../components/counter/PdbPanel";
import AaSequencePanel from "../components/counter/AaSequencePanel";
import {Container, Tabs, Tab} from "@mui/material";

const PentUnfold = () => {

  const [selectedTab, setSelectedTab] = useState('pdb');

  return (
    <Container sx={{pb: 10, mt: 1}}>
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
