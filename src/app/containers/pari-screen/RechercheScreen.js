import {
  ApplicationProvider,
  Avatar,
  Button,
  Icon,
  Input,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View, Text, Animated } from "react-native";
import * as eva from "@eva-design/eva";
import LottieView from "lottie-react-native";
import ContainerStyle from "../../styles/ContainerStyle";
import TopNavigatorMiniProfileLayout from "../../components/layout/TopNavigatorMiniProfileLayout";
import Swipeable from "react-native-gesture-handler/Swipeable";
import {
  RectButton,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Card } from "@ui-kitten/components";
import data1 from "../../temp/dataAccueilleScreen";
import styles from "../../styles/styles";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class RechercheScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      nomComplet: "",
      jeton: "",
      competitions: [],
      matchs: [],
      recherche: "",
      recherche1: "",
      recherche2: "",
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
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
            <TopNavigatorMiniProfileLayout
              jeton={soldeUtilisateur}
              nomComplet={nomCompletUtilisateur}
            />

            <ScrollView>
              {/* {this.formulaireRecherche()} */}
              <Button onPress={() => this.scanner()}>Scanner</Button>
              <Card>
                <View style={styless.title}>
                  <Text>{"COMPETITIONS"}</Text>
                </View>
              </Card>
              <Text style={{ paddingHorizontal: widthPercentageToDP("2%") }}>
                {"Glisser a gauche pour gerer la notification"}
              </Text>
              {this.state.competitions.map((item, i) => (
                <Swipeable
                  key={i}
                  renderLeftActions={(progress, dragX) =>
                    this.renderLeftActions(dragX, item, this.animation, i)
                  }
                >
                  <Card>
                    <View style={styless.competition}>
                      <Text>{item.nom}</Text>
                      <Avatar size="giant" source={item.iconLink} />
                    </View>
                  </Card>
                </Swipeable>
              ))}
              {/* {this.matchs()} */}
              <View style={{ height: heightPercentageToDP("3%") }} />
            </ScrollView>
          </SafeAreaView>
        </ApplicationProvider>
      );
    }
  }

  formulaireRecherche() {
    return (
      <>
        <Input
          placeholder="Competiton"
          accessoryRight={renderIcon}
          value={this.state.recherche}
          onChangeText={(value) => this.setRecherche(value)}
        />

        <Input
          placeholder="Equipe 1"
          accessoryRight={renderIcon}
          value={this.state.recherche1}
          onChangeText={(value) => this.setRecherche1(value)}
        />

        <Input
          placeholder="Equipe 2"
          accessoryRight={renderIcon}
          value={this.state.recherche2}
          onChangeText={(value) => this.setRecherche2(value)}
        />

        <Button onPress={() => this.rechercher()}>Rechercher</Button>
      </>
    );
  }

  matchs() {
    return (
      <>
        <Card>
          <View style={styless.title}>
            <Text>{"MATCHS"}</Text>
          </View>
        </Card>
        {this.state.matchs.map((card, i) => (
          <Card key={i}>
            <View style={styles.cardEntete}>
              <TouchableOpacity
                onPress={() => this.afficherQrCode(card.linkCompetition)}
              >
                <Icon style={styles.icon} fill="#8F9BB3" name="share-outline" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => this.afficherDetail()}>
                <Icon style={styles.icon} fill="#8F9BB3" name="menu-outline" />
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
                  <Avatar style={styles.cardFootLogo} source={equipe.logo} />
                  <Text style={styles.cardFootEquipe}>{equipe.nom}</Text>
                </View>
              ))}
            </View>
          </Card>
        ))}
      </>
    );
  }

  rechercher = async () => {};

  scanner = async () => {
    this.props.navigation.push("BarCodeScannerScreen", {
      screen: "RechercheScreen",
    });
  };

  afficherQrCode = (linkCompetition) => {
    alert(`afficher qr code de la competition  ${linkCompetition}`);
  };

  afficherDetail = () => {
    alert("Les details sont en cours de developpement");
  };

  setRecherche = (value) => {
    this.setState({ recherche: value });
  };

  setRecherche1 = (value) => {
    this.setState({ recherche1: value });
  };

  setRecherche2 = (value) => {
    this.setState({ recherche2: value });
  };

  renderLeftActions = (dragX, competition, animations, i) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton
        onPress={() => {
          alert(competition);
          if (competition.isFollowing == 1) {
            animations[i].play(52, 0);
          } else {
            animations[i].play(89, 52);
          }
        }}
      >
        <Animated.View
          style={[
            {
              transform: [{ translateX: trans }],
            },
          ]}
        >
          <Card>
            <LottieView
              ref={(animation) => {
                animations[i] = animation;
              }}
              autoPlay={true}
              loop={false}
              source={require("../../../../assets/lottie/49009-follow-animation-for-entri.json")}
            />
          </Card>
        </Animated.View>
      </RectButton>
    );
  };

  async componentDidMount() {
    await this.setState({
      nomComplet: data.nomComplet,
      jeton: data.jeton,
      competitions: data.competitions,
      matchs: data1.data,
    });
    this.animation = new Array(this.state.competitions.length);
    this.setState({
      isLoading: false,
    });
    this.state.competitions.map((competition, i) => {
      if (competition.isFollowing == 1) {
        this.animation[i].play(0, 52);
      } else {
        this.animation[i].play(52, 89);
      }
    });
  }
}

const renderIcon = (props) => <Icon {...props} name={"search-outline"} />;

// isFollowing: abonner a une competittion 1 OUI | 0 NON
const data = {
  nomComplet: "Tanjona",
  jeton: "1.980",
  competitions: [
    {
      nom: "FEMININE DIVISION 1",
      iconLink: require("../../../../assets/adaptive-icon.png"),
      year1: "2020",
      year2: "2021",
      isFollowing: 0,
    },
    {
      nom: "MANCHESTER",
      iconLink: require("../../../../assets/adaptive-icon.png"),
      year1: "2022",
      year2: "2023",
      isFollowing: 1,
    },
    {
      nom: "FEMININE DIVISION 1",
      iconLink: require("../../../../assets/adaptive-icon.png"),
      year1: "2020",
      year2: "2021",
      isFollowing: 0,
    },
  ],
};

const styless = StyleSheet.create({
  title: {
    alignItems: "center",
    alignContent: "center",
  },
  competition: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
  },
});

const mdtp = (dispatch) => bindActionCreators({}, dispatch);

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(RechercheScreen);
