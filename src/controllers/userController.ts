import { searchData } from '../db/sqlite.js';
import { Request, Response } from 'express';


export const createUser = async (req:Request, res:Response) => {
  console.log(req.body)
  const {createUser} = req.body;
  console.log(createUser);
  const searchResult = await searchData(createUser);
  res.json({ message: 'recibido desde formulario', busqueda: createUser, resultado: searchResult });
};

  interface createUser{
    req:string
  }

  /*
  interface jsonResponse{
    message:string,
    busqueda:string,
    resultado:any
  }

const isString = (string:string):boolean => {
  return typeof string === "string"
}
*/