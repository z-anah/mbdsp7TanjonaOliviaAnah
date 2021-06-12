import { Divider, Text } from "@ui-kitten/components";
import * as React from "react";
import { View } from "react-native";
import styles from "../../styles/styles";

class TopNavigatorMiniProfileLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomComplet: this.props.nomComplet,
      jeton: this.props.jeton,
    };
  }
  render() {
    return (
      <>
        <View style={[styles.topNav]}>
          <View style={styles.topNavContent}>
            <Text style={styles.topNavTitle}>Profile</Text>
            <Text>{this.state.nomComplet}</Text>
          </View>
          <View style={styles.topNavContent}>
            <Text style={[styles.topNavTitle, { textAlign: "right" }]}>
              Balance (Jetons)
            </Text>
            <Text style={{ textAlign: "right" }}>{this.state.jeton}</Text>
          </View>
        </View>
        <Divider />
      </>
    );
  }
}

export default TopNavigatorMiniProfileLayout;
