import {
  ApplicationProvider,
  Icon,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import LottieView from "lottie-react-native";
import { setUser } from "../../redux/action";
import MapView, { Marker } from "react-native-maps";
import i18n from "i18n-js";

class PointVenteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      markers: [
        {
          title: "hello",
          coordinates: {
            latitude: -18.918065,
            longitude: 47.529718,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: -18.923929,
            longitude: 47.530239,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: -18.925556,
            longitude: 47.524926,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: -18.914665,
            longitude: 47.534146,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: -18.920825,
            longitude: 47.514768,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: -18.909047,
            longitude: 47.529145,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
      ],
    };
  }
  render() {
    const { isLoading } = this.state;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <TopNavigation
            accessoryLeft={() => this.BackAction()}
            title={i18n.t("TRL0020")}
            alignment="center"
          />
          <MapView
            style={{ flex: 1 }}
            initialRegion={this.state.markers[this.state.i].coordinates}
          >
            {this.state.markers.map((marker, i) => (
              <MapView.Marker
                key={i}
                coordinate={marker.coordinates}
                title={marker.title}
              />
            ))}
          </MapView>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }

  componentDidMount = async () => {};
  BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.props.navigation.goBack()}
    />
  );
}

const styless = StyleSheet.create({});

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const mdtp = (dispatch) =>
  bindActionCreators(
    {
      setUser,
    },
    dispatch
  );

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(PointVenteScreen);
