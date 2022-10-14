const express = require('express')
require('./db/config')
const cors = require('cors')
const User = require('./db/User')
const PoemsHome = require('./db/poemsHome')

//for admin panel
const GazalHome = require('./db/Gazal')
const PoetHome = require('./db/Poet')
const ShyariHome = require('./db/Shyari')
const PoemHome = require('./db/Poems')

const app = express()

app.use(express.json())
app.use(cors())

app.post('/register', async (req, resp) => {
    let user = new User(req.body)
    let result = await user.save()
    result = result.toObject()
    delete result.password
    resp.send(result)
})

app.post('/login', async (req, resp) => {
    if (req.body.password && req.body.email) {
        let user = await User.findOne(req.body).select('-password')
        if (user) {
            resp.send(user)
        } else {
            resp.send({ result: "no user found" })
        }
    } else {
        resp.send({ result: "no result fount" })
    }
})

app.post('/poemshomes', async (req, resp) => {
    let pHome = new PoemsHome(req.body)
    let result = await pHome.save()
    resp.send(result)
})

app.get('/poemshomes', async (req, resp) => {
    let result = await PoemsHome.find()
    if (result.length > 0) {
        resp.send(result)
    } else {
        resp.send({ result: 'no data found' })
    }
})

app.delete('/delete/:id', async (req, resp) => {
    let result = await PoemsHome.deleteOne({ _id: req.params.id })
    resp.send(result)
})

app.put('/update/:id', async (req, resp) => {
    let result = await PoemsHome.updateOne(
        { _id: req.params.id },
        { $set: req.body }
    )
    resp.send(result)
})

app.get('/getone/:id', async (req, resp) => {
    let result = await PoemsHome.findOne({ _id: req.params.id })
    resp.send(result)
})

// api for admin panel

app.post('/shyarihomes', async (req, resp) => {
    let sHome = new ShyariHome(req.body)
    let result = await sHome.save()
    resp.send(result)
})

app.post('/gazalhomes', async (req, resp) => {
    let gHome = new GazalHome(req.body)
    let result = await gHome.save()
    resp.send(result)
})

app.post('/poethomes', async (req, resp) => {
    let pHome = new PoetHome(req.body)
    let result = await pHome.save()
    resp.send(result)
})

app.post('/poems', async (req, resp) => {
    let poHome = new PoemHome(req.body)
    let result = await poHome.save()
    resp.send(result)
})

app.get('/gazal', async (req, resp) => {
    let result = await GazalHome.find()
    resp.send(result)
})

app.get('/poet', async (req, resp) => {
    let result = await PoetHome.find()
    resp.send(result)
})

app.get('/shyari', async (req, resp) => {
    let result = await ShyariHome.find()
    resp.send(result)
})

app.get('/poems', async (req, resp) => {
    let result = await PoemHome.find()
    resp.send(result)
})
app.listen(5000)