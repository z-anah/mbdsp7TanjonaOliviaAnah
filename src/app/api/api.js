import mime from "mime";
import axios from "axios";

const DOMAIN_ORACLE = "https://tpt-spring-boot.herokuapp.com";
// const DOMAIN_NODE = "https://tpt-node.herokuapp.com";
const DOMAIN_NODE = "http://192.168.88.180:5000";
const HEADER = null;

export {
  getConditionsGenerales,
  signUp,
  listRoles,
  authentification,
  DOMAIN_NODE,
  updateByIdUtilisateur,
  upload,
  matchsForPari,
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
