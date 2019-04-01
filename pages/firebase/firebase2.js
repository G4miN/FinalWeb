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
/*db.collection("ContenidoDOS").add({
    pos1: "1",
    pos2: "2",
    pos3: "3",
    pos4: "4",
    pos5: "5",
    pos6: "6",
    pos7: "7",
    pos8: "8",
    pos9: "9",
    pos10: "10",
    num1: "5",
    num2: "77",
    num3: "44",
    num4: "10",
    num5: "20",
    num6: "27",
    num7: "14",
    num8: "2",
    num9: "9",
    num10: "31",
    dri1: "Sebastian Vettel",
    dri2: "Valtteri Bottas",
    dri3: "Lewis Hamilton",
    dri4: "Pierre Gasly",
    dri5: "Kevin Magnussen",
    dri6: "Nico Hulkenberg",
    dri7: "Fernando Alonso",
    dri8: "Stoffel Vandoorne",
    dri9: "Marcus Ericsson",
    dri10: "Esteban Ocon",
    car1: "FERRARI",
    car2: "MERCEDES",
    car3: "MERCEDES",
    car4: "SCUDERIA TORO ROSSO HONDA",
    car5: "HAAS FERRARI",
    car6: "RENAULT",
    car7: "MCLAREN RENAULT",
    car8: "MCLAREN RENAULT",
    car9: "SAUBER FERRARI",
    car10: "FORCE INDIA MERCEDES",
    lap1: "57",
    lap2: "57",
    lap3: "57",
    lap4: "57",
    lap5: "57",
    lap6: "57",
    lap7: "56",
    lap8: "56",
    lap9: "56",
    lap10: "56",
    tire1: "1:25:27.325",
    tire2: "+20.886s",
    tire3: "+22.520s",
    tire4: "+57.109s",
    tire5: "+58.230s",
    tire6: "+87.156s",
    tire7: "+1 lap",
    tire8: "+1 lap",
    tire9: "+1 lap",
    tire10: "+1 lap",
    pts1: "26",
    pts2: "18",
    pts3: "15",
    pts4: "12",
    pts5: "10",
    pts6: "8",
    pts7: "6",
    pts8: "4",
    pts9: "2",
    pts10: "1",

}).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
}).catch(function (error) {
    console.error("Error adding document: ", error);
});*/

var datos1 = document.getElementById('llenar1');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos1.innerHTML += `

                    <th scope="row">${doc.data().pos1}</th>
                    <td>${doc.data().num1}</td>
                    <td>${doc.data().dri1}</td>
                    <td>${doc.data().car1}</td>
                    <td>${doc.data().lap1}</td>
                    <td>${doc.data().tire1}</td>
                    <td>${doc.data().pts1}</td>

        `
    });
});

var datos2 = document.getElementById('llenar2');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos2.innerHTML += `

        <th scope="row">${doc.data().pos2}</th>
        <td>${doc.data().num2}</td>
        <td>${doc.data().dri2}</td>
        <td>${doc.data().car2}</td>
        <td>${doc.data().lap2}</td>
        <td>${doc.data().tire2}</td>
        <td>${doc.data().pts2}</td>
        `
    });
});

var datos3 = document.getElementById('llenar3');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos3.innerHTML += `

        <th scope="row">${doc.data().pos3}</th>
        <td>${doc.data().num3}</td>
        <td>${doc.data().dri3}</td>
        <td>${doc.data().car3}</td>
        <td>${doc.data().lap3}</td>
        <td>${doc.data().tire3}</td>
        <td>${doc.data().pts3}</td>
        `
    });
});

var datos4 = document.getElementById('llenar4');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos4.innerHTML += `

        <th scope="row">${doc.data().pos4}</th>
        <td>${doc.data().num4}</td>
        <td>${doc.data().dri4}</td>
        <td>${doc.data().car4}</td>
        <td>${doc.data().lap4}</td>
        <td>${doc.data().tire4}</td>
        <td>${doc.data().pts4}</td>
        `
    });
});

var datos5 = document.getElementById('llenar5');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos5.innerHTML += `

        <th scope="row">${doc.data().pos5}</th>
        <td>${doc.data().num5}</td>
        <td>${doc.data().dri5}</td>
        <td>${doc.data().car5}</td>
        <td>${doc.data().lap5}</td>
        <td>${doc.data().tire5}</td>
        <td>${doc.data().pts5}</td>
        `
    });
});

var datos6 = document.getElementById('llenar6');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos6.innerHTML += `

        <th scope="row">${doc.data().pos6}</th>
        <td>${doc.data().num6}</td>
        <td>${doc.data().dri6}</td>
        <td>${doc.data().car6}</td>
        <td>${doc.data().lap6}</td>
        <td>${doc.data().tire6}</td>
        <td>${doc.data().pts6}</td>
        `
    });
});

var datos7 = document.getElementById('llenar7');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos7.innerHTML += `

        <th scope="row">${doc.data().pos7}</th>
        <td>${doc.data().num7}</td>
        <td>${doc.data().dri7}</td>
        <td>${doc.data().car7}</td>
        <td>${doc.data().lap7}</td>
        <td>${doc.data().tire7}</td>
        <td>${doc.data().pts7}</td>
        `
    });
});

var datos8 = document.getElementById('llenar8');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos8.innerHTML += `

        <th scope="row">${doc.data().pos8}</th>
        <td>${doc.data().num8}</td>
        <td>${doc.data().dri8}</td>
        <td>${doc.data().car8}</td>
        <td>${doc.data().lap8}</td>
        <td>${doc.data().tire8}</td>
        <td>${doc.data().pts8}</td>
        `
    });
});

var datos9 = document.getElementById('llenar9');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos9.innerHTML += `

        <th scope="row">${doc.data().pos9}</th>
        <td>${doc.data().num9}</td>
        <td>${doc.data().dri9}</td>
        <td>${doc.data().car9}</td>
        <td>${doc.data().lap9}</td>
        <td>${doc.data().tire9}</td>
        <td>${doc.data().pts9}</td>
        `
    });
});

var datos10 = document.getElementById('llenar10');

db.collection("ContenidoDOS").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
        datos10.innerHTML += `

        <th scope="row">${doc.data().pos10}</th>
        <td>${doc.data().num10}</td>
        <td>${doc.data().dri10}</td>
        <td>${doc.data().car10}</td>
        <td>${doc.data().lap10}</td>
        <td>${doc.data().tire10}</td>
        <td>${doc.data().pts10}</td>

        `
    });
});