import React, { useEffect, useState } from "react";
import * as Linking from "expo-linking";

export default function DeepLinking() {
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

  return <></>;
}
