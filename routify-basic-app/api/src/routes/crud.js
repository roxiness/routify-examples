module.exports = function (app) {
    app.get('/crud/:model/', (req, res) => {
        res.send('/crud/' + req.params.model)
    })


    app.get('/crud/:model/:id', (req, res) => {

    })

    
    app.post('/crud/:model/:id', (req, res) => {

    })
    

    app.put('/crud/:model/:id', (req, res) => {

    })
    

    app.delete('/crud/:model/:id', (req, res) => {

    })
}