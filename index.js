const { Client } = require('pg')

const sourceClient = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'postgres',
  port: 5432
})
sourceClient.connect()

const createTable = async (user, host, database, password, port) => {
  try {
    const res = [];
    const query = await sourceClient.query(
      "SELECT tablename FROM pg_catalog.pg_tables WHERE schemaname='public'"
    )

    query.rows.forEach(row => {
      res.push(row.tablename)
    })
    
    const result = res.filter(name => name === "roles" || name === "permissions")

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
// createTable('postgres', 'localhost', 'postgres1', 'postgres', '5432');