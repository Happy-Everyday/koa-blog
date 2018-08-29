module.exports = {
    port: 8080,
    dbUrl: "mongodb://localhost:27017/myblog",
    corsConfig: {
        origin: "*",
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ['GET', 'POST', 'DELETE'],
        allowHeaders: ['*']
      }
}