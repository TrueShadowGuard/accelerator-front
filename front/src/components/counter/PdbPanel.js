import FileUpload from "../FileUpload";
import readFileAsText from "../../utils/readFileAsText";
import parsePdb from "../../utils/pic/parsePdb";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel, LinearProgress,
  MenuItem,
  Select,
  Tooltip
} from "@mui/material";
import pic from "../../utils/pic";
import pentUnFold from "../../http/pent-un-fold";
import useAsync from "../../hooks/useAsync";
import {useRef, useState} from "react";
import GetResultButton from "../GetResultButton";

export default function PdbPanel() {

  const inputFileRef = useRef();

  const include1dRef = useRef();
  const include2dRef = useRef();
  const include3dRef = useRef();

  const {result, setResult, loading, execute} = useAsync(post);

  const [isFileValid, setIsFileValid] = useState(null);

  const [chains, setChains] = useState(null);

  const [selectedChain, setSelectedChain] = useState("");

  return (
    <Box sx={{width: "250px"}}>
      <FileUpload
        inputRef={inputFileRef}
        innerProps={{accept: ".pdb"}}
        onFileChange={async file => {
          const isValid = validateFile(file);
          if (isValid) {
            const pdb = await readFileAsText(file);
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

      <FormControlLabel control={<Checkbox inputRef={include1dRef} disabled={loading}/>} label="Include 1d result"/>
      <FormControlLabel control={<Checkbox inputRef={include2dRef} disabled={loading}/>} label="Include 2d result"/>
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
                    <GetResultButton type="submit"
                            variant="contained"
                            sx={{mr: "5px", width: "100%"}}
                            disabled={loading || !isFileValid}
                    >Get result</GetResultButton>
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
      {result && (
        <Box sx={{mt: 1}}>
          <>
            Your files are ready! <br/>
            Use links below to download them: <br/>
            { include1dRef.current.checked ? (<><a href={result["1d"]} download="1d.xlsx">1D</a><br/></>) : (<></>)}
            { include2dRef.current.checked ? (<><a href={result["2d"]} download="2d.xlsx">2D</a><br/></>) : (<></>)}
            { include3dRef.current.checked ? (<><a href={result["3d"]} download="3d.xlsx">3D</a><br/></>) : (<></>)}
            Links will be alive for 2 min
          </>
        </Box>
      )}
    </Box>
  )

  async function post(chains, selectedChain) {
    setResult(null);
    try {
      const include1d = include1dRef.current.checked;
      const include2d = include2dRef.current.checked;
      const include3d = include3dRef.current.checked;

      const picResult = include3d ? pic(chains[selectedChain]) : null;
      const response = await pentUnFold.post.pdb(inputFileRef.current.files[0], include1d, include2d, include3d, picResult, selectedChain);
      const baseUrl = window.location.hostname + 8080;
      return {
        "1d": baseUrl + "/chemistry/pent-un-fold/1d/" + response.data,
        "2d": baseUrl + "/chemistry/pent-un-fold/2d/" + response.data,
        "3d": baseUrl + "/chemistry/pent-un-fold/3d/" + response.data,
      }
    } catch (e) {
      console.error(e);
    }

  }

  function validateFile(file) {
    return !file ? null : file.name.endsWith('.pdb');
  }

  function clear() {
    inputFileRef.current.value = "";
    setResult(null);
    setChains(null);
    setSelectedChain(null);
  }
}
