import * as React from "react";
import { useState } from "react";
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';

export const GenderPicker = () => {
  const [ selected, setSelected ] = useState('');
  const data = [
      {key:'1', value:'Female'},
      {key:'2', value:'Trans Female'},
      {key:'3', value:'Male'},
      {key:'4', value:'Trans Male'},
      {key:'5', value:'Genderqueer'},
      {key:'6', value:'Non-Binary'},
      {key:'7', value:'Prefer not to say'},
  ];
  return(
    <SelectList
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5}}
    />
  )
};

export const DarkModePicker = () => {
  const [ darkModeValue, setDarkModeValue ] = useState('');
  const data = [
      {key:'1', value:'On'},
      {key:'2', value:'Off'}
  ];
  return(
    <SelectList
        setSelected={(val) => setDarkModeValue(val)}
        data={data}
        save="value"
        search={false}
        defaultOption={{key:'1', value:'On'}}
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
    />
  )
};

export const LanguagePicker = () => {
  const [ langValue, setLangValue ] = useState('');
  const data = [
      {key:'1', value:'English (US)'},
      {key:'2', value:'Spanish'},
      {key:'3', value:'French'},
  ];
  return(
    <SelectList
        setSelected={(val) => setLangValue(val)}
        data={data}
        save="value"
        search={false}
        defaultOption={{key:'1', value:'English (US)'}}
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
    />
  )
};

export const ShowMePicker = () => {
  const [ artTypeValue, setArtTypeValue ] = useState([]);
  const data = [
    {key:'1', value:'Paintings'},
    {key:'2', value:'Ceramics'},
    {key:'3', value:'Sculptures'},
    {key:'4', value:'Jewelry'},
    {key:'5', value:'Photography'},
    {key:'6', value:'Glass'},
    {key:'7', value:'Prints'},
    {key:'8', value:'Drawings & Illustrations'},
    {key:'9', value:'Sculptures'},
    {key:'10', value:'Fiber Arts'},
    {key:'11', value:'Paper Craft'},
  ];
  return(
    <MultipleSelectList
      setSelected={(val) => setArtTypeValue(val)}
      data={data}
      save="value"
      label="Categories"
      boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
      dropdownStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
    />
  )
};