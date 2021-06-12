import { Platform, StatusBar } from "react-native";

export default {
  AndroidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight / 2 : 0,
  },
};
