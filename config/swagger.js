const options = {
    definition:{
        info:{
            version:"1.0.0",
            title: "Api Ventas BEDU",
            description: "Api de ventas Proyecto BEDU"
        }
    ,
    servers:[
        {
            urs: "http://loscalhost:3000"
        }
    ],
},
    apis: ["./routes/*.js"]
}

module.exports = options;