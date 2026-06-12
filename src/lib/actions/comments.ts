'use server';

import dotenv from 'dotenv';
import { neon } from '@neondatabase/serverless';
import { sanitizeInput } from '@/src/lib/utils'
dotenv.config();

const sql = neon(process.env.DATABASE_URL || '');

export async function getComments() {
     try{
          const result = await sql`SELECT id, name, comment FROM comments ORDER BY id DESC`;
          return result;
     }catch(e){
          return { error:'Error al obtener los datos'}
     }
}

export async function postComment(name: string, comment: string) {
     try{
          const sanitizedInput = sanitizeInput(name, comment);
          if (!sanitizedInput.name && !sanitizedInput.comment) return { error: 'Datos no válidos' };
          await sql`INSERT INTO comments (name, comment) VALUES (${name}, ${comment})`;
          return {message:'Comentario insertado correctamente'};
     }catch(e){
          return { error:'Error al insertar el comentario'}
     }
}