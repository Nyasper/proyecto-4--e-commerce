import { Request , Response } from "express";


export const renderHome = async(req:Request, res:Response) => {
  res.render('home');
}


export const renderLogin = (req:Request, res:Response) => {
  res.render('login');
}

export const renderRegister = (req:Request, res:Response) => {
  res.render('register');
}

export const renderProfile = (req:Request, res:Response) => {
  if (req.session.authorized) {
   return res.render('user/profile');
  }
  
  res.redirect('/login')
}

export const renderAbout = (req:Request, res:Response) => {
  res.render('about');
}



