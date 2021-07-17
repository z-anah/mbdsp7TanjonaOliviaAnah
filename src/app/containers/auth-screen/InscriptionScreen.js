import React from "react";
import {
  ApplicationProvider,
  Button,
  Text,
  Input,
  Icon,
  Avatar,
  Datepicker,
  Modal,
  Card,
  Layout,
} from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ContainerStyle from "../../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "../../styles/styles";
import { TouchableWithoutFeedback } from "@ui-kitten/components/devsupport";
import i18n from "i18n-js";
import LottieView from "lottie-react-native";
import { signUp } from "../../api/api";

class InscriptionScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      motdepasseUtilisateur: "",
      nomCompletUtilisateur: "",
      emailUtilisateur: "",
      secureTextEntry: true,
      isLoading: false,
      visible: false,
      profilUtilisateur: "",
      dateNaissanceUtilisateur: new Date(1980, 1, 1),
    };
  }

  render() {
    const {
      nomCompletUtilisateur,
      dateNaissanceUtilisateur,
      secureTextEntry,
      motdepasseUtilisateur,
      emailUtilisateur,
    } = this.state;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          {this.state.isLoading ? (
            <LottieView
              autoPlay={true}
              loop={true}
              source={require("../../../../assets/lottie/7929-run-man-run.json")}
            />
          ) : (
            <View style={[styles.loginContainer]}>
              <Avatar
                style={styles.loginLogo}
                source={require("../../../../assets/adaptive-icon.png")}
              />
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
                date={dateNaissanceUtilisateur}
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
              <Input
                style={styles.loginForm}
                value={motdepasseUtilisateur}
                label={i18n.t("TRL0010")}
                placeholder={i18n.t("TRL0010")}
                accessoryRight={(props) => this.renderIcon(props)}
                secureTextEntry={secureTextEntry}
                onChangeText={this.motdepasseUtilisateur}
              />
              <Button style={styles.loginForm} onPress={() => this.signUp()}>
                {i18n.t("TRL0011")}
              </Button>
              <Button
                style={styles.loginForm}
                onPress={() => this.props.navigation.push("Identification")}
              >
                {i18n.t("TRL0004")}
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
          )}
        </SafeAreaView>

        <Modal
          visible={this.state.visible}
          backdropStyle={styles.backdrop}
          onBackdropPress={() => this.setState({ visible: false })}
        >
          <Card style={styles.card}>
            <View style={styles.errorLottie}>
              <LottieView
                autoPlay={true}
                loop={true}
                source={require("../../../../assets/lottie/38463-error.json")}
              />
            </View>
            <Text style={styles.textCard}>Erreur: {this.state.message}</Text>
            <Button
              status="danger"
              size="small"
              onPress={() => this.setState({ visible: false })}
            >
              OK
            </Button>
          </Card>
        </Modal>
      </ApplicationProvider>
    );
  }
  componentDidMount() {
    this.setState({ loc: i18n.locale === "en-MG" ? "MLG" : "FR" });
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
  motdepasseUtilisateur = (motdepasseUtilisateur) => {
    this.setState({ motdepasseUtilisateur });
  };
  signUp = async () => {
    this.setState({ isLoading: true });
    try {
      await signUp(this.state);
      this.props.navigation.push("Identification", { ok: true });
      this.setState({ isLoading: false });
    } catch (error) {
      this.setState({
        visible: true,
        message: error.message,
        isLoading: false,
      });
    }
  };
  toggleSecureEntry = () => {
    this.setState({ secureTextEntry: !this.state.secureTextEntry });
  };
  renderIcon = (props) => (
    <TouchableWithoutFeedback onPress={() => this.toggleSecureEntry()}>
      <Icon {...props} name={this.state.secureTextEntry ? "eye-off" : "eye"} />
    </TouchableWithoutFeedback>
  );
  renderCaption = () => {
    return (
      <View style={styless.captionContainer}>
        {AlertIcon(styless.captionIcon)}
        <Text style={styless.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
}

const AlertIcon = (props) => <Icon {...props} name="alert-circle-outline" />;
const CalendarIcon = (props) => <Icon {...props} name="calendar" />;
const mapStateToProps = (state) => {
  return state;
};

const styless = StyleSheet.create({
  captionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: "400",
    color: "red",
  },
});
export default connect(mapStateToProps)(InscriptionScreen);
