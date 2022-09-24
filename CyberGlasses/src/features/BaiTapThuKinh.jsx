import React, { Component } from "react";
import GlassList from "../components/glassList/GlassList";
import Header from "../components/Header/Header";
import dataGlasses from "../data/dataGlasses.json";
import "./baitapthukinh.css";

export default class BaiTapThuKinh extends Component {
  constructor(props) {
    super();
    this.state = {
      glass: {
        id: 2,
        price: 50,
        name: "GUCCI G8759H",
        url: "./images/v2.png",
        desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
      },
    };
  }

  render() {
    const handleChangeGlass = (changedGlass) => {
      this.setState((this.state.glass = changedGlass));
    };

    return (
      <div className='container'>
        <Header></Header>
        <GlassList data={this.state.glass}></GlassList>

        <div className='glass-selections'>
          {dataGlasses.map((glassItem) => {
            return (
              <div className='glass-select' key={glassItem.id}>
                <img
                  src={glassItem.url}
                  alt=''
                  onClick={() => {
                    handleChangeGlass(glassItem);
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
