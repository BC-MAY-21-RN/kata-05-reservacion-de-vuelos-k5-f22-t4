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

export function addFlightFirestore() {
  (async () => {
    try {
      firestore().collection('Flights').doc().set(data);
      console.log('Add success');
    } catch (error) {
      throw error;
    }
  })();
}

const data = {
  user: 'mario1508',
  passangers: 1,
  id: 2,
  date: 'Diciembre 12, 2022',
  departure: {
    city: 'cdmx',
    country: 'méxico',
    abrev: 'cmx',
    img: 'https://cdn-icons-png.flaticon.com/512/330/330433.png',
  },
  arrival: {
    city: 'houston',
    country: 'estados unidos',
    abrev: 'hou',
    img: 'https://cdn-icons-png.flaticon.com/512/940/940207.png',
  },
};
