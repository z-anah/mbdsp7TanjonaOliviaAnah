import {
  ApplicationProvider,
  Icon,
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

class PointVenteScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      markers: [
        {
          title: "hello",
          coordinates: {
            latitude: 3.148561,
            longitude: 101.652778,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          },
        },
        {
          title: "hello",
          coordinates: {
            latitude: 3.149771,
            longitude: 101.652779,
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
          <MapView
            style={{ ...StyleSheet.absoluteFillObject }}
            initialRegion={this.state.markers[this.state.i].coordinates}
          >
            {this.state.markers.map((marker) => (
              <MapView.Marker
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
