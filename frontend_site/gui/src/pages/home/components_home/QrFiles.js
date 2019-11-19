import React, { Component } from 'react';
import QRCode from 'qrcode.react'
export default class QrFiles extends Component {
  render() {
    return (
      <div> 
         <QRCode renderAs="svg" size='400' includeMargin='true' value="https://edgeconsult.me/lib/Software%20Development/Web/Vue/Vue.js-2-Cookbook.pdf" />
      </div>
    );
  }
}
