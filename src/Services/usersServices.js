import firebase from "./firebase";
export async function getByUserId(userId) {
  return await firebase
    .firestore()
    .collection(`users`)
    .where("userId", "==", userId)
    .get();
}
