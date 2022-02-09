import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  LinearProgress,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useAsync from "../../../hooks/useAsync";
import pentUnFold from "../../../http/pent-un-fold";
import { Alert } from "@mui/lab";
import UploadFileIcon from "@mui/icons-material/UploadFile";

export default function AaSequencePanel() {
  const [aminoAcidSequence, setAminoAcidSequence] = useState("");

  const { result, loading, execute } = useAsync(() => post(aminoAcidSequence));

  return (
    <Box sx={{ pt: 1 }}>
      {result && (
        <Alert severity="success">
          The request was successful, the file is available for download!
          Download links are only available for 2 minutes
        </Alert>
      )}
      <Box sx={{ marginLeft: "25px", pt: 1, pb: 1 }}>
        {result && (
          <Box>
            <>
              <a href={result["1d"]} download="1d.xlsx">
                <Button
                  sx={{ color: "#54ba64", backgroundColor: "#eef7ee" }}
                  variant="contained"
                  startIcon={<UploadFileIcon sx={{ fontSize: 60 }} />}
                >
                  1D
                </Button>
              </a>
            </>
          </Box>
        )}
      </Box>
      <Box sx={{ pl: 3, pr: 3, color: "#505050" }}>
        <div>
          <p>Enter the amino acid sequence</p>
          <TextField
            name="text"
            multiline
            fullWidth
            rows="9"
            placeholder="Example: AMFCFQCQETAKNMFCFQCQETAKNTGCTVKGMCGKPEETANLQDLLIFVLRGIAI...."
            value={aminoAcidSequence}
            onChange={(e) => setAminoAcidSequence(e.target.value)}
          />
          {loading && <LinearProgress sx={{ display: "block" }} />}
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Box sx={{ pt: "20px" }}>
                <Button
                  sx={{ width: "100%" }}
                  type="submit"
                  variant="contained"
                  disabled={loading || !aminoAcidSequence}
                  onClick={execute}
                >
                  Get result
                </Button>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ textAlign: "center", pt: "15px" }}>
                <FormControlLabel
                  control={<Checkbox disabled={true} checked={true} />}
                  label="Include 1d result"
                />
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );

  async function post(aminoAcidSequence) {
    try {
      const response = await pentUnFold.post.sequence(aminoAcidSequence);
      const baseUrl = "http://" + window.location.hostname + ":8080";
      return {
        "1d": baseUrl + "/chemistry/pent-un-fold/1d/" + response?.data,
      };
    } catch (e) {
      console.error(e);
    }
  }
}
