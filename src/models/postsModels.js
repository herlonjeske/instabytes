import 'dotenv/config'
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTODOS() {
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
    }

export async function CriarPost(novoPost) {
    const db = conexao.db("instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
    }

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("instabytes");
    const objID = ObjectId.createFromHexString(id)
    const colecao = db.collection("posts");
    return colecao.updateOne({_id: new ObjectId(objID)},{$set:novoPost} );
}