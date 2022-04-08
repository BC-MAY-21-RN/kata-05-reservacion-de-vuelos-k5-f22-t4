import firestore from '@react-native-firebase/firestore';

export async function getFlights() {
  try {
    const url = 'https://620e98baec8b2ee28326dc72.mockapi.io/data/flights';
    const response = await fetch(url);
    const flights = await response.json();
    return flights;
  } catch (error) {
    throw error;
  }
}

export async function getFlightsFirestore(user) {
  const arrayFlights = [];
  try {
    await firestore()
      .collection('Flights')
      .where('user', '==', user)
      .get()
      .then(collectionSnapshot => {
        collectionSnapshot.forEach(documentSnapshot => {
          arrayFlights.push(documentSnapshot.data());
        });
      });
    return arrayFlights;
  } catch (error) {
    throw error;
  }
}

export async function getCitiesFirestore() {
  const arrayCities = [];
  try {
    await firestore()
      .collection('Cities')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          arrayCities.push(documentSnapshot.data());
        });
      });
    return arrayCities;
  } catch (error) {
    throw error;
  }
}

export function addFlightFirestore(data) {
  (async () => {
    try {
      firestore().collection('Flights').doc().set(data);
    } catch (error) {
      throw error;
    }
  })();
}

export function addCitiesFirestore() {
  (async () => {
    try {
      firestore().collection('Cities').doc().set(cities);
    } catch (error) {
      throw error;
    }
  })();
}

export async function getFlightsSizeFirestore(user) {
  let size = 0;
    try {
      await firestore()
        .collection('Flights')
        .where('user', '==', user)
        .get()
        .then(querySnapshot => {
          size = querySnapshot.size;
        });
      return size;
    } catch (error) {
      console.log("Error count flights", error);
    }
}

const cities = {
  country: 'estados unidos',
  id: 12,
  name: 'chicago',
  abrev: 'chi',
  img: 'https://cdn-icons-png.flaticon.com/512/940/940207.png',
};
