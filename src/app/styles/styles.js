import { widthPercentageToDP } from "react-native-responsive-screen";

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
  },
  card: {
    paddingHorizontal: 10,
    paddingVertical: 10,
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
    paddingBottom: 30,
    paddingTop: 30,
  },
};
