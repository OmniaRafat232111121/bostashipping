// shipmentSlice.js

import { createSlice } from '@reduxjs/toolkit';

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: {
    shipmentDetails: null,
    loading: false,
    error: null,
    trackingNum: '',
  },
  reducers: {
    setShipmentDetails: (state, action) => {
      state.shipmentDetails = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setTrackingNum: (state, action) => {
      state.trackingNum = action.payload; 
    },
  },
});

export const {
  setShipmentDetails,
  setLoading,
  setError,
  setTrackingNum, 
} = shipmentSlice.actions;

export default shipmentSlice.reducer;
