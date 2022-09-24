import React, { Component } from "react";
import GlassItem from "../glassItem/GlassItem";
import "./glassList.css";

export default class GlassList extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='glass-list'>
        <GlassItem content={true} data={this.props.data}></GlassItem>
        <GlassItem content={false}></GlassItem>
      </div>
    );
  }
}
