import axios from "axios";

const DOMAIN_ORACLE = "https://tpt-spring-boot.herokuapp.com";
const HEADER = null;

const getConditionsGenerales = async () => {
  var ans = "",
    link = "/conditions",
    data = null;
  await axios
    .get(DOMAIN_ORACLE + link, data, HEADER)
    .then((res) => {
      ans = res;
    })
    .catch(function (error) {
      throw error;
    });
  return ans.data;
};

export { getConditionsGenerales };
