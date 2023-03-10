import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { Client } = require('pg')

const client = new Client({
    host: 'localhost',
    user: 'adesola',
    password: 'adesola',
    database: 'bankdb',
    port: 5432,
})

client.connect(err => {
    if(err) {
        console.log(`\n ❌ Error in connectivity`);
    }else{
        console.log(`\n ✅ Connected successfully`);
    }
    client.end()
})  

const createNewAccount = ({ ac_id, ac_name, balance }, onCreate = undefined) => {
    client.query(`insert into account values ($1, $2, $3)`, [ac_id, ac_name, balance], (err, _res) => {
         if (err) {
            console.log(`\n ❌  Problem in creating your account`);
        } else {
            console.log(`\n ✅  New account created successfully`)
            if(onCreate) onCreate(`✅  New account created successfully`)
        }
        client.end()
    })
}


const withdraw = () => {}

const deposit = () => {}

const transfer = () => {}

createNewAccount({ ac_id: 2, ac_name: 'pqr', balance: 0 })


