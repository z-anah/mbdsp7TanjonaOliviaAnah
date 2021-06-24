import * as React from "react";
import i18n from "i18n-js";
import localization from "./src/app/utilities/localization";
import { Provider } from "react-redux";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import NavigationContainerApp from "./src/app/navigation/NavigationContainerApp";
import store from "./src/app/redux/store";
import { IconRegistry } from "@ui-kitten/components";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";

i18n.translations = localization;
i18n.locale = "fr";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <NavigationContainerApp />
      </Provider>
    );
  }
}
