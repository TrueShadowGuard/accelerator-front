import React, {useRef, useState} from 'react';
import {Box, Button, Checkbox, Container, FormControlLabel, LinearProgress, Tooltip} from "@mui/material";
import FileUpload from "../components/FileUpload";
import pentUnFold from "../http/pent-un-fold";
import useAsync from "../hooks/useAsync";
import pic from "../utils/pic";

const PentUnfold = () => {

  const inputFileRef = useRef();
  const include3dRef = useRef();

  const {result, setResult, loading, execute} = useAsync(post);

  const [isFileValid, setIsFileValid] = useState(null);

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <Box sx={{width: "250px"}}>
        <FileUpload
          inputRef={inputFileRef}
          innerProps={{accept: ".pdb"}}
          onFileChange={file => {
            const isValid = validateFile(file);
            setIsFileValid(isValid);
          }}
        />
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
            {
              isFileValid ?
                <Button type="submit"
                        variant="contained"
                        onClick={execute}
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
    try {
      const include3d = include3dRef.current.checked;
      const fileText = await new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.readAsText(inputFileRef.current.files[0]);
        fr.onloadend = e => {
          resolve(fr.result);
        }
      });
      const picResult = pic(fileText);
      const response = await pentUnFold.post(inputFileRef.current.files[0], include3d, picResult);
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
  }

  function validateFile(file) {
    return !file ? null : file.name.endsWith('.pdb');
  }
}

export default PentUnfold;
