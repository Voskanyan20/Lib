const axios = require('axios')
const { Client } = require('pg')
const dotenv = require('dotenv')
dotenv.config()

////Send Tables to another
const sourceClient = new Client({
  user: process.env.DB_USERNAME,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: process.env.PORT
})

sourceClient.connect();


const createTable = async (user, host, database, password, port) => {
  try {
    const res = [];
    const query = await sourceClient.query(
      "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public'"
    )

    query.rows.forEach(row => {
      res.push(row.tablename)
    })

    const result = res.filter(name => name === "roles" || name === "permissions" || name === "rolePermissions")
    console.log(result);

    const destinationClient = new Client({
      user: user,
      host: host,
      database: database,
      password: password,
      port: port
    })
    destinationClient.connect()

    result.map((tableName) => {
      const query = `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${tableName}'`
      sourceClient.query(query, (err, res) => {
        if (err) {
          console.error('Error retrieving table structure:', err)
        } else {
          const columns = res.rows.map(row => ({
            name: row.column_name,
            type: row.data_type
          }))
          createTableInDestination(columns)
        }
        // sourceClient.end()
        // destinationClient.end()
      })
      async function createTableInDestination (columns) {
        const createTableQuery = `CREATE TABLE ${tableName} (${columns
          .map(col => `${col.name} ${col.type}`)
          .join(', ')})`
        destinationClient.query(createTableQuery, err => {
          if (err) {
            console.error(
              'Error creating table in the destination database:',
              err
            )
          } else {
            console.log(
              'Table created successfully in the destination database.'
            )
            copyDataToDestination()
          }
        })
      }
      function copyDataToDestination () {
        const copyQuery = `INSERT INTO ${tableName} SELECT * FROM ${tableName}`
        destinationClient.query(copyQuery, err => {
          if (err) {
            console.error(
              'Error copying data to the destination database:',
              err
            )
          } else {
            console.log('Data copied successfully to the destination database.')
          }
          // sourceClient.end()
          // destinationClient.end()
        })
      }
    })
  } catch (error) {
    console.log(error)
  }
}
// createTable('postgres', 'localhost', 'user1', 'postgres', '5432');

///Check User Permissions

// console.log(instance);

const CheckUserPermissions = async (userName, password , req , res) => {
  let userToken = ''
  await axios
    .post('http://localhost:8080/private/userLogin/', {
      userName: userName,
      password: password
    })
    .then(res => {
      userToken = res.data.token
      return userToken;
    })
    .catch(err => {
      console.log(err.response.data)
    })

    // console.log(userToken);
    await axios
      .post(
        'http://localhost:8080/private/checkUserPermissions/',
        {
          userName: userName
        },
        { headers: { Authorization: `${userToken}` } }
      )
      .then(res => {
        console.log(res.data)
        return res.data        
      })
      .catch(err => {
        console.error(err.response.data)
      })
}

CheckUserPermissions('John Doe', 'admin')
//CheckUserPermissions(userName, 'password')
