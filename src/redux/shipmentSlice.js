// shipmentSlice.js
import { createSlice } from '@reduxjs/toolkit';

const shipmentSlice = createSlice({
  name: 'shipment',
  initialState: {
    shipmentDetails: null,
    loading: false,
    error: null,
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
  },
});

export const {
  setShipmentDetails,
  setLoading,
  setError,
} = shipmentSlice.actions;

export default shipmentSlice.reducer;
