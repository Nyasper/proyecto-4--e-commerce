// import { searchData } from '../db/sqlite.js';
import { Request, Response } from 'express';
// import { check  } from 'express-validator';
import { hash , compare } from 'bcrypt';
import { registerUserSqlite , loginUserSqlite } from '../db/sqlite.js';


declare module "express-session" {
  interface SessionData {
    authorized: boolean;
  }
}


export const registerUser = async (req:Request, res:Response) => {
  try {
    
    let { email, userName, password } = req.body;
    password = await hash(password, 12)
    const userExist = (await loginUserSqlite(email)).length > 0;

    if (!userExist){

      await registerUserSqlite(email,userName,password)
      console.log('user registered.',email)
      res.render('welcome',{welcomeMessage:`Welcome ${userName}!`})

    } else {

      console.error("user alredy exists",email,userName)
      res.render('register', { error:'Error: User alredy exists!' })

    }

  } catch (error) { 
    res.render('register', { error:'Error: Server Busy!' })
  };
};


export const loginUser = async (req:Request, res:Response) => {

  const { email , password } = req.body;
  const userDataDB = await loginUserSqlite(email) //database credentials

  if (userDataDB.length){

    if (await compare( password , userDataDB[0].password)) {

      console.log("La Contrasena coincide sesion iniciada.",email,password)
      req.session.user = { 
        email: userDataDB[0].email,
        userName: userDataDB[0].userName,
        admin: userDataDB[0].admin
      }
      req.session.authorized = true
      res.redirect('/profile')

    } else {
      res.render('login', { error:'Error: Incorrect Password!' })
    }

  } else {
    res.render('login', { error:'Error: Incorrect Password!' })
  }

}

export const logoutUser = async (req:Request, res:Response) => {
  req.session.destroy((err) => {
    if (!err) {
      console.log('Sesion Cerrada')
      res.redirect('/login');
      
    } else console.error('Error to Close Session', err);
  });
}