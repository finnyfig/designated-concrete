import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DesignatedConcrete from "../designatedConcrete/designatedConcrete";
import DesignatedConcreteService from "../../services/designatedConcrete.services";

const TaskBar = styled.div`
background: white;
border: 1px solid #dfdfdf;
color: black;
padding: 1em 2em;

`;

export default function ConcreteLayout(props) {

  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Fetch data
      DesignatedConcreteService.concretepurpose()
        .then((res) => {
          res.data.forEach((value) => {
            options.push({
              label: value.DesignatedConcrete,
              value: value.DesignatedConcrete,
            });

          });
        })
        .catch((e) => {
          console.log(e);
        });



    }
    // Trigger the fetch
    fetchData();
  }, []);

  return (
    <>
      <TaskBar>Designated Concrete</TaskBar>
      <DesignatedConcrete data={options} />
    </>
  );
}