if (~(req.params.pid == undefined)) {
    if(req.query.pid >= productsArray.length){
        res.send(`Product with this id: ${req.query.pid} does not exist.`)
    } else {
        res.send(productsArray[req.query.pid])
    }
} else {

