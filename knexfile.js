module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./sleepdiary.sqlite",
    },
  },
  production: {},
};
