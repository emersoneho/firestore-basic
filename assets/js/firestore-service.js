var db = firebase.firestore();
const defaultCollection = 'eas-projects';

const firestoneService = {
    create: (endpoint, data) => {
        var docRef = db.collection(endpoint);
        docRef.add(data).then((docRef) => {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    },
    read: (endpoint) => {
        db.collection(endpoint).get().then(response => {
            var collection = {};
            response.forEach(doc => {
                collection[doc.id] = doc.data();
            });
            console.log("Documents", collection);
        })
    },
    readID: (endpoint, id) => {
        db.collection(endpoint).doc(id).get().then((doc) => {
            console.log("Documents", doc.data());
        })
    },
    deleteID: (endpoint, id) => {
        var docRef = db.collection(endpoint);
        docRef.doc(id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    },

}