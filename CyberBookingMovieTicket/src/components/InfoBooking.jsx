import React, { Component } from "react";
import { connect } from "react-redux";
import { unselectSeat } from "../redux/actions/bookingTicketAction";

class InfoBooking extends Component {
  render() {
    const calcTotalAmount = this.props.dataSelectingSeat.reduce(function (
      previousValue,
      currentValue
    ) {
      return previousValue + currentValue.gia;
    },
    0);

    return (
      <div>
        <div className='mt-5'>
          <button className='selectedChair'></button>
          <span className='text-light ml-3' style={{ fontSize: "30px" }}>
            ghế đã đặt
          </span>
          <br />
          <button className='selectingChair'></button>
          <span className='text-light ml-3' style={{ fontSize: "30px" }}>
            ghế đang đặt
          </span>
          <br />
          <button className='chair' style={{ marginLeft: 0 }}></button>
          <span className='text-light ml-3' style={{ fontSize: "30px" }}>
            ghế chưa đặt
          </span>
        </div>

        <div className='mt-3 ticket-list'>
          <table className='table table-ticket' border='2'>
            <thead>
              <tr className='text-light' style={{ fontSize: 25 }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Hủy</th>
              </tr>
            </thead>
            <tbody className='text-light'>
              {this.props.dataSelectingSeat.map((item) => {
                return (
                  <tr key={item.soGhe}>
                    <th>{item.soGhe}</th>
                    <th>
                      {item.gia.toLocaleString("it-IT", { style: "currency", currency: "VND" })}
                    </th>
                    <th>
                      <h5
                        className='ticket-unselect'
                        onClick={() => {
                          this.props.unselectSeat(item);
                        }}
                      >
                        Hủy
                      </h5>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className='totalAmount text-light'>
          <h3>Tổng tiền</h3>
          <h3 className='numMoney'>
            {calcTotalAmount.toLocaleString("it-IT", { style: "currency", currency: "VND" })}
          </h3>
        </div>
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
export default connect(mapStateToProps, { unselectSeat })(InfoBooking);
