const swaggerAutogen = require('swagger-autogen')()


const doc = {
    info: {
        version: "1.0.0",
        title: "My API",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module."
    },
    host: "localhost:3333",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        }
    ],
    definitions: {
        User: {
            name: "Simon Doe",
            admin: false,
            email: "cesarinoarthur@gmail.com",
            created_at: "String date",
            updated_at: "String date"
        },
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = ['./src/index.ts']

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./src/index')           // Your project's root file
})