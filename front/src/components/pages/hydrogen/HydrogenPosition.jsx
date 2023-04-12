import React, {useState} from 'react';
import {Box, Container, LinearProgress, FormControlLabel, Radio,  RadioGroup, FormControl, FormLabel} from "@mui/material";
import FileUploadUtil from "../../FileUploadUtil";
import PrimaryButton from "../../PrimaryButton";
import hydrogenAccuracy from "../../../http/hydrogen-accuracy";
import HydrogenDataTable from "../../HydrogenDataTable";
import HydrogenDataChart from "../../HydrogenDataChart";
import Chain from "../../Chain";
import readFileAsText from "../../../utils/readFileAsText";
import parsePdb from "../../../utils/pic/parsePdb";

const HydrogenPosition = () => {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    allList: [],
    composition: {},
    averageNHDistance: 0,
    averageHHDistance: 0,
  });
  const [state, setState] = useState( {
    file: null,
    chain: ""
  });

  const [ai, setAi] = useState(false);
  const [chains, setChains] =  useState(null);
  const [selectedChain, setSelectedChain] = useState("");

  const onFileChange = async event => {
    const selectedFile = event.target.files[0];
      if (!!selectedFile) {
        const pdb = await readFileAsText(selectedFile);
        const chains = parsePdb(pdb);
        window.chains = chains;
        setChains(chains);
        setSelectedChain(Object.keys(chains)[0]);
        updateState(selectedFile, Object.keys(chains)[0]);
      } else {
        setChains(null);
        setSelectedChain("");
      }
  };

  const updateState = (selectedFile, selectedChain) => {
    setState({
      file: selectedFile,
      chain: selectedChain,
    });
  }

  const onChainChange = chain => {
    setSelectedChain(chain);
    console.log("Logged");
    setState({
      file: state.file,
      chain: selectedChain,
    });
  };

  const onFileUpload = async () => {
    setLoading(true);
    console.log("Chain");
    console.log(state.chain);
    try {
      const response = await hydrogenAccuracy.post.hydrogen(state.file, state.chain, ai);
      setData({
        allList: response.data.allList,
        composition: response.data.composition,
        averageNHDistance:  response.data.averageNHDistance,
        averageHHDistance: response.data.averageHHDistance,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
      <Container sx={{mt: 1}} position="center">
        <Box sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingBottom: 2, paddingTop: 2}}>
          To run the algorithm for determining the accuracy of the position of hydrogen, <br/>
          select a file with the extension ".pdb" containing the coordinates of hydrogen in its description.
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <FileUploadUtil onFileChange={onFileChange} state={state}/>
          <Chain onChainChange={onChainChange} selectedChain={selectedChain} chains={chains} state={state}/>
          <PrimaryButton sendRequest={onFileUpload}>Get result</PrimaryButton>
        </Box>
        <Box sx={{ paddingTop: "40px", textAlign: "center", color: "#505050" }}>
          <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Choose an algorithm for adding Hydrogens to the main chain:</FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                    <Box sx={{ paddingLeft: "35%"}}>
                      <FormControlLabel value="female" control={<Radio onClick={() => setAi(true)} />} label="AI" />
                      <FormControlLabel value="male" control={<Radio onClick={() => setAi(false)}/>} label="Geometric" />
                    </Box>
                    </RadioGroup>
           </FormControl>
        </Box>
        {loading && <LinearProgress sx={{ mt: 1, mb: 0 }} />}
        <Box sx={{display: 'flex', justifyContent: 'left', paddingTop: 5}}>
          <HydrogenDataChart data={data}/>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: 5}}>
          <HydrogenDataTable data={data}/>
        </Box>
      </Container>
  );
};

export default HydrogenPosition;