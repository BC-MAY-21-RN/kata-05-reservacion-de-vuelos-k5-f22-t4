import {View, TextInput} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from '../../utils/styles/stylesBooking';
import {filter, toLower, capitalize} from 'lodash';
import ListCities from './ListCities';
import {getCitiesFirestore} from '../../api/flights';

export default function InputText(props) {
  const [query, setQuery] = useState('');
  const [fullCities, setFullCities] = useState([]);
  const [cities, setCities] = useState([]);
  const [isVisible, setIsVisible] = useState(undefined);
  const [select, setSelect] = useState();
  const {setData, location, setIsDisabled} = props;

  useEffect(() => {
    (async () => {
      try {
        loadCities(setCities);
      } catch (error) {
        console.log('Error cities: ', error);
      }
    })();
  }, []);

  useEffect(() => {
    if (select) {
      selectedCity(select, setData, setQuery, setIsVisible, location);
      setIsDisabled(false)
    }
  }, [select]);

  return (
    <View style={styles.inputContaint}>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        clearButtonMode="always"
        style={styles.input}
        value={query}
        onChangeText={queryText =>
          handleSearch(queryText, setIsVisible, setFullCities, setQuery, cities, setIsDisabled)
        }
        placeholder="Search"
      />
      <ListCities
        cities={fullCities}
        isVisible={isVisible}
        setSelect={setSelect}
      />
    </View>
  );
}

async function loadCities(setCities) {
  try {
    const response = await getCitiesFirestore();
    setCities(response);
  } catch (error) {
    throw error;
  }
}

function handleSearch(text, setIsVisible, setFullCities, setQuery, cities, setIsDisabled) {
  const lengthQuery = text.length;
  setIsDisabled(false)
  if (lengthQuery < 2) {
    setIsVisible(undefined);
  } else {
    setIsVisible(true);
    setFullCities(cities);
  }
  const formattedQuery = toLower(text);
  const filterCities = filter(cities, city => {
    const res = contains(city, formattedQuery);
    return res;
  });
  setFullCities(filterCities);
  setQuery(text);
}

function contains({country, name}, query) {
  if (country.includes(query) || name.includes(query)) {
    return true;
  }
  return false;
}

function selectedCity(city, setData, setQuery, setIsVisible, location) {
  const c = capitalize(city.name) + ', ' + capitalize(city.country);
  setQuery(c);
  setIsVisible(null);
  const fly = {};
  fly[location] = {
    city: city.name,
    country: city.country,
    abrev: city.abrev,
    img: city.img,
  };
  setData(fly);
}
