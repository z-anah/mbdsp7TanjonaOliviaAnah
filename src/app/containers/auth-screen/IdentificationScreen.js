import React from "react";
import {
  ApplicationProvider,
  Button,
  Text,
  Input,
  Avatar,
  SelectItem,
  Select,
  Layout,
  IndexPath,
  Modal,
  Card,
} from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import ContainerStyle from "../../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";
import { authentification } from "../../api/api";

class IdentificationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: new IndexPath(0),
      langs: ["🇫🇷", "🇲🇬"],
      lang: "🇫🇷",
      ok: false,
      no: false,
      message: "",
      // emailUtilisateur: "admin@admin.com",
      // motdepasseUtilisateur: "admin",
      emailUtilisateur: "teste@gmail.com",
      motdepasseUtilisateur: "testestes",
      isLoading: false,
    };
  }
  render() {
    const {
      ok,
      no,
      message,
      emailUtilisateur,
      motdepasseUtilisateur,
      isLoading,
    } = this.state;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeAreaClean]}>
          {isLoading ? (
            <LottieView
              autoPlay={true}
              loop={true}
              source={require("../../../../assets/lottie/7929-run-man-run.json")}
            />
          ) : (
            <>
              <View style={[styles.loginContainer]}>
                <Avatar
                  style={styles.loginLogo}
                  source={require("../../../../assets/adaptive-icon.png")}
                />
                <Input
                  style={styles.loginForm}
                  placeholder={i18n.t("TRL0009")}
                  label={i18n.t("TRL0009")}
                  value={emailUtilisateur}
                  onChange={this.emailUtilisateur}
                />
                <Input
                  style={styles.loginForm}
                  label={i18n.t("TRL0010")}
                  placeholder={i18n.t("TRL0010")}
                  value={motdepasseUtilisateur}
                  onChange={this.motdepasseUtilisateur}
                />
                <Button
                  style={styles.loginForm}
                  onPress={() => this._authentification()}
                >
                  {i18n.t("TRL0008")}
                </Button>
                <Button
                  style={styles.loginForm}
                  onPress={() => this.props.navigation.push("Inscription")}
                >
                  {i18n.t("TRL0011")}
                </Button>
                <TouchableOpacity
                  onPress={() => this.props.navigation.push("Recuperation")}
                >
                  <Text style={styles.underline} status="info">
                    {i18n.t("TRL0012")}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.push("Conditions Generales")
                  }
                >
                  <Text style={styles.underline} status="info">
                    {i18n.t("TRL0013")}
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  position: "absolute",
                  marginTop: heightPercentageToDP("5%"),
                  marginLeft: heightPercentageToDP("2%"),
                  width: widthPercentageToDP("25%"),
                }}
                level="1"
              >
                <Select
                  selectedIndex={this.state.i}
                  onPress={() => console.log("hello")}
                  onSelect={(i) => {
                    if (i.row == 0) {
                      i18n.locale = "fr";
                    } else i18n.locale = "en-MG";
                    this.setState({ lang: this.state.langs[i.row] });
                  }}
                  value={this.state.lang}
                >
                  {this.state.langs.map((t, i) => (
                    <SelectItem key={i} title={t} />
                  ))}
                </Select>
              </View>
            </>
          )}
        </SafeAreaView>

        <Modal
          visible={ok}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => this.setState({ visible: false })}
        >
          <Card style={styles.card}>
            <View style={styles.cardLottie}>
              <LottieView
                autoPlay={true}
                loop={false}
                source={require("../../../../assets/lottie/972-done.json")}
              />
            </View>
            <Text style={styles.textCard} status="success">
              {i18n.t("TRL0018")}
            </Text>
            <Button
              status="success"
              size="small"
              onPress={() => this.setState({ ok: false })}
            >
              OK
            </Button>
          </Card>
        </Modal>

        <Modal
          visible={no}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => this.setState({ visible: false })}
        >
          <Card style={styles.card}>
            <View style={styles.cardLottie}>
              <LottieView
                autoPlay={true}
                loop={false}
                source={require("../../../../assets/lottie/38463-error.json")}
              />
            </View>
            <Text style={styles.textCard} status="danger">
              {message}
            </Text>
            <Button
              status="danger"
              size="small"
              onPress={() => this.setState({ no: false })}
            >
              OK
            </Button>
          </Card>
        </Modal>
      </ApplicationProvider>
    );
  }
  motdepasseUtilisateur(motdepasseUtilisateur) {
    this.setState({ motdepasseUtilisateur });
  }
  emailUtilisateur(emailUtilisateur) {
    this.setState({ emailUtilisateur });
  }
  async _authentification() {
    try {
      if (i18n.locale !== "fr") this.setState({ loc: "MLG" });
      this.setState({ isLoading: true });
      await authentification(this.state);
      this.props.navigation.push("NavigationBottom");
    } catch (error) {
      this.setState({ no: true, message: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  componentDidMount() {
    const { params } = this.props.route;
    if (params && params.ok) {
      this.setState({ ok: true });
      this.timeoutHandle = setTimeout(() => {
        this.setState({ ok: false });
      }, 3000);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(IdentificationScreen);
