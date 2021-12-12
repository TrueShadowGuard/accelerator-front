import {Box, Button, Checkbox, FormControlLabel, LinearProgress, TextField} from "@mui/material";
import {useState} from "react";
import useAsync from "../../hooks/useAsync";
import pentUnFold from "../../http/pent-un-fold";
import GetResultButton from "../GetResultButton";

export default function AaSequencePanel() {

  const [aminoAcidSequence, setAminoAcidSequence] = useState("");

  const {result, setResult, loading, execute} = useAsync(() => post(aminoAcidSequence));

  return (
    <div>
      <p>Enter the amino acid sequence:</p>
      <TextField
        name="text"
        multiline
        fullWidth
        rows="12"
        placeholder="Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI...."
        value={aminoAcidSequence}
        onChange={e => setAminoAcidSequence(e.target.value)}
      />
      <FormControlLabel control={<Checkbox disabled={true} checked={true}/>} label="Include 1d result"/>
      <br/>
      <Box sx={{width: "max-content"}}>
        <GetResultButton type="submit"
                         variant="contained"
                         disabled={loading || !aminoAcidSequence}
                         onClick={execute}
        >
          Get result
        </GetResultButton>
        {loading && <LinearProgress sx={{mt: 2, display: "block"}}/>}
      </Box>
      {result &&
      <div>
        Your file is ready! <br/>
        <a href={result["1d"]} download="1d.xlsx">1D</a>
      </div>
      }
    </div>
  )

  async function post(aminoAcidSequence) {
    try {
      const response = await pentUnFold.post.sequence(aminoAcidSequence);
      const baseUrl = "http://" + window.location.hostname + ":8080";
      return {
        "1d": baseUrl + "/chemistry/pent-un-fold/sequence/1d/" + response?.data
      }
    } catch (e) {
      console.error(e);
    }
  }
}

