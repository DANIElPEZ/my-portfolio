'use server';

import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';
import { sanitizeInput } from '@/src/lib/utils'
dotenv.config();

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri, {
     serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true,
     }
});

export async function getComments() {
     try{
          const db = client.db('dnvdev').collection('comments');
          const result = await db.find({}).toArray();
          return result;
     }catch(e){
          return { error:'Error al obtener los datos'}
     }
}

export async function postComment(name: string, comment: string) {
     try{
          const sanitizedInput = sanitizeInput(name, comment);
          if (!sanitizedInput.name && !sanitizedInput.comment) return { error: 'Datos no válidos' };
          const db = client.db('dnvdev').collection('comments');
          await db.insertOne({ name, comment });
          return {message:'Comentario insertado correctamente'};
     }catch(e){
          return { error:'Error al insertar el comentario'}
     }
}