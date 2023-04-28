import * as React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SelectList, MultipleSelectList } from 'react-native-dropdown-select-list';
import { setDarkMode, setGender, setLanguage, setShowMe } from "../../redux/userReducer";

export const GenderPicker = () => {
  const { genderId } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
        setSelected={(val) => dispatch(setGender(val))}
        data={data}
        save="value"
        defaultOption={{key: genderId, value: genderId}}
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5}}
    />
  )
};

export const DarkModePicker = () => {
  const { darkMode } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = [
      {key:'1', value:'On'},
      {key:'2', value:'Off'},
  ];
  return(
    <SelectList
        setSelected={(val) => dispatch(setDarkMode(val))}
        data={data}
        save="value"
        search={false}
        defaultOption={{key: darkMode, value:darkMode}}
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5}}
    />
  )
};

export const LanguagePicker = () => {
  const { language } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const data = [
      {key:'1', value:'English (US)'},
      {key:'2', value:'Spanish'},
      {key:'3', value:'French'},
  ];
  return(
    <SelectList
        setSelected={(val) => dispatch(setLanguage(val))}
        data={data}
        save="value"
        search={false}
        defaultOption={{key: language, value: language}}
        boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
        dropdownStyles={{borderRadius:5}}
    />
  )
};

export const ShowMePicker = () => {
  const { showMe } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
      onSelect={() => dispatch(setShowMe(artTypeValue))}
      setSelected={(val) => {setArtTypeValue(val)}}
      data={data}
      save="value"
      label="Categories"
      defaultOption={{key: showMe, value: showMe}}
      boxStyles={{borderRadius:5,paddingHorizontal:15,paddingTop:8, paddingBottom:5}}
      dropdownStyles={{borderRadius:5}}
    />
  )
};