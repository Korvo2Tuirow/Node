import express from "express";

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

export default router;