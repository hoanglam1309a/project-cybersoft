import React, { Component } from "react";
import "./glassItem.css";

export default class GlassItem extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className='glass-item'>
        <img src='./images/model.jpg' alt='' />
        {this.props.content && (
          <>
            <img className='glass-img' src={this.props.data.url} alt='' />
            <div className='glass-content'>
              <h3 className='glass-title'>{this.props.data.name}</h3>
              <p className='glass-desc'>{this.props.data.desc}</p>
            </div>
          </>
        )}
      </div>
    );
  }
}
