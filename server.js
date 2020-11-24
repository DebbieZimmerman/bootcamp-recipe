const express = require('express')
const urllib = require('urllib')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.get('/sanity', function (request, response) {
    response.send('ok')
})

app.get('/recipes/:ingredient', function (request, response) {
    const ingredient = request.params.ingredient
        urllib.request(`https://recipes-goodness.herokuapp.com/recipes/${ingredient}`, function (err, data) {
        let recipes = JSON.parse(data.toString()).results

        response.send(recipes)
    })
})

const port = 8080
app.listen(port, function () {
    console.log(`server is up and running at port ${port}`)
})

