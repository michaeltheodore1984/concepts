const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    res.json(
        [
            { firstName: 'Mike' },
            { firstName: 'John' },
        ]
    )
})

app.listen(port, () => {
    console.log(`Server running. Visit this url in your browser: http://localhost:${port}/api`)
})