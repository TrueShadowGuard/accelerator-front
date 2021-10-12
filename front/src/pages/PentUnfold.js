import React, {useRef, useState} from 'react';
import {Box, Button, Container, TextField} from "@mui/material";
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
        <Box sx={{mt: 2}}>
          <TextField
            multiline
            fullWidth
            rows={12}
            label="pdb result"
            variant="filled"
            defaultValue={data.pdb}
          />
          <TextField
            sx={{mt: 1}}
            multiline
            fullWidth
            rows={12}
            label="dssp result"
            variant="filled"
            defaultValue={data.dssp}
          />
        </Box>
      )}
    </Container>
  );

  async function post() {
    try {
      const response = await pentUnFold.post(inputFileRef.current.files[0]);
      setData(response.data);
    } catch (e) {
      console.log('error', e)
    }
  }

  function clear() {
    inputFileRef.current.value = "";
    setData(null);
  }
};

export default PentUnfold;
