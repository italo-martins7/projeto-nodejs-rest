module.exports = app =>{
    app.get('/atendimentos', (req, res) =>{
        res.send('Você está na rota atendimentos GET')
    })

    app.post('/atendimentos', (req,res) =>{
        console.log(req.body)
        res.send('Você está na rota atendimentos POST')
    })
}