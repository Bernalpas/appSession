

const inicio = (req, res, next) => {
    res.render('index', { title: 'Express con Node.Js'});
}


module.exports = inicio;