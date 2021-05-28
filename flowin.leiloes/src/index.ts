import { connection } from './connection';

connection
.raw("SHOW TABLES")
.then((res) => {console.log(res)})
.catch(console.log)