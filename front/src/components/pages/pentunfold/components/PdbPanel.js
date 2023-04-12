import FileUpload from "../../../FileUpload";
import readFileAsText from "../../../../utils/readFileAsText";
import parsePdb from "../../../../utils/pic/parsePdb";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  LinearProgress,
  MenuItem, Radio,
  Select,
  Tooltip,
} from "@mui/material";
import pic from "../../../../utils/pic";
import pentUnFold from "../../../../http/pent-un-fold";
import useAsync from "../../../../hooks/useAsync";
import React, { useRef, useState } from "react";
import { Alert } from "@mui/lab";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import axios from "../../../../http/axios";

export default function PdbPanel() {
  const inputFileRef = useRef();

  const include1dRef = useRef();
  const include2dRef = useRef();
  const include3dRef = useRef();
  const isFileNeededRef = useRef();
  const isCustomDsspNeededRef = useRef();

  const { error, result, setResult, loading, execute } = useAsync(post);

  const [ussaUsed, setUssaUsed] = useState(false);

  const [isFileValid, setIsFileValid] = useState(null);

  const [chains, setChains] = useState(null);

  const [selectedChain, setSelectedChain] = useState("");

  return (
    <Box sx={{ width: "100%", height: "100px", mt: 1}}

         >
      {result && result["secondaryStructureResource"] === null
          && (
          <Alert sx={{ mb: 1 }} severity="error">
            The server was unable to process your file. Perhaps it contains an error in the description.
            You can leave a <a href={"./comments"}>comment</a> with the name of your file and we will try to fix it.
            Or you can also <a href={"./support"}>contact us</a> directly.
          </Alert>
      )}
      {result &&
        (include1dRef.current.checked ||
          include2dRef.current.checked ||
          include3dRef.current.checked) &&
        isFileNeededRef.current.checked &&
        result["secondaryStructureResource"] === 1 && (
          <Alert sx={{ mb: 1 }} severity="warning">
            Failed to get result from DSSP server by file name, so result was
            obtained by sending the whole file.
          </Alert>
        )}
      {result &&
        (include1dRef.current.checked ||
          include2dRef.current.checked ||
          include3dRef.current.checked) &&
        !isFileNeededRef.current.checked &&
        result["secondaryStructureResource"] === 2 && (
          <Alert sx={{ mb: 1 }} severity="warning">
            Failed to get result from DSSP server by sending file, so result was
            obtained by file name.
          </Alert>
        )}
      {result &&
        (include1dRef.current.checked ||
          include2dRef.current.checked ||
          include3dRef.current.checked) &&
        result["secondaryStructureResource"] === 3 && (
          <Alert sx={{ mb: 1 }} severity="warning">
            DSSP server failed to proccess your file. That is why we used our
            own USSA skript to determine secondary structure
          </Alert>
        )}
      {result &&
        (include1dRef.current.checked ||
          include2dRef.current.checked ||
          include3dRef.current.checked) &&
          result["secondaryStructureResource"] > 0 &&
          !!result["isNameExist"] && (
              <Alert severity="success">
                The request was successful, the files are available for download!
                Download links are only available for 2 minutes. First download current results, then submit a new job.
              </Alert>
          )}
      {result &&
        !include1dRef.current.checked &&
        !include2dRef.current.checked &&
        !include3dRef.current.checked && (
          <Alert severity="warning">
            Please select at least one option to get results!
          </Alert>
        )}
      { ((error && !result) || (result &&
        (include1dRef.current.checked ||
          include2dRef.current.checked ||
          include3dRef.current.checked) &&
        !result["isNameExist"] &&
        isFileNeededRef.current.checked)) && (
          <Alert severity="error">
            The server is temporarily down. Please try contacting customer
            service or check back later! You can also leave your feedback.
          </Alert>
        )}
      <Box sx={{ px: 3 }}>
        {result && !!result["isNameExist"] && result["secondaryStructureResource"] > 0 && (
          <Box sx={{ mt: 1 }}>
            <>
              {include1dRef.current.checked ? (
                <Box sx={{ marginRight: "10px", display: "inline" }}>
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
              ) : (
                <></>
              )}
              {include2dRef.current.checked ? (
                <Box sx={{ marginRight: "10px", display: "inline" }}>
                  <>
                    <a href={result["2d"]} download="2d.xlsx">
                      <Button
                        sx={{ color: "#54ba64", backgroundColor: "#eef7ee" }}
                        variant="contained"
                        startIcon={<UploadFileIcon sx={{ fontSize: 60 }} />}
                      >
                        2D
                      </Button>
                    </a>
                  </>
                </Box>
              ) : (
                <></>
              )}
              {include3dRef.current.checked ? (
                <>
                  <a href={result["3d"]} download="3d.xlsx">
                    <Button
                      sx={{ color: "#54ba64", backgroundColor: "#eef7ee" }}
                      variant="contained"
                      startIcon={<UploadFileIcon sx={{ fontSize: 60 }} />}
                    >
                      3D
                    </Button>
                  </a>
                </>
              ) : (
                <></>
              )}
            </>
          </Box>
        )}
        <FileUpload
          inputRef={inputFileRef}
          innerProps={{ accept: ".pdb" }}
          onFileChange={async (file) => {
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
        {loading && <LinearProgress sx={{ mt: 1, mb: 0 }} />}
        {loading &&
            <Alert sx={{ mt: 1 }} severity="warning">
              Please, do not send new requests still the current job is running.
            </Alert>
        }
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FormControl sx={{mt:5, pt:0.6, minWidth: "103%" }}>
              <InputLabel
                sx={{
                  background: "#fff"
                }}
              >
                Chain name
              </InputLabel>
              <Select
                size="small"
                variant={"outlined"}
                label="Chain name"
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                disabled={chains === null || loading}
              >
                {chains &&
                  Object.keys(chains).map((chainName) => (
                    <MenuItem value={chainName} key={chainName}>
                      {chainName}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <Box
              sx={{ paddingTop: "32px", textAlign: "center", color: "#505050" }}
            >
              <FormControlLabel
                sx={{marginLeft: 4,  marginRight: 4}}
                value="true"
                // labelPlacement="bottom"
                // disabled={loading || ussaUsed }
                disabled={true}
                control={<Radio inputRef={isFileNeededRef} />}
                label="DSSP"
              />
              <FormControlLabel
                  sx={{ marginLeft: 4, marginRight: 4}}
                  value="true"
                  checked={true}
                  // labelPlacement="bottom"
                  // disabled={loading}
                  control={<Radio onClick={() => setUssaUsed(true)}
                                   inputRef={isCustomDsspNeededRef} />}
                  label="USSA"
              />
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{ paddingTop: "40px", textAlign: "center", color: "#505050" }}
            >
              <FormControlLabel
                control={
                  <Checkbox inputRef={include1dRef} disabled={loading} />
                }
                label="Include 1d result"
              />
            </Box>
            <Box
              sx={{ paddingTop: "10px", textAlign: "center", color: "#505050" }}
            >
              <FormControlLabel
                control={
                  <Checkbox inputRef={include2dRef} disabled={loading} />
                }
                label="Include 2d result"
              />
            </Box>
            <Box
              sx={{ paddingTop: "10px", textAlign: "center", color: "#505050" }}
            >
              <FormControlLabel
                control={
                  <Checkbox inputRef={include3dRef} disabled={loading} />
                }
                label="Include 3d result"
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: "20px" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              "& > *": {
                flexGrow: 1,
              },
            }}
          >
            {isFileValid ? (
              <Button
                type="submit"
                variant="contained"
                onClick={() => execute(chains, selectedChain)}
                sx={{ mr: "5px" }}
                disabled={loading || !isFileValid}
              >
                Get result
              </Button>
            ) : (
              <Tooltip
                title={
                  isFileValid === null
                    ? "Please select a file"
                    : "Only .pdb files are supported"
                }
              >
                <span>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mr: "5px", width: "100%" }}
                    disabled={loading || !isFileValid}
                  >
                    Get result
                  </Button>
                </span>
              </Tooltip>
            )}
            <Button
              sx={{ backgroundColor: "#C1B9F9", ml: "5px" }}
              type="reset"
              onClick={clear}
            >
              Clean out
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );

  async function post(chains, selectedChain) {
    setResult(null);
    try {
      const include1d = include1dRef.current.checked;
      const include2d = include2dRef.current.checked;
      const include3d = include3dRef.current.checked;
      const isFileNeeded = isFileNeededRef.current.checked;
      const isCustomDsspNeeded = isCustomDsspNeededRef.current.checked
      const picResult = include3d ? pic(chains[selectedChain]) : null;
      const ip = await axios.get("https://api.ipify.org?format=json");

      const response = await pentUnFold.post.pdb(
        inputFileRef.current.files[0],
        include1d,
        include2d,
        include3d,
        picResult,
        selectedChain,
        isFileNeeded,
        isCustomDsspNeeded,
        ip?.data?.ip
      );
      const baseUrl = "http://" + window.location.hostname + ":9101";
      return {
        "1d": baseUrl + "/chemistry/pent-un-fold/1d/" + response.data?.fileName,
        "2d": baseUrl + "/chemistry/pent-un-fold/2d/" + response.data?.fileName,
        "3d": baseUrl + "/chemistry/pent-un-fold/3d/" + response.data?.fileName,
        secondaryStructureResource: response.data?.secondaryStructureResource,
        isNameExist:
          response.data?.fileName != null && response?.data.fileName !== "",
      };
    } catch (e) {
      console.error(e);
    }
  }

  function validateFile(file) {
    return !file ? null : file.name.endsWith(".pdb");
  }

  function clear() {
    inputFileRef.current.value = "";
    setResult(null);
    setChains(null);
    setSelectedChain(null);
  }
}
