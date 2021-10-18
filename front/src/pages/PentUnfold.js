import React, {useRef} from 'react';
import {Box, Button, Checkbox, Container, FormControlLabel, LinearProgress} from "@mui/material";
import FileUpload from "../components/FileUpload";
import pentUnFold from "../http/pent-un-fold";
import useAsync from "../hooks/useAsync";

const PentUnfold = () => {

  const inputFileRef = useRef();
  const include3dRef = useRef();

  const {result, setResult, loading, execute} = useAsync(post);

  console.log('hook', result, loading);

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <Box sx={{width: "250px"}}>
        <FileUpload inputRef={inputFileRef}/>
        <br/>
        <FormControlLabel control={<Checkbox inputRef={include3dRef} disabled={loading}/>} label="Include 3d result"/>
        <Box sx={{mt: '20px'}}>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            "& > *": {
              flexGrow: 1
            }
          }}>
            <Button type="submit"
                    variant="contained"
                    onClick={execute}
                    sx={{mr: "5px"}}
                    disabled={loading}
            >Get result</Button>
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
              Links will be alive for 2 hours
            </>
          ) : (
            <>
              Your file is ready! <br/>
              Use <a href={result["2d"]} download="2d.xlsx">2D</a> to download it. <br/>
              Link will be alive for 2 hours
            </>
          )}
        </Box>
      )}
    </Container>
  );

  async function post() {
    const include3d = include3dRef.current.checked;
    const response = await pentUnFold.post(inputFileRef.current.files[0], include3d);
    return include3d ?
      {
        "2d": "http://localhost:8080/chemistry/pent-un-fold/" + response.data,
        "3d": "http://localhost:8080/chemistry/pent-un-fold/3d/" + response.data,
      } :
      {
        "2d": "http://localhost:8080/chemistry/pent-un-fold/" + response.data,
      }
  }

  function clear() {
    inputFileRef.current.value = "";
    setResult(null);
  }
};

export default PentUnfold;
