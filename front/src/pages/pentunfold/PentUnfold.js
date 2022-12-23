import React, {useState} from "react";
import TabPanel from "../../components/TabPanel";
import PdbPanel from "./components/PdbPanel";
import AaSequencePanel from "./components/AaSequencePanel";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Grid,
  Tab,
  Tabs
} from "@mui/material";
import aminoacids from "../../pictures/aminoacids.png";
import ussa from "../../pictures/ussa.png";
import ManualPanel from "./components/ManualPanel";

const PentUnfold = () => {
  const [selectedTab, setSelectedTab] = useState("pdb");

  return (

<Grid container>
  <Grid sx={{ mt: 9, pl: 4}} item xs={1.4}>
    <Card sx={{ maxWidth: 150}}>
      <CardMedia
          sx={{ height: 130 }}
          image={ussa}
      />
      <Box sx={{ textAlign: "center"}}>
        <Button size="large" href="/ussa">TO USSA</Button>
      </Box>
    </Card>
    <Card sx={{ mt: 3, maxWidth: 150 }}>
      <CardMedia
          sx={{ height: 130 }}
          image={aminoacids}
      />
      <Box sx={{ textAlign: "center"}}>
        <Button size="large" target="_blank" href="https://link.springer.com/article/10.1007/s00726-022-03153-5">To Publication</Button>
      </Box>
    </Card>
    {/*<div>*/}
      {/*<script async*/}
      {/*        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8189322548974707"></script>*/}
    {/*</div>*/}
  </Grid>
  <Grid item xs={10.6} sx={{pr:10}}>
    {/*<Grid item xs={12} sx={{ml:13, pr:10}}>*/}
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
