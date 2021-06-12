import {
  ApplicationProvider,
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import * as React from "react";
import { SafeAreaView } from "react-native";
import * as eva from "@eva-design/eva";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MesParisScreen from "../containers/pari-screen/MesParisScreen";
import RechercheScreen from "../containers/pari-screen/RechercheScreen";
import ContainerStyle from "../styles/ContainerStyle";
import AccueilleScreen from "../containers/pari-screen/AccueilleScreen";
import MonProfilScreen from "../containers/profile-screen/MonProfilScreen";
import MonPorteFeuilleScreen from "../containers/wallet-screen/MonPorteFeuilleScreen";

const { Navigator, Screen } = createBottomTabNavigator();

class NavigationBottom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
          <TabNavigator />
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const TabNavigator = () => (
  <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
    <Screen name="MesParisScreen" component={MesParisScreen} />
    <Screen name="AccueilleScreen" component={AccueilleScreen} />
    <Screen name="RechercheScreen" component={RechercheScreen} />
    <Screen name="MonProfilScreen" component={MonProfilScreen} />
    <Screen name="MonPorteFeuilleScreen" component={MonPorteFeuilleScreen} />
  </Navigator>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab icon={HomeOutline} />
    <BottomNavigationTab icon={ArchiveOutline} />
    <BottomNavigationTab icon={SearchOutline} />
    <BottomNavigationTab icon={PersonIcon} />
    <BottomNavigationTab icon={BookOutline} />
  </BottomNavigation>
);

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;
const ArchiveOutline = (props) => <Icon {...props} name="archive-outline" />;
const HomeOutline = (props) => <Icon {...props} name="home-outline" />;
const SearchOutline = (props) => <Icon {...props} name="search-outline" />;
const BookOutline = (props) => <Icon {...props} name="book-outline" />;

export default NavigationBottom;
