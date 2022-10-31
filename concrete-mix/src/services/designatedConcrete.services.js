import axios from "axios";

class DesignatedConcreteService {

  concretepurpose = () => {
    return axios.get(`https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretepurpose`);
  };

  concretedetails = (value) => {
    return axios.get(`https://fp-ardrecruiting-prod-001-func.azurewebsites.net/api/concretedetails?designatedConcrete=${value}`);
  };
}

export default new DesignatedConcreteService();
