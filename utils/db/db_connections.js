module.exports = {
    production: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        pool: {
            afterCreate: function(connection, callback) {
                connection.query("SET TIME ZONE 'UTC';", function(err) {
                    callback(err, connection);
                });
            }
        }
    },
    development: {
        client: "pg",
        connection: process.env.DATABASE_URL,
        pool: {
            afterCreate: function(connection, callback) {
                connection.query("SET TIME ZONE 'UTC';", function(err) {
                    callback(err, connection);
                });
            }
        }
    },
    test: {
        client: "pg",
        connection: process.env.DATABASE_TEST_URL,
        pool: {
            afterCreate: function(connection, callback) {
                connection.query("SET TIME ZONE 'UTC';", function(err) {
                    callback(err, connection);
                });
            }
        }
    }
}