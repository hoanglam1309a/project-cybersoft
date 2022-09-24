import React, { Component } from "react";
import BlockChair from "./BlockChair";
import "./bookingTicket.css";
import InfoBooking from "./InfoBooking";

export default class BookingTicket extends Component {
  render() {
    return (
      <div
        className='bookingMovie'
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-8 text-center'>
                <div className='display-4 text-warning'>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</div>
                <div className='mt-3 text-light' style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className='mt-2'
                  style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                >
                  <div className='screen'></div>
                  <BlockChair></BlockChair>
                </div>
              </div>
              <div className='col-4'>
                <div style={{ fontSize: "35px" }} className='text-light mt-2'>
                  DANH SÁCH GHẾ BẠN CHỌN
                </div>
                <InfoBooking />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
