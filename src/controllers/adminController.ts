import { Request , Response , NextFunction } from "express";
import { listUsers , getUserInfoById , updateUserSqlite , deleteUserSqlite } from "../db/sqlite.js";


// Verificar si el usuario está autenticado
export const isAuth$ = (req:Request, res:Response, next:NextFunction) => {
  if (req.session.authorized && req.session.user.admin) {

    next();

  } else res.redirect('/');
}


export const renderAdmin = (req:Request,res:Response) => {
  res.render('admin/adminIndex')
}


export const renderUsersList = async(req:Request,res:Response) => {
  const allUsers = await listUsers();
  res.render('admin/usersList', {users:allUsers} )
}


export const updateUser = async(req:Request,res:Response) => {
  const { userID } = req.params
  const { email , userName } = req.body

  try {

  await updateUserSqlite(email,userName,userID)
  res.send(`user with ID ${userID} updated'`)

  } catch (error) {
    console.error('error on update user',email,userName,userID)
  }
  console.log(`user with ID ${userID} updated`)
}

export const deleteUser = async(req:Request,res:Response) => {

  const { userID } = req.params
  await deleteUserSqlite(userID);
  
  res.send(`Usuario eliminado con exito ${userID}`)
  console.log(`user with id: ${userID} deleted`)

}

//get user info by id
export const getUserInfo = async(req:Request,res:Response) => {
  const { userID } = req.params
  const user = await getUserInfoById(userID);
  res.render('admin/userInfoID', { user })
}
