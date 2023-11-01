import { Request , Response } from "express";


const nombres = ['Gonzalo',"Lucy","Joaquin","Matias"];


export const renderHome = async(req:Request, res:Response) => {
  res.render('home',{
      title:"el title desde el app.js",
      admin:true,
      nombres
  });
}

export const renderAdmin = (req:Request,res:Response) => {
  res.render('admin',{admin:true})
}

export const renderAbout = (req:Request, res:Response) => {
  res.render('about');
}



