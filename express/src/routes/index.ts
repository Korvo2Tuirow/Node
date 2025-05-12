import express from "express";
import { database, db } from "../../database/db"
import { get, ref } from "firebase/database"
import { doc, getDoc, collection, query, getDocs, orderBy } from "firebase/firestore";



const router = express.Router();

router.get('/destino/:de/:para', (req, res) => {

    const { de, para } = req.params; // Desestruturação dos parâmetros da rota ROTA DINAMICA

    console.log(`O valor de ${de} até ${para} é de R$ 2546,55`);

    res.json({
        destino: {
            from: de.toUpperCase(),
            to: para.toUpperCase(),
            valor: 2546.55
        }
    });
});

//Firebase Realtime Database
// Rota para buscar dados do Firebase Realtime Database
//npm install firebase
router.get('/realtime', async (req, res) => {
    try {
        const dbRef = ref(database, "/");
        const snapshot = await get(dbRef);

        if (!snapshot.exists()) {
            console.log("No data available");
            res.status(404).send("No data available");
        } else {
            const data = snapshot.val();
            console.log("Data from Firebase:", data);
            res.status(200).json(data); // Send the data as JSON response
        }



    } catch (error) {
        console.error("Error fetching data:", error);
    }
})

//Firestore Database
// Rota para buscar dados do Firestore
//npm install express firebase-admin
router.get('/firestore', async (req, res) => {

    const docRef = doc(db, "usuarios", "Lucas");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        res.json(docSnap.data());
    } else {
        console.log("No such document!");
        res.status(404).send("No such document!");
    }
})

router.get('/firestore/usuarios', async (req, res) => {
  try {
    const usuariosRef = collection(db, 'usuarios');        

    const snapshot = await getDocs(usuariosRef); 

    const usuarios = [] as any[]; // Declare the array with a specific type
    snapshot.forEach(doc => {
      usuarios.push({ id: doc.id, ...doc.data() });
    });

    res.json(usuarios)
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    res.status(500).json({ erro: 'Erro ao buscar usuários' });
  }
});


export default router;