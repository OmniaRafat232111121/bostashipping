/* eslint-disable react/prop-types */
import { Container, Divider, Grid } from "@mui/material";
import ItemBar from "./ItemBar";
import Language from "../shared/Language";
import ColorBar from "../shared/ColorBar";
import {
  getDay,
  getDate_DD_MM_YY,
  getTime,
  getDate_DD_Month_YY,
} from "../shared/helperFunctions";
import StatusBar from "./StatusBar";
const DeliverUpdate = (props) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const { shipmentDetails, transitEvents } = props;
  const lastDate = new Date(shipmentDetails.CurrentStatus.timestamp);
  const lastUpdate = `${getDay(lastDate)} ${getDate_DD_MM_YY(lastDate)} ${
    Language.TIME_AT
  } ${getTime(lastDate)}`;
  const sellerName = Language.SHIPMENT_TRACKING.NOT_DETERMINED;
  const promiseDate = shipmentDetails.PromisedDate
    ? getDate_DD_Month_YY(new Date(shipmentDetails.PromisedDate))
    : Language.SHIPMENT_TRACKING.NOT_DETERMINED;

  return (
    <Container
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: 0,
        marginBottom: 50,
      }}
    >
      <Grid container style={{ padding: 24 }}>
        <ItemBar
          title={`${Language.SHIPMENT_TRACKING.TRACKING_NUMBER} ${shipmentDetails.TrackingNumber}`}
          data={Language.SHIPMENT_STATE[shipmentDetails.CurrentStatus.state]}
          style={{ color: ColorBar[shipmentDetails.CurrentStatus.state] }}
        />
        <ItemBar
          title={Language.SHIPMENT_TRACKING.LAST_UPDATE}
          data={lastUpdate}
        />
        <ItemBar
          title={Language.SHIPMENT_TRACKING.SELLER_NAME}
          data={sellerName}
        />
        <ItemBar
          title={Language.SHIPMENT_TRACKING.PROMISED_DATE}
          data={promiseDate}
        />
      </Grid>
      <Divider variant="fullWidth" />
      <StatusBar transitEvents={transitEvents} />
    </Container>
  );
};

export default DeliverUpdate;
