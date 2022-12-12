import React, { useState } from "react";
import TabPanel from "../../components/TabPanel";
import PdbPanel from "./components/PdbPanel";
import AaSequencePanel from "./components/AaSequencePanel";
import {Container, Tabs, Tab, Grid} from "@mui/material";
import ManualPanel from "./components/ManualPanel";

const PentUnfold = () => {
  const [selectedTab, setSelectedTab] = useState("pdb");

  return (

<Grid container>
  {/*<Grid sx={{ mt: 10, pl: 2}} item xs={1.4}>*/}
    <div>
      <script async
              src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8189322548974707"></script>
    </div>
  {/*</Grid>*/}
  {/*<Grid item xs={10.6} sx={{pr:10}}>*/}
    <Grid item xs={12} sx={{ml:13, pr:10}}>
      {/*<Container sx={{ mt: 1, ml:0}}>*/}
      <Container sx={{ mt: 1}}>
        <Tabs value={selectedTab} onChange={(e, v) => setSelectedTab(v)}>
          <Tab label="PDB" value="pdb" />
          <Tab label="Amino acid sequence" value="sequence" />
          <Tab label="Manual" value="manual" />
        </Tabs>
        <TabPanel value="pdb" selected={selectedTab}>
          <PdbPanel />
        </TabPanel>
        <TabPanel selected={selectedTab} value="sequence">
          <AaSequencePanel />
        </TabPanel>
        <TabPanel selected={selectedTab} value="manual">
          <ManualPanel />
        </TabPanel>
      </Container>
  </Grid>
</Grid>
  );
};

export default PentUnfold;
