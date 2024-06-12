let database = async () => {
    const sqlPromise = initSqlJs({
      locateFile: (file) =>
        `https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/${file}`,
    });
    const dataPromise = fetch("../src/database/switchid.sqlite").then((res) =>
      res.arrayBuffer()
    );
    const [SQL, buf] = await Promise.all([sqlPromise, dataPromise]);
    const initDB = new SQL.Database(new Uint8Array(buf));
    let error = null;
    return await new Promise((resolve,reject) => {
      if(error){
          reject(error);
      }else{
          resolve(initDB);
      }
    });
  }


  document.addEventListener("DOMContentLoaded", () => {
    database().then((db) => {
      const res = db.exec("SELECT * FROM post;");
      console.log(res[0].values);
    }).catch((err)=>{
      console.log(err);
    });
});