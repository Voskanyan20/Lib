const { Client } = require('pg')

const sourceClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: '5432'
})

const destinationClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres1',
  password: 'postgres',
  port: '5432'
})

sourceClient.connect()
destinationClient.connect()



const createTable = (tableName) => {

  const query = `SELECT column_name, data_type FROM information_schema.columns WHERE table_name = '${tableName}'`

  sourceClient.query(query, (err, res) => {
    if (err) {
      console.error('Error retrieving table structure:', err)
    } else {
      // Get the column names and data types
      const columns = res.rows.map(row => ({
        name: row.column_name,
        type: row.data_type
      }))

      // Call a function to create the table in the destination database
      createTableInDestination(columns)
    }

    // Disconnect from the databases
    // sourceClient.end()
    // destinationClient.end()
  })

  function createTableInDestination (columns) {
    const createTableQuery = `CREATE TABLE ${tableName} (${columns
      .map(col => `${col.name} ${col.type}`)
      .join(', ')})`

    destinationClient.query(createTableQuery, err => {
      if (err) {
        console.error('Error creating table in the destination database:', err)
      } else {
        console.log('Table created successfully in the destination database.')
        // Call a function to copy the data from the source to the destination table
        copyDataToDestination()
      }
    })
  }

  function copyDataToDestination () {
    const copyQuery = `INSERT INTO ${tableName} SELECT * FROM ${tableName}`

    destinationClient.query(copyQuery, err => {
      if (err) {
        console.error('Error copying data to the destination database:', err)
      } else {
        console.log('Data copied successfully to the destination database.')
      }

      // Disconnect from the databases
      // sourceClient.end()
      // destinationClient.end()
    })
  }
}
const names = ['roles', 'permissions']
names.map(name => {
  createTable(name)
})

