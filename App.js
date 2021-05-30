import * as React from "react";

import i18n from "i18n-js";
import localization from "./src/app/utilities/localization";
import { Provider } from "react-redux";
import { createStore } from "redux";

import NavigationContainerApp from "./src/app/navigation/NavigationContainerApp";
import store from "./src/app/redux/store";

i18n.translations = localization;
i18n.locale = "fr";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainerApp />
      </Provider>
    );
  }
}
