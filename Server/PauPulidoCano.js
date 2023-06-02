//NodeJS: localhost:3010
const express = require('express');
const app = express();
const cors = require('cors');
const jsonpath = require("jsonpath");
app.use(cors());

app.use(express.json());
port = 3080;
app.listen(port, () => {
  console.log(`Server listening on the port:: ${port}`)
})

//conexio al firebase
function connection(){
  var serviceAccount = require('D:\\EX_RECS_UF3_UF2_PauPulido\\ex-pau-pulido-firebase-adminsdk-px8td-a25cdb244b.json');
  var admin = require("firebase-admin");

  const app = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
  return getFirestore(app);
}


//Peta per el get pero el post si que m'el fa be.

//fer get
app.get('/paupulido/jugadors', (req, res) => {
  const db = connection();

  db.collection('qatar22Pulido').doc('final22Pulido').get()
    .then((doc) => {
      if (doc.exists) {
        const data = doc.data();
        const jugadors = [];

        data.info.forEach((equip) => {
          equip.gols.forEach((gol) => {
            if (gol.minut === 1) {
              jugadors.push(gol.jugador);
            }
          });
        });

        res.send(jugadors);
      } else {
        res.status(404).send('El documento no existe');
      }
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error al obtener los jugadors');
    });
});


//afegir camp

app.post('/paupulido/mvp/ADRIAAA', (req,res) => {
  const db = connection();

  const datosAdd = {
    MILLOR_jUGADOR: req.body.millorJ
  };
  //afegir el nou doc a una coleccio existent
  db.collection('qatar22Pulido').doc('final22Pulido').set(datosAdd, { merge: true })
    .then(() => {
      console.log('Nuevo camp agregat a una colecció existent amb merge: true');
    })
    .catch(error => {
      console.error(error);
    });
  res.send('Operació de afegir completada'); // Enviar respuesta al cliente
});
