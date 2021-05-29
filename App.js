import * as React from "react";

import NavigationContainerApp from "./src/app/navigation/NavigationContainerApp";
import i18n from "i18n-js";
import localization from "./src/app/utilities/localization";

i18n.translations = localization;
i18n.locale = "fr";

export default class App extends React.Component {
  render() {
    return <NavigationContainerApp />;
  }
}
