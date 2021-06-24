import QRCode from "react-native-qrcode-svg";
import * as React from "react";
import { StyleSheet } from "react-native";

class CodeQR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <QRCode value="http://awesome.link.qr" />;
  }
}

const data = {};
const styless = StyleSheet.create({});

export default CodeQR;
