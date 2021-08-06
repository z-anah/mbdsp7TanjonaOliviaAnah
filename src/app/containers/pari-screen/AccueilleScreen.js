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
import { createPari, DOMAIN_NODE, matchsForPari } from "../../api/api";

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
                            onPress={() => this.afficherQrCode(card._id)}
                          >
                            <Icon
                              style={styles.icon}
                              fill="#8F9BB3"
                              name="share-outline"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity
                            onPress={() =>
                              this.afficherDetail("en cours de developpement")
                            }
                          >
                            <Icon
                              style={styles.icon}
                              fill="#8F9BB3"
                              name="menu-outline"
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.cardTitle}>
                          <Text>{card.competition.nomcompetition}</Text>
                          {this.toLocaleDateTimeString(card.dateHeureMatch)}
                        </View>
                        <View style={styles.cardEquipe}>
                          {this.equipe(
                            card.equipe1.nomequipe,
                            card.equipe1.logoequipe
                          )}
                          {this.equipe(
                            card.equipe2.nomequipe,
                            card.equipe2.logoequipe
                          )}
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
                  alert("Plus de pari, refaire?");
                }}
                cardIndex={0}
                stackSize={3}
                backgroundColor={"white"}
                overlayLabels={overlayLabels}
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
              <Text />
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

  toLocaleDateTimeString(dateHeureMatch) {
    <>
      <Text>{new Date(dateHeureMatch).toLocaleDateString("en-US")}</Text>
      <Text>{new Date(dateHeureMatch).toLocaleTimeString("en-US")}</Text>
    </>;
  }

  equipe(nomequipe, logoequipe) {
    return (
      <View>
        <Avatar
          style={styles.cardFootLogo}
          source={{
            uri: `${DOMAIN_NODE}/api/download/${logoequipe}`,
          }}
        />
        <Text style={styles.cardFootEquipe}>{nomequipe}</Text>
      </View>
    );
  }

  async componentDidMount() {
    try {
      await this.setState({
        data: await matchsForPari(),
        nomComplet: data.nomComplet,
        jeton: data.jeton,
        pay: data.pay,
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({
        isLoading: false,
      });
    }
  }

  onSwipedLeft = async (cardIndex) => {
    await this.createPariView({
      idMatch: this.state.data[cardIndex]._id,
      monpari: 1,
    });
  };

  createPariView = async (form1) => {
    const { _id } = this.props.counter.dataUser;
    let { monpari, idMatch } = form1;
    let form = {
      idMatch,
      idUtilisateur: _id,
      idTypePari: "60df67d6e4541c2b24ead8db",
      monpari,
      montantMise: "",
    };
    console.log(form);
    // createPari(form);
  };

  onSwipedRight = async (cardIndex) => {
    await this.createPariView({
      idMatch: this.state.data[cardIndex]._id,
      monpari: -1,
    });
  };

  onSwipedTop = async (cardIndex) => {
    await this.createPariView({
      idMatch: this.state.data[cardIndex]._id,
      monpari: 0,
    });
  };

  afficherQrCode = (_id) => {
    this.setState({
      isVisible: true,
      link: `exp://192.168.88.180:19000/pari/?_id=${_id}`,
    });
  };

  afficherDetail = (linkCompetition) => {
    alert(`afficher qr code de la competition  ${linkCompetition}`);
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

const overlayLabels = {
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
};

const mdtp = (dispatch) => bindActionCreators({}, dispatch);

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(AccueilleScreen);
