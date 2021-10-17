import React, {useRef, useState} from 'react';
import {Box, Button, CircularProgress, Container, LinearProgress, TextField} from "@mui/material";
import FileUpload from "../components/FileUpload";
import pentUnFold from "../http/pent-un-fold";
import useAsync from "../hooks/useAsync";

const PentUnfold = () => {

  const inputFileRef = useRef();

  const {result, setResult, loading, execute} = useAsync(post);

  console.log('hook', result, loading);

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <Box sx={{width: "250px"}}>
        <FileUpload inputRef={inputFileRef}/>
        <br/>
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
          Your file is ready! <br/>
          If download didn't start you can use <a href={result} download="result.xlsx">{result}</a> to download it. <br/>
          Link will be alive for 2 hours
        </Box>
      )}
    </Container>
  );

  async function post() {
    // const response = await pentUnFold.post(inputFileRef.current.files[0]);
    const data = await new Promise((r) => {
      setTimeout(() => r("http://localhost:3000"), 2000)
    });
    const a = document.createElement('a');
    a.download = "result.xlsx";
    a.href = data;
    a.hidden = true;
    document.body.appendChild(a);
    a.click();
    a.outerHTML = "";
    return data;
  }

  function clear() {
    inputFileRef.current.value = "";
    setResult(null);
  }
};

export default PentUnfold;
