import React, {useState} from 'react';
import {Box, Container} from "@mui/material";
import FileUploadUtil from "../../components/FileUploadUtil";
import PrimaryButton from "../../components/PrimaryButton";
import hydrogenAccuracy from "../../http/hydrogen-accuracy";
import HydrogenDataTable from "../../components/HydrogenDataTable";
import HydrogenDataChart from "../../components/HydrogenDataChart";
import Chain from "../../components/Chain";
import readFileAsText from "../../utils/readFileAsText";
import parsePdb from "../../utils/pic/parsePdb";

const HydrogenPosition = () => {

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
    console.log("Chain");
    console.log(state.chain);
    const response = await hydrogenAccuracy.post.hydrogen(state.file, state.chain);
    setData({
      allList: response.data.allList,
      composition: response.data.composition,
      averageNHDistance:  response.data.averageNHDistance,
      averageHHDistance: response.data.averageHHDistance,
    });
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