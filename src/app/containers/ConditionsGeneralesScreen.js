import React from "react";
import {
  ApplicationProvider,
  Button,
  Divider,
  Layout,
  Icon,
  TopNavigation,
  Text,
  Card,
  TopNavigationAction,
} from "@ui-kitten/components";
import { SafeAreaView } from "react-native";
import ContainerStyle from "../styles/ContainerStyle";
import * as eva from "@eva-design/eva";
import i18n from "i18n-js";
import { connect } from "react-redux";

class ConditionsGeneralesScreen extends React.Component {
  render() {
    const BackIcon = () => <Icon {...this.props} name="arrow-back" />;
    const BackAction = () => <TopNavigationAction icon={BackIcon} />;
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaView style={[{ flex: 1 }, ContainerStyle.AndroidSafeArea]}>
          <TopNavigation
            accessoryLeft={BackAction}
            title="Conditions Generales"
            alignment="center"
          />
          <Divider />
          <Card>
            <Text>ARTICLE 1 : Les mentions légales</Text>
          </Card>
          <Card>
            <Text>
              L'édition du site tpt-angular-fo.herokuapp.com est assurée par la
              Société zaora zaora au capital de zaora euros, immatriculée au RCS
              de zaora sous le numéro zaora, dont le siège social est situé au
              zaora
            </Text>
            <Text>Numéro de téléphone zaora</Text>
            <Text>Adresse e-mail : zaora.</Text>
            <Text>Le Directeur de la publication est : zaora</Text>
            <Text>
              L'hébergeur du site tpt-angular-fo.herokuapp.com est la société
              zaora, dont le siège social est situé au zaora, avec le numéro de
              téléphone : zaora.
            </Text>
          </Card>

          <Card>
            <Text>ARTICLE 2 : Accès au site</Text>
          </Card>
          <Card>
            <Text>
              Le site tpt-angular-fo.herokuapp.com permet à l'Utilisateur un
              accès gratuit aux services suivants : Le site internet propose les
              services suivants :
            </Text>
            <Text>
              Le site est accessible gratuitement en tout lieu à tout
              Utilisateur ayant un accès à Internet. Tous les frais supportés
              par l'Utilisateur pour accéder au service (matériel informatique,
              logiciels, connexion Internet, etc.) sont à sa charge.
            </Text>
            <Text>
              L’Utilisateur non membre n'a pas accès aux services réservés. Pour
              cela, il doit s’inscrire en remplissant le formulaire. En
              acceptant de s’inscrire aux services réservés, l’Utilisateur
              membre s’engage à fournir des informations sincères et exactes
              concernant son état civil et ses coordonnées, notamment son
              adresse email. Pour accéder aux services, l’Utilisateur doit
              ensuite s'identifier à l'aide de son identifiant et de son mot de
              passe qui lui seront communiqués après son inscription. Tout
              Utilisateur membre régulièrement inscrit pourra également
              solliciter sa désinscription en se rendant à la page dédiée sur
              son espace personnel. Celle-ci sera effective dans un délai
              raisonnable. Tout événement dû à un cas de force majeure ayant
              pour conséquence un dysfonctionnement du site ou serveur et sous
              réserve de toute interruption ou modification en cas de
              maintenance, n'engage pas la responsabilité de
              tpt-angular-fo.herokuapp.com. Dans ces cas, l’Utilisateur accepte
              ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou
              suspension de service, même sans préavis. L'Utilisateur a la
              possibilité de contacter le site par messagerie électronique à
              l’adresse email de l’éditeur communiqué à l’ARTICLE 1.
            </Text>
          </Card>

          <Card>
            <Text>ARTICLE 3 : Collecte des données</Text>
          </Card>
          <Card>
            <Text>
              Le site est exempté de déclaration à la Commission Nationale
              Informatique et Libertés (CNIL) dans la mesure où il ne collecte
              aucune donnée concernant les Utilisateurs.
            </Text>
          </Card>
        </SafeAreaView>
      </ApplicationProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(ConditionsGeneralesScreen);
