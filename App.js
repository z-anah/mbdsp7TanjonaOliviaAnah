import React, { useEffect, useState } from "react";
import i18n from "i18n-js";
import localization from "./src/app/utilities/localization";
import { Provider } from "react-redux";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import NavigationContainerApp from "./src/app/navigation/NavigationContainerApp";
import store from "./src/app/redux/store";
import { IconRegistry } from "@ui-kitten/components";
import DeepLinking from "./src/app/containers/temp/DeepLinking";
import * as Linking from "expo-linking";
import { Text } from "react-native";
i18n.translations = localization;
i18n.locale = "fr";

export default function App() {
  const [data, setData] = useState(null);

  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    setData(data);
  }

  useEffect(() => {
    async function getInitialURL() {
      const i = await Linking.getInitialURL();
      if (i) setData(Linking.parse(i));
    }
    Linking.addEventListener("url", handleDeepLink);
    if (!data) getInitialURL();
    console.log(data);
  }, []);
  return (
    <Provider store={store}>
      <Text>{JSON.stringify(data)}</Text>
      <IconRegistry icons={EvaIconsPack} />
      <NavigationContainerApp />
    </Provider>
  );
}
