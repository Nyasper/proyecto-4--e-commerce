import sqlite3 from 'sqlite3'


const db = new sqlite3.Database("src/db/proyecto4.sqlite",sqlite3.OPEN_READWRITE,(err)=>{
  if(err) return console.error("\nSe ha producido un error con sqlite:\n",err)
  else console.log('Conectado a Sqlite')
})


export async function registerUserSqlite(email:string,userName:string,password:string){
  return new Promise((resolve,reject)=>{
    const query = 'INSERT INTO users (email, userName, password) VALUES (?, ?, ?)';
    db.run(query, [email, userName, password], function (err) {
    if (!err) resolve({ id: this.lastID });
    else reject(err)
  })
  })
}

export async function loginUserSqlite(email:string):Promise<users[]>{
  return new Promise(async(resolve,reject)=>{
    const query = 'SELECT email,userName,password,admin FROM users WHERE email = ?';
      db.all(query, [email], (err, rows:users[]) => {
        if (!err) resolve(rows) 
        else reject(err);
      });
  })
}

export async function listUsers():Promise<users[]>{
  return new Promise(async(resolve,reject)=>{
    const query = 'SELECT * FROM users';
      db.all(query, [], (err, rows:users[]) => {
        if (!err) resolve(rows) 
        else reject(err);
      });
  })
}

export async function getUserInfoById(id:string):Promise<users[]>{
  return new Promise(async(resolve,reject)=>{
    const query = 'SELECT * FROM users where id = ?';
      db.all(query, [id], (err, rows:users[]) => {
        if (!err) resolve(rows) 
        else reject(err);
      });
  })
}
 


export async function updateUserSqlite(email:string,userName:string,userID:string){
  return new Promise((resolve,reject)=>{
    const query = 'UPDATE users SET email = ?, userName = ? WHERE id = ?';
    db.run(query, [email,userName,userID], function (err) {
    if (!err) resolve({ id: this.lastID });
    else reject(err)
  })
  })
}


export async function deleteUserSqlite(userID:string){
  return new Promise((resolve,reject)=>{
    const query = 'DELETE FROM users WHERE id = ?';
    db.run(query, [userID], function (err) {
    if (!err) resolve({ id: this.lastID });
    else reject(err)
  })
  })
}



interface users {
  email:string,
  userName:string,
  password:string
  admin:boolean
}

// const closeDB=()=>{
//   db.close((err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log('Conexión a la base de datos cerrada');
//     }});
// }




/*
const db = new sqlite3.Database("src/db/BlueArchiveDB.sqlite",sqlite3.OPEN_READWRITE,(err)=>{
  if(err) return console.error("\nSe ha producido un error con sqlite:\n",err)
  else console.log('Conectado a Sqlite')
})

export async function getAllData(){
  return new Promise((resolve,reject)=>{
    let query = `SELECT charaName FROM Students where age>=17`
    db.all(query,[], (err, rows) => {
    if (!err) resolve(rows)
    else reject(err)
  })
  })
}


export async function searchData(search:string){
  return new Promise((resolve,reject)=>{
    // const searchValue = ''
    const query = "SELECT * FROM Students where charaName LIKE ?"
    db.all(query,[`${search}%`], (err, rows) => {
    if (!err) resolve(rows)
    else reject(err)
  })
  })
}
*/