import React, {useRef, useState} from 'react';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  InputLabel,
  LinearProgress, MenuItem, Select,
  Tooltip
} from "@mui/material";
import FileUpload from "../components/FileUpload";
import pentUnFold from "../http/pent-un-fold";
import useAsync from "../hooks/useAsync";
import pic from "../utils/pic";
import parsePdb from "../utils/pic/parsePdb";

const PentUnfold = () => {

  const inputFileRef = useRef();
  const include3dRef = useRef();

  const {result, setResult, loading, execute} = useAsync(post);

  const [isFileValid, setIsFileValid] = useState(null);

  const [chains, setChains] = useState(null);

  const [selectedChain, setSelectedChain] = useState("");

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <Box sx={{width: "250px"}}>
        <FileUpload
          inputRef={inputFileRef}
          innerProps={{accept: ".pdb"}}
          onFileChange={async file => {
            console.log('onfile change')
            const isValid = validateFile(file);
            if (isValid) {
              const pdb = await new Promise((resolve, reject) => {
                const fr = new FileReader();
                fr.readAsText(inputFileRef.current.files[0]);
                fr.onloadend = e => {
                  resolve(fr.result);
                }
              });
              const chains = parsePdb(pdb);
              window.chains = chains;
              setChains(chains);
              setSelectedChain(Object.keys(chains)[0]);
            } else {
              setChains(null);
              setSelectedChain("");
            }
            setIsFileValid(isValid);
          }}
        />
        <br/>

        <FormControl sx={{mt: 2, minWidth: 1}}>
          <InputLabel sx={{
           background: "#fff",
            mt: "-4px",
            px: "4px"
          }}>Chain name</InputLabel>
          <Select
            variant={"outlined"}
            label="Chain name"
            value={selectedChain}
            onChange={e => setSelectedChain(e.target.value)}
            disabled={chains === null || loading}
          >
            {chains &&
            Object.keys(chains).map(chainName => (
              <MenuItem value={chainName} key={chainName}>{chainName}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel control={<Checkbox inputRef={include3dRef} disabled={loading}/>} label="Include 3d result"/>
        <Box sx={{mt: '20px'}}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            "& > *": {
              flexGrow: 1
            }
          }}>
            {
              isFileValid ?
                <Button type="submit"
                        variant="contained"
                        onClick={() => execute(chains, selectedChain)}
                        sx={{mr: "5px"}}
                        disabled={loading || !isFileValid}
                >Get result</Button> :

                <Tooltip title={isFileValid === null ? "Please select a file" : "Only .pdb files are supported"}>
                  <span>
                    <Button type="submit"
                            variant="contained"
                            onClick={execute}
                            sx={{mr: "5px", width: "100%"}}
                            disabled={loading || !isFileValid}
                    >Get result</Button>
                  </span>
                </Tooltip>
            }
            <Button
              type="reset"
              onClick={clear}
            >Clean out</Button>
          </Box>
        </Box>
        {loading && <LinearProgress sx={{mt: 1, display: "block"}}/>}
      </Box>

      {result && (
        <Box sx={{mt: 1}}>
          {result["3d"] ? (
            <>
              Your files are ready! <br/>
              Use links below to download them: <br/>
              <a href={result["2d"]} download="2d.xlsx">2D</a> <br/>
              <a href={result["3d"]} download="3d.xlsx"
                 target="_blank">3D</a> <br/>
              Links will be alive for 2 min
            </>
          ) : (
            <>
              Your file is ready! <br/>
              Use <a href={result["2d"]} download="2d.xlsx">2D</a> to download it. <br/>
              Links will be alive for 2 min
            </>
          )}
        </Box>
      )}
    </Container>
  );

  async function post(chains, selectedChain) {
    try {
      const include3d = include3dRef.current.checked;
      const picResult = include3d ? pic(chains[selectedChain]) : null;
      const response = await pentUnFold.post(inputFileRef.current.files[0], include3d, picResult, selectedChain);
      return include3d ?
        {
          "2d": "http://localhost:8080/chemistry/pent-un-fold/" + response.data,
          "3d": "http://localhost:8080/chemistry/pent-un-fold/3d/" + response.data,
        } :
        {
          "2d": "http://localhost:8080/chemistry/pent-un-fold/" + response.data,
        }
    } catch (e) {
      console.error(e);
    }

  }

  function clear() {
    inputFileRef.current.value = "";
    setResult(null);
    setChains(null);
    setSelectedChain(null);
  }

  function validateFile(file) {
    return !file ? null : file.name.endsWith('.pdb');
  }
}

export default PentUnfold;
