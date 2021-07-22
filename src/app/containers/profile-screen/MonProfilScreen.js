import {
  ApplicationProvider,
  Avatar,
  Button,
  Card,
  Datepicker,
  Divider,
  Icon,
  Input,
  Layout,
  Modal,
  Text,
  TopNavigation,
  TopNavigationAction,
} from "@ui-kitten/components";
import * as React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { DOMAIN_NODE, updateByIdUtilisateur, upload } from "../../api/api";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import styles from "../../styles/styles";
import i18n from "i18n-js";
import LottieView from "lottie-react-native";
import { setUser } from "../../redux/action";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

class MonProfilScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      hasCameraPermission: null,
      isSaved: "#8F9BB3",
    };
  }
  render() {
    const {
      ok,
      no,
      message,
      nomCompletUtilisateur,
      dateNaissanceUtilisateur,
      emailUtilisateur,
      isLoading,
      profile,
      isSaved,
    } = this.state;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          {isLoading ? (
            <LottieView
              autoPlay={true}
              loop={true}
              source={require("../../../../assets/lottie/7929-run-man-run.json")}
            />
          ) : (
            <>
              <TopNavigation
                accessoryLeft={() => this.BackAction()}
                title="Mon profile"
                alignment="center"
              />
              <Divider />
              <View style={[styles.loginContainer]}>
                <Avatar style={styles.avatar} source={profile} />

                <View style={styless.containerLayout}>
                  <View style={styless.layout} level="3">
                    <TouchableOpacity onPress={() => this._getPhotoLibrary()}>
                      <Icon
                        name="image-outline"
                        style={styless.icon}
                        fill="#8F9BB3"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styless.layout} level="2">
                    <TouchableOpacity onPress={() => this._saveProfile()}>
                      <Icon
                        name="save-outline"
                        style={styless.icon}
                        fill={isSaved}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styless.layout} level="1">
                    <TouchableOpacity onPress={() => this._getPhotoCamera()}>
                      <Icon
                        name="camera-outline"
                        style={styless.icon}
                        fill="#8F9BB3"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
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
                <Button
                  style={styles.loginForm}
                  onPress={() => this.updateByIdUtilisateurView()}
                >
                  {i18n.t("TRL0019")}
                </Button>
                <Button
                  style={styles.loginForm}
                  onPress={() => this.props.navigation.push("PointVenteScreen")}
                >
                  {i18n.t("TRL0020")}
                </Button>
                <Button style={styles.loginForm} onPress={() => this.signUp()}>
                  {i18n.t("TRL0021")}
                </Button>
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
              {message}
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
  signUp = () => {
    this.props.navigation.push("Identification");
  };
  _saveProfile = async () => {
    try {
      const profilUtilisateur = await upload(this.state.profile.uri);
      this.setState({
        isSaved: "green",
        profilUtilisateur,
      });
      await this.updateByIdUtilisateurView();
    } catch (error) {
      this.setState({ no: true, message: error.message, isLoading: false });
    }
  };
  _getPhotoLibrary = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [3, 3],
    });
    if (!result.cancelled) {
      this.setState({ profile: { uri: result.uri } });
    }
    this.setState({
      isSaved: "red",
    });
  };
  _getPhotoCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 3],
      quality: 1,
      base64: true,
    });
    if (!result.cancelled) {
      this.setState({ profile: { uri: result.uri } });
    }
    this.setState({
      isSaved: "red",
    });
  };
  componentDidMount = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    const permissionResult = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === "granted" });

    const {
      nomCompletUtilisateur,
      soldeUtilisateur,
      profilUtilisateur,
      dateNaissanceUtilisateur,
      emailUtilisateur,
    } = this.props.counter.dataUser;
    this.setState({
      nomCompletUtilisateur,
      soldeUtilisateur,
      profilUtilisateur,
      dateNaissanceUtilisateur: new Date(dateNaissanceUtilisateur),
      emailUtilisateur,
    });

    if (profilUtilisateur === "")
      this.setState({
        profile: require("../../../../assets/icon.png"),
      });
    else
      this.setState({
        profile: {
          uri: `${DOMAIN_NODE}/api/download/${profilUtilisateur}`,
        },
      });
  };
  updateByIdUtilisateurView = async () => {
    try {
      this.setState({ isLoading: true });
      const { idUtilisateur } = this.props.counter.dataUser;
      const data = await updateByIdUtilisateur(this.state, idUtilisateur);
      this.props.setUser(data.result);
      this.setState({ ok: true, message: data.message, isLoading: false });
    } catch (error) {
      this.setState({ no: true, message: error.message, isLoading: false });
    }
  };
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
  containerLayout: {
    marginBottom: heightPercentageToDP("2%"),
    flexDirection: "row",
  },
  layout: {
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    padding: 8,
    justifyContent: "center",
  },
  icon: {
    width: widthPercentageToDP("4%"),
    height: widthPercentageToDP("4%"),
    marginHorizontal: widthPercentageToDP("3%"),
  },
});

const CalendarIcon = (props) => <Icon {...props} name="calendar" />;
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

export default connect(mtp, mdtp)(MonProfilScreen);
