import React, {useRef} from 'react';
import {Box, Button, Container} from "@mui/material";

const PentUnfold = () => {

  const inputFileRef = useRef();

  return (
    <Container sx={{pb: 10, mt: 1}}>
      <label>
        Insert PDB file:
        <input type="file" ref={inputFileRef}/>
      </label>
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
    </Container>
  );

  function post() {

  }

  function clear() {
    inputFileRef.current.value = "";
  }
};

export default PentUnfold;
