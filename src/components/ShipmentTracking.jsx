import React, { useEffect } from "react";
import { Grid, Container, Typography, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  setShipmentDetails,
  setLoading,
  setError,
} from "../redux/shipmentSlice";
import SearchBox from "./SearchBox";
import DeliverUpdate from "./DeliverUpdate";
import InfoShipping from "./InfoShipping";
import Delivery from "./Delivery";
import ShipmentProblem from "./ShipmentProblem";
import Language from "../shared/Language";
import BOSTA_API from "../apis/BostaApi";
import { useParams } from "react-router-dom";

const ShipmentTracking = () => {
  const { trackingNum } = useParams();
  const {
    NUMBERS_ONLY,
    NETWORK_ERROR,
    NOT_FOUND,
    MAKE_SURE_OF_TRACKING_NUMBER,
    GENERAL_ERROR,
  } = Language.ERRORS;

  const { shipmentDetails, loading, error } = useSelector(
    (state) => state.shipment
  );
  const dispatch = useDispatch();

  const getShipmentDetails = () => {
    if (Number(trackingNum)) {
      dispatch(setLoading(true));
      BOSTA_API.get(`/shipments/track/${trackingNum}`) // Ensure the correct trackingNum is used here
        .then((res) => {
          dispatch(setShipmentDetails(res.data));
          dispatch(setLoading(false));
          dispatch(setError(null));
        })
        .catch((err) => {
          let errorType;
          let errorMsg;

          err = JSON.stringify(err);
          err = JSON.parse(err);

          if (err.message === "Network Error") {
            errorType = "NETWORK_ERROR";
            errorMsg = NETWORK_ERROR;
          } else if (err.status === 404) {
            errorType = "NOT_FOUND";
            errorMsg = NOT_FOUND + MAKE_SURE_OF_TRACKING_NUMBER;
          } else {
            errorType = "GENERAL_ERROR";
            errorMsg = GENERAL_ERROR;
          }

          dispatch(setError({ type: errorType, msg: errorMsg }));
          dispatch(setLoading(false));
        });
    } else if (trackingNum) {
      dispatch(
        setError({
          type: "NUMBERS_ONLY",
          msg: NUMBERS_ONLY,
        })
      );
    }
  };

  useEffect(() => {
    getShipmentDetails();
  }, [trackingNum]); // Use trackingNum as a dependency for this effect

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <SearchBox
          title={Language.SHIPMENT_TRACKING.TRACK_YOUR_SHIPMENT}
          variant="h5"
        />
      </Container>
      {loading ? (
        <Container maxWidth="xs" style={{ textAlign: "center" }}>
          <CircularProgress size={60} />
        </Container>
      ) : error ? (
        <Typography textAlign="center">{error.msg}</Typography>
      ) : shipmentDetails ? (
        <React.Fragment>
          <DeliverUpdate
            shipmentDetails={shipmentDetails}
            transitEvents={shipmentDetails.TransitEvents}
          />
          <Grid container spacing={3} style={{ paddingBottom: 70 }}>
            <Grid item xs={12} md={8}>
              <InfoShipping transitEvents={shipmentDetails.TransitEvents} />
            </Grid>
            <Grid item xs={12} md={4}>
              <Delivery />
              <ShipmentProblem />
            </Grid>
          </Grid>
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

export default ShipmentTracking;
