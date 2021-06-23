import React from "react";
import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  Icon,
  TopNavigation,
  Text,
  Card,
  TopNavigationAction,
} from "@ui-kitten/components";
import { SafeAreaView, View } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";
import { ScrollView } from "react-native-gesture-handler";
import { getConditionsGenerales } from "../api/api";

const BackIcon = (props) => <Icon {...props} name="arrow-back" />;

class ConditionsGeneralesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { conditions: [] };
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeAreaClean]}>
          <ScrollView>
            <TopNavigation
              accessoryLeft={() => this.BackAction()}
              title={i18n.t("TRL0013")}
              alignment="center"
            />
            <Divider />
            {this.state.conditions.map((c, i) => (
              <View key={i}>
                <Card>
                  <Text>
                    {i18n.t("TRL0017")} {i + 1} :{" "}
                    {i18n.locale === "fr" ? c.title : c.titleMlg}
                  </Text>
                </Card>
                <Card>
                  <Text>
                    {this.format(
                      i18n.locale === "fr" ? c.description : c.descriptionMlg
                    )}
                  </Text>
                </Card>
              </View>
            ))}
          </ScrollView>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
  format(d) {
    const t = d.replace(/\\n/g, "\n\n");
    return t;
  }
  BackAction = () => (
    <TopNavigationAction
      icon={BackIcon}
      onPress={() => this.props.navigation.goBack()}
    />
  );
  async componentDidMount() {
    try {
      let conditions = await getConditionsGenerales();
      this.setState({ conditions: conditions });
    } catch (error) {}
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ConditionsGeneralesScreen);
