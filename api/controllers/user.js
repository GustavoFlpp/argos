import { db } from "../db.js";

// Obter todos os equipamentos
export const getEquipamento = (_, res) => {
  const q = "SELECT * FROM equipamento";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

// Obter todos os dispositivos
export const getDispositivo = (_, res) => {
    const q = "SELECT * FROM dispositivo";
  
    db.query(q, (err, data) => {
      if (err) return res.json(err);
  
      return res.status(200).json(data);
    });
  };

  // Adicionar um equipamento
export const addEquipamento = (req, res) => {
    const equipamento = req.body;
  
    const query = "INSERT INTO equipamento SET ?";
  
    db.query(query, equipamento, (err) => {
      if (err) return res.json(err);
  
      return res.status(201).send("Equipamento adicionado com sucesso!");
    });
  };
  
  // Adicionar um dispositivo
  export const addDispositivo = (req, res) => {
    const dispositivo = req.body;
  
    const query = "INSERT INTO dispositivo SET ?";
  
    db.query(query, dispositivo, (err) => {
      if (err) return res.json(err);
  
      return res.status(201).send("Dispositivo adicionado com sucesso!");
    });
  };