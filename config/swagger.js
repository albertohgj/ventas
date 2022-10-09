const options = {
    definition:{
        info:{
            version:"1.0.0",
            title: "Api Ventas BEDU",
            description: "Api de ventas Proyecto BEDU"
        }
    ,
    bearerAuth: {
        type: "http",
        scheme: "bearer",
      },

},
    apis: ["./routes/*.js"]
}

module.exports = options;