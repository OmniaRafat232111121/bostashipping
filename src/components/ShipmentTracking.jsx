import React, { useEffect, useState } from "react";

import { Grid, Container, Typography, CircularProgress } from "@mui/material";
import SearchBox from "./SearchBox";
import ShipmentProblem from "./ShipmentProblem";
import InfoShipping from "./InfoShipping";
import Language from "../shared/Language";
import BOSTA_API from "../apis/BostaApi";
import { useParams } from "react-router-dom";
import Delivery from "./Delivery";
import DeliverUpdate from "./DeliverUpdate";

const ShipmentTracking = () => {
  const { trackingNum } = useParams();

  const {
    NUMBERS_ONLY,
    NETWORK_ERROR,
    NOT_FOUND,
    MAKE_SURE_OF_TRACKING_NUMBER,
    GENERAL_ERROR,
  } = Language.ERRORS;

  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getShipmentDetails = () => {
    if (Number(trackingNum)) {
      setLoading(true);
      BOSTA_API.get(`/shipments/track/${trackingNum}`)
        .then((res) => {
          setShipmentDetails(res.data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          err = JSON.stringify(err);
          err = JSON.parse(err);
          if (err.message === "Network Error") {
            setError({
              type: "NETWORK_ERROR",
              msg: NETWORK_ERROR,
            });
          } else if (err.status === 404) {
            setError({
              type: "NOT_FOUND",
              msg: NOT_FOUND + MAKE_SURE_OF_TRACKING_NUMBER,
            });
          } else {
            setError({
              type: "GENERAL_ERROR",
              msg: GENERAL_ERROR,
            });
          }
          setLoading(false);
        });
    } else if (trackingNum) {
      setError({
        type: "NUMBERS_ONLY",
        msg: NUMBERS_ONLY,
      });
    }
  };

  useEffect(() => {
    getShipmentDetails();
  }, []);

  useEffect(() => {
    getShipmentDetails();
  }, [trackingNum]);

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
      ) : (
        shipmentDetails && (
          <React.Fragment>
             <DeliverUpdate
              shipmentDetails={shipmentDetails}
              transitEvents={shipmentDetails.TransitEvents}
            />
            
            <Grid container spacing={3} style={{ paddingBottom: 70 }}>
              <Grid item xs={12} md={8}>
                <InfoShipping
                  transitEvents={shipmentDetails.TransitEvents}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <Delivery/>
                <ShipmentProblem />
              </Grid>
            </Grid>
          </React.Fragment>
        )
      )}
    </React.Fragment>
  );
};

export default ShipmentTracking;