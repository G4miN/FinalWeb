//Creando Base de datos firebase

firebase.initializeApp({
    apiKey: "AIzaSyAzh10k8rqO-CWfIUP49Gx2W2KjTHdpvcg",
    authDomain: "finalweb-c6404.firebaseapp.com",
    projectId: "finalweb-c6404"
});

var db = firebase.firestore();

//Agregando datos a firebase

//creacion de tablas

//posicion
db.collection("Posicion").add({
        pos1: "1",
        pos2: "2",
        pos3: "3",
        pos4: "4",
        pos5: "5",
        pos6: "6",
        pos7: "7",
        pos8: "8",
        pos9: "9",
        pos10: "10"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });
//numero
db.collection("Numero").add({
        num1: "77",
        num2: "44",
        num3: "33",
        num4: "5",
        num5: "16",
        num6: "20",
        num7: "27",
        num8: "7",
        num9: "18",
        num10: "26"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

//driver
db.collection("Driver").add({
        dri1: "Valtteri Bottas",
        dri2: "Lewis Hamilton",
        dri3: "Max Verstappen",
        dri4: "Sebastian Vettel",
        dri5: "Charles Leclerc",
        dri6: "Kevin Magnussen",
        dri7: "Nico Hulkenberg",
        dri8: "	Kimi Räikkönen",
        dri9: "Lance Stroll",
        dri10: "Daniil Kvyat"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

//cars
db.collection("Car").add({
        car1: "Mercedes",
        car2: "Mercedes",
        car3: "RED BULL RACING HONDA",
        car4: "FERRARI",
        car5: "FERRARI",
        car6: "HAAS FERRARI",
        car7: "RENAULT",
        car8: "ALFA ROMEO RACING FERRARI",
        car9: "RACING POINT BWT MERCEDES",
        car10: "SCUDERIA TORO ROSSO HONDA"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

//laps
db.collection("Lap").add({
        lap1: "58",
        lap2: "58",
        lap3: "58",
        lap4: "58",
        lap5: "58",
        lap6: "58",
        lap7: "57",
        lap8: "57",
        lap9: "57",
        lap10: "57"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

//tired
db.collection("TRETIRED").add({
        tire1: "1:25:27.325",
        tire2: "+20.886s",
        tire3: "+22.520s",
        tire4: "+57.109s",
        tire5: "+58.230s",
        tire6: "+87.156s",
        tire7: "+1 lap",
        tire8: "+1 lap",
        tire9: "+1 lap",
        tire10: "+1 lap"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });

//puntos
db.collection("Pts").add({
        pts1: "26",
        pts2: "18",
        pts3: "15",
        pts4: "12",
        pts5: "10",
        pts6: "8",
        pts7: "6",
        pts8: "4",
        pts9: "2",
        pts10: "1"


    })
    .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function (error) {
        console.error("Error adding document: ", error);
    });


var datos1 = document.getElementById('llenar1');

db.collection("Posicion").get().then((querySnapshot) => {
    datos1.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos1.innerHTML += `

                    <th scope="row">${doc.data().pos1}</th>

        `
    });
});