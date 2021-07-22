import {
  ApplicationProvider,
  Avatar,
  Card,
  Icon,
  Text,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DOMAIN_NODE } from "../../api/api";

class MonPorteFeuilleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { nomCompletUtilisateur, soldeUtilisateur, profilUtilisateur } =
      this.props.counter.dataUser;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <View style={[styless.scan]}>
            <Avatar
              style={styless.avatarMP}
              source={{
                uri: `${DOMAIN_NODE}/api/download/${profilUtilisateur}`,
              }}
            />
          </View>
          <Card style={styless.card}>
            <View style={styless.containerLayout}>
              <View>
                <Text>{nomCompletUtilisateur}</Text>
              </View>
              <Icon
                name="refresh-outline"
                style={styless.icon}
                fill="#8F9BB3"
              />
            </View>
            <Text style={styless.cardNumber}>9876 7654 7654 2350</Text>
            <Text style={styless.date}>
              {new Date().toISOString().substring(0, 10).toString()}
            </Text>
            <Text style={styless.jeton}>{soldeUtilisateur}</Text>
          </Card>
          <TouchableOpacity
            style={styless.scan}
            onPress={() => this.props.navigation.push("BarCodeScannerScreen")}
          >
            <LottieView
              style={{ width: widthPercentageToDP("10%") }}
              autoPlay={true}
              loop={true}
              source={require("../../../../assets/lottie/68692-qr-code-scanner.json")}
            />
          </TouchableOpacity>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const styless = StyleSheet.create({
  avatarMP: {
    width: widthPercentageToDP("22%"),
    height: widthPercentageToDP("22%"),
    marginTop: widthPercentageToDP("5%"),
  },
  card: {
    marginHorizontal: widthPercentageToDP("10%"),
    marginVertical: widthPercentageToDP("2%"),
  },
  icon: {
    width: widthPercentageToDP("4%"),
    height: widthPercentageToDP("4%"),
  },
  jeton: {
    fontSize: widthPercentageToDP("5%"),
    marginTop: heightPercentageToDP("5%"),
  },
  cardNumber: {
    color: "grey",
    paddingTop: heightPercentageToDP("5%"),
  },
  scan: {
    justifyContent: "center",
    alignItems: "center",
  },
  containerLayout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const mdtp = (dispatch) => bindActionCreators({}, dispatch);

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(MonPorteFeuilleScreen);
