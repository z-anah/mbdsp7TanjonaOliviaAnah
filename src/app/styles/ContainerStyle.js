import { Platform, StatusBar } from "react-native";

export default {
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
};
