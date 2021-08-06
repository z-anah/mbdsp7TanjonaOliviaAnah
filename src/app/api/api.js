import mime from "mime";
import axios from "axios";

const DOMAIN_ORACLE = "https://tpt-spring-boot.herokuapp.com";
// const DOMAIN_NODE = "https://tpt-node.herokuapp.com";
const DOMAIN_NODE = "http://192.168.88.180:5000";
const HEADER = null;

export {
  createPari,
  getConditionsGenerales,
  signUp,
  listRoles,
  authentification,
  DOMAIN_NODE,
  updateByIdUtilisateur,
  upload,
  matchsForPari,
  listCompetitions,
  notification,
};

const createPari = async (form) => {
  var link = `${DOMAIN_NODE}/api/pari/create`,
    ans = null;
  console.log("response");
  await axios.post(link, form, HEADER).then((response) => {
    ans = response.data.data;
  });
  // Object {
  //   "pari": Object {
  //     "idMatch": "60e963b8296c172484906bbb",
  //     "idTypePari": "60df67d6e4541c2b24ead8db",
  //     "idUtilisateur": 13,
  //     "monpari": 1,
  //     "montantMise": 340,
  //   },
  // }
  return ans;
};

const notification = async (form) => {
  const { tokens, body, title, data } = form;
  var link = `${DOMAIN_NODE}/api/notification`,
    d = {
      tokens,
      body,
      title,
      data,
    },
    ans = null;
  await axios.post(link, d, HEADER).then((response) => {
    ans = response.data.data;
  });
  return ans;
};

const listCompetitions = async () => {
  var link = `${DOMAIN_NODE}/api/listeCompetition`,
    ans = null;
  await axios.get(link).then((response) => {
    ans = response.data.data;
  });
  return ans;
};

const matchsForPari = async () => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/matchs/pari`,
    data = null;
  await axios.post(link, data, HEADER).then((res) => {
    ans = res.data.data;
  });
  return ans;
};

const upload = async (profil) => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/upload`;
  const formData = new FormData();
  const newImageUri = "file:///" + profil.split("file:/").join("");
  formData.append("profil", {
    uri: newImageUri,
    type: mime.getType(newImageUri),
    name: newImageUri.split("/").pop(),
  });
  await axios.post(link, formData).then((response) => {
    if (response.data.status) ans = response.data.data;
    else throw new Error(response.data.message);
  });
  return ans;
};

const updateByIdUtilisateur = async (form, idUtilisateur) => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/modification`,
    data = {
      ...form,
      idUtilisateur,
    };
  await axios.put(link, data, HEADER).then((response) => {
    if (response.data.status) ans = response.data;
    else throw new Error(response.data.message);
  });
  return ans;
};

const authentification = async (form) => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/authentification`,
    data = {
      ...form,
    };
  await axios.post(link, data, HEADER).then((response) => {
    if (response.data.auth) ans = response.data;
    else throw new Error(response.data.message);
  });
  return ans;
};

const listRoles = async () => {
  var link = `${DOMAIN_NODE}/api/listRoles`,
    data = {};
  await axios.get(link, data).then((response) => {
    return response;
  });
};

const signUp = async (form) => {
  var link = `${DOMAIN_NODE}/api/inscription`,
    data = {
      ...form,
      idRole: "3",
    };
  await axios.post(link, data, HEADER).then((response) => {
    if (response.data.status) return;
    else throw new Error(response.data.message);
  });
};

const getConditionsGenerales = async () => {
  var ans = "",
    link = `${DOMAIN_ORACLE}/conditions`,
    data = null;
  await axios.get(link, data, HEADER).then((res) => {
    ans = res;
  });
  return ans.data;
};
