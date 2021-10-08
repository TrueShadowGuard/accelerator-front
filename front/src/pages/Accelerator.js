import React, {useRef, useState} from 'react';
import PeriodicTable from "../components/PeriodicTable";
import {Box, Button, Container, FormControl, IconButton, MenuItem, Select, Slider, TextField} from "@mui/material";
import TableSvg from '../pictures/periodic-table.svg';
import {distanceStep, elements, maxDistance, minDistance} from '../consts';
import ligandPosition from "../http/ligand-position";

const Accelerator = () => {

  const PDBFileRef = useRef();
  const [ligandName, setLigandName] = useState('H');
  const [maxAcceptableDistance, setMaxAcceptableDistance] = useState(0);

  const [isTableVisible, setIsTableVisible] = useState();

  return (
    <>
      <PeriodicTable visible={isTableVisible}
                     setVisible={setIsTableVisible}
                     setElement={(el) => {
                       setLigandName(el);
                     }}
      />
      <Container sx={{pb: 10, mt: 1}}>
        <p>Copy and paste the text in PDB file:</p>
        <TextField
          sx={{
            "& .Mui-focused": {
              backgroundColor: "#fff",
            },
          }}
          rows={12}
          fullWidth
          multiline
          inputRef={PDBFileRef}
          label="PDB file"
          placeholder={`HEADER    OXIDOREDUCTASE                          18-MAY-11   3S3C              
TITLE     STRUCTURE OF THERMUS THERMOPHILUS CYTOCHROME BA3 OXIDASE 360S AFTER XE
TITLE    2 DEPRESSURIZATION                                                     
COMPND    MOL_ID: 1;                                                            
COMPND   2 MOLECULE: CYTOCHROME C OXIDASE SUBUNIT 1;                            
COMPND   3 CHAIN: A;                                                            
COMPND   4 SYNONYM: CYTOCHROME C BA(3) SUBUNIT I, CYTOCHROME C OXIDASE          
COMPND   5 POLYPEPTIDE I, CYTOCHROME CBA3 SUBUNIT 1;                            
COMPND   6 EC: 1.9.3.1;                                                         
COMPND   7 ENGINEERED: YES;                                                     
COMPND   8 MOL_ID: 2; ...`}
        />

        <Box sx={{
          display: "flex",
          flexDirection: "column",
        }}>
          <Box sx={{mt: 1, mb: 0.5}}>Element to calculate</Box>
          <div>
            <FormControl>
              <Select
                autoWidth={true}
                label="Element"
                sx={{
                  minWidth: "70px"
                }}
                value={ligandName || 'H'}
                onChange={e => {
                  setLigandName(e.target.value)
                }}
              >
                {elements.map(el => <MenuItem key={el} value={el}>{el}</MenuItem>)}
              </Select>
            </FormControl>
            <IconButton
              sx={{ml: "3px"}}
              onClick={() => setIsTableVisible(true)}
            >
              <img alt="Select element button"
                   src={TableSvg}
                   width={40}
                   height={40}
              />
            </IconButton>
          </div>
          <div>
            <Box sx={{mt: 1, mb: 0.5}}>Max acceptable distance, Å</Box>
            <Box sx={{display: "flex"}}>
              <div>
                <TextField type="number"
                           variant="standard"
                           value={maxAcceptableDistance || ""}
                           onChange={e => {
                             let number = +e.target.value;
                             number = Math.max(minDistance, number);
                             number = Math.min(maxDistance, number);
                             setMaxAcceptableDistance(number);
                           }}
                />
              </div>
              <div>
                <Slider min={minDistance}
                        max={maxDistance}
                        step={distanceStep}
                        valueLabelDisplay="on"
                        sx={{
                          width: "200px",
                          ml: 3
                        }}
                        value={maxAcceptableDistance}
                        onChange={e => {
                          setMaxAcceptableDistance(e.target.value)
                        }}
                />
              </div>
            </Box>
          </div>
        </Box>
        <Box sx={{mt: 1}}>
          <Button type="submit"
                  variant="contained"
                  onClick={post}
                  sx={{mr: '5px'}}
          >
            Get result
          </Button>
          <Button
            type="reset"
            onClick={clear}
          >
            Clean out
          </Button>
        </Box>
      </Container>
    </>
  );

  async function post() {
    const response = await ligandPosition.post(ligandName, maxAcceptableDistance, PDBFileRef.current.value);
    console.log('post response', response);
  }

  function clear() {
    PDBFileRef.current.value = "";
  }
};

export default Accelerator;
