import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSeat } from "../redux/actions/bookingTicketAction";

class BlockChair extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='containerChair'>
        {this.props.dataBooking.map((rowChair, index) => {
          let fetch = rowChair.danhSachGhe.map((chair, index) => {
            //check seat is selecteing or not selecting (if not selecting will return -1)
            let isSeatSelecting = this.props.dataSelectingSeat.findIndex(
              (item) => item.soGhe === chair.soGhe
            );

            //fetch chairs
            return (
              <button
                key={index}
                className={`chair ${isSeatSelecting !== -1 ? "selectingChair" : ""} ${
                  chair.daDat == true ? "selectedChair" : ""
                }`}
                disabled={chair.daDat === true ? true : false}
                onClick={() => {
                  this.props.selectSeat(chair);
                }}
              >
                {chair.soGhe}
              </button>
            );
          });

          //featch row chairs
          return (
            <div className={`rowChair ${index === 0 ? "firstRow" : ""}`} key={index}>
              <div className='firstChair'>{rowChair.hang}</div>
              {fetch}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataBooking: state.bookingTicketReducer.dataBooking,
    dataSelectingSeat: state.bookingTicketReducer.dataSelectingSeat,
  };
};
export default connect(mapStateToProps, { selectSeat })(BlockChair);
