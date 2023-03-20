import {Box, Container, LinearProgress, TextField} from "@mui/material";
import readFileAsText from "../../../utils/readFileAsText";
import parsePdb from "../../../utils/pic/parsePdb";
import FileUploadUtil from "../../FileUploadUtil";
import Chain from "../../Chain";
import PrimaryButton from "../../PrimaryButton";
import {useState} from "react";
import ussa from "../../../http/ussa";
import {Alert} from "@mui/lab";

const Ussa = () => {

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    ussaContent: []
  });
  const [state, setState] = useState( {
    file: null,
    chain: ""
  });

  const [chains, setChains] =  useState(null);
  const [sendRequest, setSendRequest] =  useState(false);
  const [selectedChain, setSelectedChain] = useState("");

  const onFileChange = async event => {
    setSendRequest(false);
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
    setState({
      file: state.file,
      chain: selectedChain,
    });
  };

  const onFileUpload = async () => {
    setLoading(true);
    setData({
      ussaContent: []
    });
    try {
      const response = await ussa.post.ussa(state.file, state.chain);
      setData({
        ussaContent: response.data
      });
    } finally {
      setSendRequest(true);
      setLoading(false);
    }
  };

  function getSpaces(length) {
    let spaces = "";
    for (let i = 0; i < (5 - length); i++) {
      spaces += " ";
    }
    return spaces;
  }

  function prepareData(ussaContent) {
    let ussaResult = "";

    for (let i = 2; i < ussaContent.length; i += 3) {
      let numberSize = ((i + 1) / 3);
      ussaResult = ussaResult + ((i + 1) / 3) + "."  + getSpaces(numberSize.toString().length) + "->     ";
      ussaResult = ussaResult + ussaContent[i] + getSpaces(ussaContent[i].length);
      ussaResult = ussaResult + ussaContent[i-1] + getSpaces(ussaContent[i-1].length);
      ussaResult = ussaResult + ussaContent[i-2] + '\n';
    }
    return ussaResult;
  }

  return (
      <Container sx={{mt: 1}} position="center">
        {sendRequest && (!data.ussaContent || data.ussaContent.length === 0) && (
            <Alert severity="error">
              Failed to process file and get results.
            </Alert>
        )}
        <Box
            sx={{
              width: 1,
              height: "180px",
              borderRadius: "5px",
              backgroundImage: `url(https://www.sciencealert.com/images/2022-08/processed/StrandOfmRNA_1024.jpg)`,
              backgroundSize: "cover",
              mt: 1,
            }} display="flex" justifyContent="center"
        >
          <Box
              sx={{
                width: 0.65,
                height: "180px",
                background:'white',
                border: "1px dashed",
                position: "center"
              }}
          >
            <Box sx={{display: 'flex', justifyContent: 'center', textAlign: 'center', paddingBottom: 4, paddingTop: 4}}>
              To run the USSA algorithm, select the ".pdb"  format file and then the<br/>
              appropriate chain for which you want to get the result of the secondary structure.
            </Box>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <FileUploadUtil onFileChange={onFileChange} state={state}/>
              <Chain onChainChange={onChainChange} selectedChain={selectedChain} chains={chains} state={state}/>
              <PrimaryButton sendRequest={onFileUpload}>Get result</PrimaryButton>
            </Box>
          </Box>
        </Box>
        {loading && <LinearProgress sx={{ mt: "2px"}} />}
        {data && data.ussaContent.length > 0 && (
            <Box sx={{ paddingTop: 1.5 }} display="flex" justifyContent="center">
              <TextField sx={{ width: "500px" }}
                  id="filled-helperText"
                  label="USSA"
                  multiline
                  rows={18}
                  defaultValue={prepareData(data.ussaContent)}
                  variant="filled"
              />
            </Box>
        )}
      </Container>
  );
}

export default Ussa;