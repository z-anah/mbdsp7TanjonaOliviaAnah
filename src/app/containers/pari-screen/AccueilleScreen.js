import {
  ApplicationProvider,
  Avatar,
  Card,
  Divider,
  Icon,
  Text,
} from "@ui-kitten/components";
import * as React from "react";
import Slider from "@react-native-community/slider";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import styles from "../../styles/styles";
import { TouchableOpacity } from "react-native-gesture-handler";

class AccueilleScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomComplet: "",
      jeton: "",
      competition: "",
      date: "",
      heure: "",
      linkCompetition: "",
      equipes: [],
      pay: 0,
      config: {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
      },
    };
  }

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          {/* top navigator */}
          <View style={[styles.topNav]}>
            <View style={styles.topNavContent}>
              <Text style={styles.topNavTitle}>Profile</Text>
              <Text>{this.state.nomComplet}</Text>
            </View>
            <View style={styles.topNavContent}>
              <Text style={[styles.topNavTitle, { textAlign: "right" }]}>
                Balance (Jetons)
              </Text>
              <Text style={{ textAlign: "right" }}>{this.state.jeton}</Text>
            </View>
          </View>
          {/* end top navigator */}

          <Divider />

          {/* card */}
          <View style={styles.contentUnderTopNav}>
            <View style={styles.card}>
              <Card>
                <View style={styles.cardEntete}>
                  <TouchableOpacity onPress={() => this.afficherQrCode()}>
                    <Icon
                      style={styles.icon}
                      fill="#8F9BB3"
                      name="share-outline"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.afficherDetail()}>
                    <Icon
                      style={styles.icon}
                      fill="#8F9BB3"
                      name="menu-outline"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.cardTitle}>
                  <Text>{this.state.competition}</Text>
                  <Text>{this.state.date}</Text>
                  <Text>{this.state.heure}</Text>
                </View>
                <View style={styles.cardEquipe}>
                  {this.state.equipes.map((equipe, i) => (
                    <View key={i}>
                      <Avatar
                        style={styles.cardFootLogo}
                        source={equipe.logo}
                      />
                      <Text style={styles.cardFootEquipe}>{equipe.nom}</Text>
                    </View>
                  ))}
                </View>
              </Card>
            </View>
            <View style={styles.cardSlider}>
              <Text style={styles.sliderPay}>{this.state.pay} Jetons</Text>
              <Slider
                style={{ width: 200, height: 40 }}
                minimumValue={100}
                maximumValue={1000}
                minimumTrackTintColor="#f24262"
                maximumTrackTintColor="#e6e6e6"
                value={this.state.pay}
                onValueChange={(value) => this.changePay(value)}
              />
            </View>
          </View>
          {/* end card */}
        </SafeAreaView>
      </ApplicationProvider>
    );
  }

  componentDidMount() {
    this.setState({
      nomComplet: data.nomComplet,
      jeton: data.jeton,
      competition: data.competition,
      date: data.date,
      heure: data.heure,
      linkCompetition: data.linkCompetition,
      equipes: data.equipes,
      pay: data.pay,
    });
  }

  afficherQrCode = () => {
    alert(`afficher qr code de la competition  ${this.state.linkCompetition}`);
  };

  afficherDetail = () => {
    alert("afficher detail de la competition");
  };

  changePay = (value) => {
    this.setState({
      pay: Math.trunc(value),
    });
  };
}

const data = {
  nomComplet: "Tanjona",
  jeton: "1.980",
  competition: "Ligue des champions",
  date: "Mardi 10 Octobre 2021",
  heure: "22h30",
  linkCompetition: "je.suis/un-lien/competition",
  equipes: [
    {
      id: 1,
      logo: require("../../../../assets/adaptive-icon.png"),
      nom: "Chelsea F.C",
    },
    {
      id: 2,
      logo: require("../../../../assets/adaptive-icon.png"),
      nom: "Chelsea F.C",
    },
  ],
  pay: 500,
};

const styless = StyleSheet.create({});

export default AccueilleScreen;
