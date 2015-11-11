var express = require('express');
var app = express();

app.use(express.static('public'));

//app.get('/', function (req, res) {
//    res.sendFile(__dirname + "/index.html" );
//});

app.get('/user-data/:userId', function (req, res) {
    // Prepare output in JSON format
    var users = [
            {
                id: 1,
                firstName: 'Miriam',
                lastName: 'Bayona',
                occupation: 'Technical Director'
            },
            {
                id: 2,
                firstName: 'Alejandro',
                lastName: 'Celaya',
                occupation: 'Programma'
            }
        ],
        userId = req.params.userId,
        response = null;

    users.forEach(function (user) {
        if (user.id == userId) {
            response = user;
        }
    });

    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(8081, function () {
    var port = server.address().port;
    console.log("Example app listening at http://localhost:%s", port)
});