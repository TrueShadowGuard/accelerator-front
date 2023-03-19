import React, {useEffect, useState} from 'react';
import { MDBDataTable } from 'mdbreact';
import {Box, Button, Modal,} from "@mui/material";
import classes from "./HydrogenDataTable.module.css"

const HydrogenDataTable = (props) => {

  const [data, setData] = useState({
    columns: [],
    rows: []
  });

  const [accuracy, setAccuracy] = useState({
    columns: [],
    rows: []
  });

  const [nearestAtoms, setNearestAtoms] = useState({
    columns: [],
    rows: []
  });

  const [modalText, setModalText] = useState("");

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    let allList = props.data?.allList;
    console.log("Nearest atoms:");
    console.log(props.data?.allList[0]?.nearestAtoms);
    for (let i = 0; i < allList.length; i++) {
      allList[i].clickEvent = () => {
        setModalText(allList[i].aminoAcidNumber + ' (' + allList[i].aminoAcid + ')');
        setAccuracy({
          columns: [
            {
              label: 'Num',
              field: 'aminoAcidResiduePDBNumber',
              width: 75
            },
            {
              label: 'AC',
              field: 'aminoAcidName',
              width: 75
            },
            {
              label: 'HO_Distance',
              field: 'hoDistance',
              width: 75
            },
            {
              label: 'Energy',
              field: 'hBoundEnergy',
              sort: 'asc',
              width: 75
            },
          ],
          rows: [...allList[i].hBoundAminoAcids],
        });
        setNearestAtoms({
          columns: [
            {
              label: 'Num',
              field: 'ac_number',
              width: 45
            },
            {
              label: 'AC',
              field: 'ac_name',
              width: 45
            },
            {
              label: 'Atom',
              field: 'atom_name',
              width: 45
            },
            {
              label: 'X',
              field: 'x_coordinate',
              width: 45
            },
            {
              label: 'Y',
              field: 'y_coordinate',
              sort: 'asc',
              width: 45
            },
            {
              label: 'Z',
              field: 'z_coordinate',
              width: 45
            },
            {
              label: 'Distance',
              field: 'distance',
              width: 45
            },
          ],
          rows: [...allList[i]?.nearestAtoms],
        });
        setShowModal(true);
      }
    }

    setData({
          columns: [
            {
              label: 'Number',
              field: 'aminoAcidNumber',
              sort: 'asc',
              width: 70
            },
            {
              label: 'AC',
              field: 'aminoAcid',
              sort: 'asc',
              width: 70
            },
            {
              label: 'next_AC',
              field: 'nextAminoAcid',
              sort: 'asc',
              width: 70
            },
            {
              label: 'prev_AC',
              field: 'previousAminoAcid',
              sort: 'asc',
              width: 70
            },
            {
              label: 'H-Bound',
              field: 'hydrogenBoundAminoAcids',
              sort: 'asc',
              width: 70
            },
            {
              label: 'real_X',
              field: 'realXCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'pred_X',
              field: 'predictedXCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'real_Y',
              field: 'realYCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'pred_Y',
              field: 'predictedYCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'real_Z',
              field: 'realZCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'pred_Z',
              field: 'predictedZCoordinate',
              sort: 'asc',
              width: 70
            },
            {
              label: 'dist_NH',
              field: 'nhDistance',
              sort: 'asc',
              width: 70
            },
            {
              label: 'Distance',
              field: 'distanceToReal',
              sort: 'asc',
            },
          ],
          rows: [...allList],
        }
    );

  }, [props.data]);

  function rand() {
    return Math.round(Math.random() * 20) - 10;
  }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`
    };
  }

  const [modalStyle] = useState(getModalStyle);

  const CustomModal = () => {
    return showModal ? (
        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={showModal}
            onClose={closeModal}>
          <div style={modalStyle} className={classes.paper}>
            <Box sx={{width: '100%'}} id="modal-title">
              <Box sx={{ marginRight: "250px", display: "inline" }}>Potential H-bounds for {modalText}:</Box>
              <Button onClick={closeModal}>Close</Button>
            </Box>
            <MDBDataTable searching={false} displayEntries={false} entries={3} striped bordered small data={accuracy} />
            Nearest atoms:
            <MDBDataTable scrollY={true} searching={false} paging={false} entries={100} maxHeight={'120px'} displayEntries={false} striped bordered small data={nearestAtoms} />
          </div>
        </Modal>
    ) : null;
  };

  return (
      <div>
        { props.data.allList?.length > 0 && (
            <MDBDataTable striped bordered small data={data} />
        )}
        <CustomModal/>
      </div>
  );
};

export default HydrogenDataTable;