const temp = (req, res) => {
    res.sendFile(__dirname + "/index.html");
}

module.exports = {
    temp,
};