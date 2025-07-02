exports.Hello1 = (req, res) => {
    res.status(200).json({status: "Success", data: "Hello Get APi Catched"})
}

exports.Hello2 = (req, res) => {
    res.status(201).json({status: "Success", data: "Hello Get post Catched"})
}



