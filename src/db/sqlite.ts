import sqlite3 from 'sqlite3'

const db2 = new sqlite3.Database("src/db/BlueArchiveDB.sqlite",sqlite3.OPEN_READWRITE,(err)=>{
  if(err) return console.error("\nSe ha producido un error con sqlite:\n",err)
})


export async function getAllData(){
  return new Promise((resolve,reject)=>{
    let query = `SELECT charaName FROM Students where age>=17`
    db2.all(query,[], (err, rows) => {
    if (!err) resolve(rows)
    else reject(err)
  })
  })
}


export async function searchData(search:string){
  return new Promise((resolve,reject)=>{
    // const searchValue = ''
    const query = "SELECT * FROM Students where charaName LIKE ?"
    db2.all(query,[`${search}%`], (err, rows) => {
    if (!err) resolve(rows)
    else reject(err)
  })
  })
}
