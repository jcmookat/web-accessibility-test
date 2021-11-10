const express = require('express')
const pa11y = require('pa11y')
const PORT = process.env.PORT || 5000

// async function run() {
//     const response = await pa11y('http://traversy.dev')
//     console.log(response)
// }

// run()


const app = express()

app.use(express.static('public'))

app.get('/api/test', async(req, res) => {
    if(!req.query.url){
        res.status(400).json({error: 'url is required'})
    } else {
        const results = await pa11y(req.query.url)
        res.status(200).json(results)
    }
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))