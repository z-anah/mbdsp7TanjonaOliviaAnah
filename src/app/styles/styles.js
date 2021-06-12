import { widthPercentageToDP } from "react-native-responsive-screen";

const colors = {
  red: "#EC2379",
  blue: "#0070FF",
  gray: "#777777",
  white: "#ffffff",
  black: "#000000",
};

export default {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" },
  loginForm: {
    width: widthPercentageToDP("50%"),
    marginBottom: widthPercentageToDP("5%"),
  },
  loginContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginLogo: {
    width: widthPercentageToDP("40%"),
    height: widthPercentageToDP("40%"),
  },
  topNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
    paddingBottom: 10,
  },
  topNavTitle: {
    fontWeight: "bold",
    paddingVertical: widthPercentageToDP("1%"),
  },
  topNavContent: {
    paddingHorizontal: widthPercentageToDP("2%"),
  },
  contentUnderTopNav: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  card: {
    paddingHorizontal: 10,
  },
  cardFootEquipe: { textAlign: "center" },
  cardFootLogo: {
    width: widthPercentageToDP("20%"),
    height: widthPercentageToDP("20%"),
  },
  icon: {
    width: 32,
    height: 32,
  },
  cardEntete: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardEquipe: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 50,
  },
  cardTitle: {
    alignItems: "center",
    justifyContent: "center",
  },
  cardSlider: {
    alignItems: "center",
    justifyContent: "center",
  },
  sliderPay: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
  },
  swipeRight: {
    label: {
      backgroundColor: colors.blue,
      borderColor: colors.blue,
      color: colors.white,
      borderWidth: 1,
      fontSize: 24,
    },
    wrapper: {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 20,
      marginLeft: 20,
    },
  },
  swipeLeft: {
    label: {
      backgroundColor: colors.red,
      borderColor: colors.red,
      color: colors.white,
      borderWidth: 1,
      fontSize: 24,
    },
    wrapper: {
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "flex-start",
      marginTop: 20,
      marginLeft: -20,
    },
  },
  swipeTop: {
    label: {
      backgroundColor: colors.black,
      borderColor: colors.black,
      color: colors.white,
      borderWidth: 1,
      fontSize: 24,
    },
    wrapper: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
    },
  },
};
