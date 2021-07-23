import {
  ApplicationProvider,
  Avatar,
  Button,
  Card,
  Icon,
  Modal,
  Text,
  Tooltip,
} from "@ui-kitten/components";
import * as React from "react";
import Slider from "@react-native-community/slider";
import { SafeAreaView, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import styles from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";
import Swiper from "react-native-deck-swiper";
import LottieView from "lottie-react-native";
import TopNavigatorMiniProfileLayout from "../../components/layout/TopNavigatorMiniProfileLayout";
import data from "../../temp/dataAccueilleScreen";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import QRCode from "react-native-qrcode-svg";
import I18n from "i18n-js";

class AccueilleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      nomComplet: "",
      jeton: "",
      pay: 0,
      config: {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      },
      visible: false,
      isVisible: false,
      link: "",
    };
  }
  render() {
    if (this.state.isLoading) {
      return (
        <LottieView
          autoPlay={true}
          loop={true}
          source={require("../../../../assets/lottie/7929-run-man-run.json")}
        />
      );
    } else {
      const { nomCompletUtilisateur, soldeUtilisateur } =
        this.props.counter.dataUser;
      const { isVisible, link } = this.state;
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
            <TopNavigatorMiniProfileLayout
              jeton={soldeUtilisateur}
              nomComplet={nomCompletUtilisateur}
            />

            {/* card */}
            <View style={styles.contentUnderTopNav}>
              <Swiper
                cards={this.state.data}
                renderCard={(card) => {
                  return (
                    <View style={styles.card}>
                      <Card>
                        <View style={styles.cardEntete}>
                          <TouchableOpacity
                            onPress={() =>
                              this.afficherQrCode(card.linkCompetition)
                            }
                          >
                            <Icon
                              style={styles.icon}
                              fill="#8F9BB3"
                              name="share-outline"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() => this.afficherDetail()}
                          >
                            <Icon
                              style={styles.icon}
                              fill="#8F9BB3"
                              name="menu-outline"
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.cardTitle}>
                          <Text>{card.competition}</Text>
                          <Text>{card.date}</Text>
                          <Text>{card.heure}</Text>
                        </View>
                        <View style={styles.cardEquipe}>
                          {card.equipes.map((equipe, i) => (
                            <View key={i}>
                              <Avatar
                                style={styles.cardFootLogo}
                                source={equipe.logo}
                              />
                              <Text style={styles.cardFootEquipe}>
                                {equipe.nom}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </Card>
                    </View>
                  );
                }}
                onSwipedLeft={(cardIndex) => {
                  this.onSwipedLeft(cardIndex);
                }}
                onSwipedRight={(cardIndex) => {
                  this.onSwipedRight(cardIndex);
                }}
                onSwipedTop={(cardIndex) => {
                  this.onSwipedTop(cardIndex);
                }}
                onSwipedBottom={() => {}}
                onSwiped={(cardIndex) => {
                  alert(`card index ${cardIndex}`);
                }}
                onSwipedAll={() => {
                  alert("all swiped");
                }}
                cardIndex={0}
                stackSize={3}
                backgroundColor={"white"}
                overlayLabels={{
                  left: {
                    title: "1X",
                    style: styles.swipeLeft,
                  },
                  right: {
                    title: "2X",
                    style: styles.swipeRight,
                  },
                  top: {
                    title: "X",
                    style: styles.swipeTop,
                  },
                }}
              />
              <View style={styles.cardSlider}>
                <Text style={styles.sliderPay}>{this.state.pay} Jetons</Text>
                <Slider
                  style={{ width: 200, height: 40 }}
                  minimumValue={100}
                  maximumValue={500}
                  minimumTrackTintColor="#f24262"
                  maximumTrackTintColor="#e6e6e6"
                  value={this.state.pay}
                  onValueChange={(value) => this.changePay(value)}
                />
                <Tooltip
                  placement={"top"}
                  anchor={this.renderToggleButton}
                  visible={this.state.visible}
                  onBackdropPress={() => this.setState({ visible: false })}
                >
                  {tuto}
                </Tooltip>
              </View>
            </View>
            {/* end card */}
          </SafeAreaView>
          <Modal
            visible={isVisible}
            backdropStyle={styles.backdrop}
            onBackdropPress={() => this.setState({ isVisible: false })}
          >
            <Card style={styles.card}>
              <View style={styles.cardLottie}>
                <QRCode value={link} />
              </View>
              <Text style={styles.textCard} status="success">
                {I18n.t("TRL0018")}
              </Text>
              <Button
                status="success"
                size="small"
                onPress={() => this.setState({ isVisible: false })}
              >
                OK
              </Button>
            </Card>
          </Modal>
        </ApplicationProvider>
      );
    }
  }

  async componentDidMount() {
    await this.setState({
      data: [...data.data],
      nomComplet: data.nomComplet,
      jeton: data.jeton,
      pay: data.pay,
    });
    this.setState({
      isLoading: false,
    });
  }

  onSwipedLeft = async (cardIndex) => {
    alert(`1X ${this.state.data[cardIndex].id}`);
  };

  onSwipedRight = async (cardIndex) => {
    alert(`2X ${this.state.data[cardIndex].id}`);
  };

  onSwipedTop = async (cardIndex) => {
    alert(`X ${this.state.data[cardIndex].id}`);
  };

  afficherQrCode = (linkCompetition) => {
    alert(`afficher qr code de la competition  ${linkCompetition}`);
  };

  afficherDetail = () => {
    this.setState({
      isVisible: true,
      // TODO
      link: "http://awesome.link.qr",
    });
  };

  renderToggleButton = () => (
    <Button status="basic" onPress={() => this.setState({ visible: true })}>
      Tuto
    </Button>
  );

  changePay = (value) => {
    this.setState({
      pay: Math.trunc(value),
    });
  };
}

const tuto =
  "Glisser la carte\n\n👆 [X] En haut pour un match nul\n👈 [X1] À gauche pour choisir l'équipe gauche\n👉 [X2] À droite pour choisir l'équipe droite\n👇 En bas pour passer\n\n✨✨Bonne chance✨✨";

const mdtp = (dispatch) => bindActionCreators({}, dispatch);

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(AccueilleScreen);
