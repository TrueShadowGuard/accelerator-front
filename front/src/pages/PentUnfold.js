import React, {useRef, useState} from 'react';
import {Box, Button, Container} from "@mui/material";
import FileUpload from "../components/FileUpload";
import pentUnFold from "../http/pent-un-fold";

const PentUnfold = () => {

  const inputFileRef = useRef();

  const [data, setData] = useState(null);

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <FileUpload inputRef={inputFileRef}/>
      <br/>
      <Box sx={{mt: '20px'}}>
        <Button type="submit"
                variant="contained"
                onClick={post}
                sx={{mr: "5px"}}
        >Get result</Button>
        <Button
          type="reset"
          onClick={clear}
        >Clean out</Button>
      </Box>
      {data && (
        <div>{data}</div>
      )}
    </Container>
  );

  async function post() {
    try {
      const response = await pentUnFold.post(inputFileRef.current.files[0]);
      setData(JSON.stringify(response));
    } catch(e) {
      console.log('error', e)
    }
  }

  function clear() {
    inputFileRef.current.value = "";
  }
};

export default PentUnfold;
