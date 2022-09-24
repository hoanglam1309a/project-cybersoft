export const selectSeat = (data) => {
  return {
    type: "bookingTicket/selectSeat",
    payload: data,
  };
};

export const unselectSeat = (data) => {
  return {
    type: "bookingTicket/unselectSeat",
    payload: data,
  };
};
