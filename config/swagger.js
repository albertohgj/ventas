const options = {
    swaggerDefinition:{
        info:{
            version:"1.0.0",
            title: "Api Ventas"
        }
    },
    apis: ["./routes/products.js"]
}

module.exports = options;