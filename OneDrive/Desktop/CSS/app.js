const http = require('http')
const fs = require('fs')
const { type } = require('os')
const port = 4040

const server = http.createServer(function(req,res){
    res.writeHead(200, {'content-Type':'text/html'})
    fs.readFile('assingment.html', function(error, data){
        if(error){
            res.writeHead(404)
            res.write('Error: File not Found')
        }else{
            res.write(data)
        }
        res.end() 
    })
})

server.listen(port, function(error){
    if (error){
        console.log('Something went wrong', error)
    }else{
        console.log('server is listeining on port' + port)
    }
}) 