import { ApplicationProvider, Text, Avatar } from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import TopNavigatorMiniProfileLayout from "../../components/layout/TopNavigatorMiniProfileLayout";
import LottieView from "lottie-react-native";
import styles from "../../styles/styles";
import { ScrollView } from "react-native-gesture-handler";
import { Card } from "@ui-kitten/components";
import data from "../../temp/dataMesParisScreen";

class MesParisScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nomComplet: "",
      jeton: "",
      isLoading: true,
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
      return (
        <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
            <TopNavigatorMiniProfileLayout
              jeton={this.state.jeton}
              nomComplet={this.state.nomComplet}
            />
            <ScrollView>
              {data.mesParis.map((item, i) => (
                <View style={styles.cardMesParis} key={i}>
                  <Card>
                    <View style={styles.iconContainerMesParis}>
                      <LottieView
                        style={styles.iconMesParis}
                        autoPlay={true}
                        loop={true}
                        source={item.resultat == 1 ? winIcon : losseIcon}
                      />
                      <CompDateHeure
                        competCut={item.competCut}
                        date={item.date}
                        heure={item.heure}
                      />
                      <View style={styles.descriptionMesParis1}>
                        <Avatar size="giant" source={item.equipe1.iconLink} />
                        <Avatar size="giant" source={item.equipe2.iconLink} />
                      </View>
                      <Score
                        eq1={item.equipe1.score}
                        eq2={item.equipe2.score}
                      />
                      <Name eq1={item.equipe1.nom} eq2={item.equipe2.nom} />

                      <View
                        style={[
                          styles.controlContainer,
                          {
                            backgroundColor:
                              item.resultat == 1
                                ? styles.colors.blue
                                : styles.colors.red,
                          },
                        ]}
                      >
                        <Text status="control">
                          {item.resultat == 1 ? "+" : "-"} {item.jeton}
                        </Text>
                      </View>
                    </View>
                  </Card>
                </View>
              ))}
            </ScrollView>
          </SafeAreaView>
        </ApplicationProvider>
      );
    }
  }

  async componentDidMount() {
    await this.setState({
      nomComplet: data.nomComplet,
      jeton: data.jeton,
      isLoading: false,
    });
  }
}

const CompDateHeure = ({ competCut, date, heure }) => (
  <View style={styles.descriptionMesParis}>
    <View style={styles.fontContDescMesParis}>
      <Text style={styles.fontDescMesParis1}>{competCut}</Text>
    </View>
    <View style={styles.fontContDescMesParis}>
      <Text style={styles.fontDescMesParis2}>
        {date} {heure}
      </Text>
    </View>
  </View>
);

const Score = ({ eq1, eq2 }) => (
  <View style={styles.descriptionMesParis1}>
    <Text>{eq1}</Text>
    <Text>{eq2}</Text>
  </View>
);

const Name = ({ eq1, eq2 }) => (
  <View style={styles.descriptionMesParis1}>
    <View style={styles.fontContDescMesParis}>
      <Text style={styles.fontDescMesParis3}>{eq1}</Text>
    </View>
    <View style={styles.fontContDescMesParis}>
      <Text style={styles.fontDescMesParis3}>{eq2}</Text>
    </View>
  </View>
);

const winIcon = require("../../../../assets/lottie/21192-premium-gold.json");
const losseIcon = require("../../../../assets/lottie/45514-no-data.json");
const styless = StyleSheet.create({});

export default MesParisScreen;
