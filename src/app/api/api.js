import axios from "axios";

const DOMAIN_ORACLE = "https://tpt-spring-boot.herokuapp.com";
// const DOMAIN_NODE = "https://tpt-node.herokuapp.com";
const DOMAIN_NODE = "http://192.168.88.180:5000";
const HEADER = null;

export { getConditionsGenerales, signUp, listRoles };

const listRoles = async () => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/listRoles`,
    data = {};
  await axios
    .get(link, data)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

const signUp = async (form) => {
  var ans = "",
    link = `${DOMAIN_NODE}/api/inscription`,
    data = {
      ...form,
      idRole: "3",
    };
  console.log(link);
  await axios.post(link, data, HEADER).then((response) => {
    if (response.data.status) return;
    else throw new Error(response.data.message);
  });
};

const getConditionsGenerales = async () => {
  var ans = "",
    link = `${DOMAIN_ORACLE}/conditions`,
    data = null;
  await axios
    .get(link, data, HEADER)
    .then((res) => {
      ans = res;
    })
    .catch(function (error) {
      throw error;
    });
  return ans.data;
};
