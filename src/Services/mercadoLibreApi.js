import firebase from "./firebase";
export async function getAll(search) {
  //return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${search}`).then(
  //  (res) => res.json()
  //);
  const querySnapshot = await firebase.firestore().collection("product").get();
  return querySnapshot.docs;
}
export async function getById(id) {
  /* return fetch(`https://api.mercadolibre.com/items/${id}`).then((res) =>
    res.json()
  );*/
  return await firebase.firestore().doc(`product/${id}`).get();
}

export async function create(data) {
  return await firebase.firestore().collection("product").add(data);
}
export async function update(id, data) {
  return await firebase.firestore().doc(`product/${id}`).set(data);
}
export async function remove(id) {
  return await firebase.firestore().doc(`product/${id}`).delete();
}
