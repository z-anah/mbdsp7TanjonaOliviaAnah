import {
  ApplicationProvider,
  Avatar,
  Button,
  Datepicker,
  Divider,
  Icon,
  Input,
  Layout,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DOMAIN_NODE } from "../../api/api";
import { widthPercentageToDP } from "react-native-responsive-screen";
import styles from "../../styles/styles";
import i18n from "i18n-js";
import { TouchableOpacity } from "react-native-gesture-handler";

class MonProfilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      nomCompletUtilisateur,
      soldeUtilisateur,
      profilUtilisateur,
      dateNaissanceUtilisateur,
      emailUtilisateur,
    } = this.props.counter.dataUser;
    let profil = null;
    if (profilUtilisateur === "")
      profil = require("../../../../assets/icon.png");
    else profil = { uri: `${DOMAIN_NODE}/api/download/${profilUtilisateur}` };
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <TopNavigation
            accessoryLeft={() => this.BackAction()}
            title="Mon profile"
            alignment="center"
          />
          <Divider />
          <View style={[styles.loginContainer]}>
            <Avatar style={styless.avatar} source={profil} />
            <Input
              style={styles.loginForm}
              placeholder={i18n.t("TRL0014")}
              label={i18n.t("TRL0014")}
              value={nomCompletUtilisateur}
              onChangeText={this.nomCompletUtilisateur}
            />
            <Datepicker
              style={styles.loginForm}
              label={i18n.t("TRL0015")}
              placeholder={i18n.t("TRL0015")}
              date={new Date(dateNaissanceUtilisateur)}
              accessoryRight={CalendarIcon}
              onSelect={this.dateNaissanceUtilisateur}
              min={new Date(1930, 1, 1)}
              max={new Date(2003, 1, 1)}
            />
            <Input
              style={styles.loginForm}
              placeholder={i18n.t("TRL0009")}
              label={i18n.t("TRL0009")}
              onChangeText={this.emailUtilisateur}
              value={emailUtilisateur}
            />
            <Button style={styles.loginForm} onPress={() => this.signUp()}>
              {i18n.t("TRL0019")}
            </Button>
            <Button
              style={styles.loginForm}
              onPress={() => this.props.navigation.push("Identification")}
            >
              {i18n.t("TRL0020")}
            </Button>
            <Button style={styles.loginForm} onPress={() => this.signUp()}>
              {i18n.t("TRL0021")}
            </Button>
          </View>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
  nomCompletUtilisateur = (nomCompletUtilisateur) => {
    this.setState({ nomCompletUtilisateur });
  };
  dateNaissanceUtilisateur = (dateNaissanceUtilisateur) => {
    this.setState({ dateNaissanceUtilisateur });
  };
  emailUtilisateur = (emailUtilisateur) => {
    this.setState({ emailUtilisateur });
  };
  BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.props.navigation.goBack()}
    />
  );
}

const styless = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 8,
    justifyContent: "center",
  },
  avatar: {
    width: widthPercentageToDP("30%"),
    height: widthPercentageToDP("30%"),
  },
});

const CalendarIcon = (props) => <Icon {...props} name="calendar" />;
const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

const mdtp = (dispatch) => bindActionCreators({}, dispatch);

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(MonProfilScreen);
