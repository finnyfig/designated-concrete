import React, { useState } from "react";
import DesignatedConcreteService from '../../services/designatedConcrete.services'
import VertivalBarChart from '../BarChart/concreteVerticalChart';
import { Title, SelectWrapper, BarChartWrapper, Item,Grid } from './style';
import Select from 'react-select';

const customStyles = {

  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px solid #eee',
    backgroundColor: state.isSelected ? '#eeeeee' : '#ffffff',
    color: '#000000',
    padding: 5,
    fontSize:14
  }),
    control: styles => ({ ...styles, border: 'none',outline:'none',fontSize:14 }),
}

export default function DesignatedConcrete(props) {

  const designatedConcrete = props.data;
  const [selectedOption, setSelectedOption] = useState([]);
  const [concreteDetails, setConcreteDetails] = useState([]);

  const fetchConcreteDetails = (selectedValue) => {
    if (selectedValue) {
      setSelectedOption(selectedValue);
      DesignatedConcreteService.concretedetails(selectedValue.value)
        .then((res) => {
          setConcreteDetails(res.data);
        })
    }
    else {
      setConcreteDetails('');
    }
  }

  return (
    <>
      <SelectWrapper>
        <Title>Designated Concrete Type</Title>
        <Select
         styles={customStyles}
          onChange={fetchConcreteDetails}
          defaultValue={selectedOption}
          value={selectedOption}
          options={designatedConcrete}
          placeholder="Select Designated Course"
        />
      </SelectWrapper>
      <BarChartWrapper>
      <Grid>
        <Item>Size</Item>
        <Item>Min cement content (kg/m3)</Item>
      </Grid>
        {concreteDetails != '' ? <VertivalBarChart data={concreteDetails} /> : ''}
      </BarChartWrapper>
    </>
  );
}