import { ApplicationProvider, Button } from "@ui-kitten/components";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as eva from "@eva-design/eva";
import ContainerStyle from "../../styles/ContainerStyle";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { BarCodeScanner } from "expo-barcode-scanner";
import React, { useState, useEffect } from "react";
import { updateByIdUtilisateur } from "../../api/api";
import { setUser } from "../../redux/action";
import LottieView from "lottie-react-native";

function BarCodeScannerScreen(props) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log(
      `Bar code with type ${type} and data ${data} has been scanned!`
    );
    credit();
  };

  const credit = async () => {
    setIsLoading(true);
    const { idUtilisateur, soldeUtilisateur } = props.counter.dataUser;
    const amount = 300;
    const dataUser = {
      soldeUtilisateur: soldeUtilisateur + amount,
    };
    const data = await updateByIdUtilisateur(dataUser, idUtilisateur);
    props.setUser(data.result);
    setIsLoading(false);
    alert(`Votre compte a été crédité de ${amount}`);
    props.navigation.navigate("MonPorteFeuilleScreen");
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <SafeAreaView style={[ContainerStyle.AndroidSafeArea]}>
        {isLoading ? (
          <LottieView
            autoPlay={true}
            loop={true}
            source={require("../../../../assets/lottie/7929-run-man-run.json")}
          />
        ) : (
          <View style={styles.container}>
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
            <Button onPress={() => props.navigation.goBack()}>Retour</Button>
          </View>
        )}
      </SafeAreaView>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
});

const mdtp = (dispatch) =>
  bindActionCreators(
    {
      setUser,
    },
    dispatch
  );

const mtp = (state) => {
  const { counter } = state;
  return { counter };
};

export default connect(mtp, mdtp)(BarCodeScannerScreen);
