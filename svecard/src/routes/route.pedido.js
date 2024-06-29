import { Router } from "express";
import { db, query } from "../config/database.js";

const routePedido = Router();

routePedido.get("/pedidos", function(req, res){
    db.all(`select id_pedido, total, nome, email, strftime('%d/%m/%Y', dt_pedido) as dt_pedido from pedido`, [], function(err, rows){
        if (err)
            return res.status(500).send("Ocorreu um erro: " + err.message)
        else
            return res.status(200).json(rows);

    });
});

routePedido.post("/pedidos", function(req, res){

    let sql = `insert into pedido(id_usuario, nome, email, fone, endereco,
               bairro, cidade, uf, cep, total, dt_pedido) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, current_date)
               returning id_pedido`;
    
    let p = req.body;

    db.all(sql, [p.id_usuario, p.nome, p.email, p.fone, p.endereco,
            p.bairro, p.cidade, p.uf, p.cep, p.total], async function(err, rows){
            if (err)
                return res.status(500).send("Erro ao salvar pedido: " + err.message)
            else
            {          
                let id_ped = rows[0].id_pedido;

                //aqui vamos inserir os itens do pedido
                for (var item of req.body.itens){
                    sql = `insert into pedido_item(id_pedido, id_produto, qtd, vl_unitario, vl_total)
                          values(?,?,?,?,?)`;

                     await query(sql, [id_ped, item.id_produto, item.qtd, item.vl_unitario, item.vl_total]);    
                }
            
                return res.status(201).json({id_pedido: id_ped});

        }

        });
    });

export default routePedido;