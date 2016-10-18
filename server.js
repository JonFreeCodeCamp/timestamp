var express = require('express');

var app = express();

var port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.end("Add something to the query ie. http://thissite/somequery");
});

app.get('/:query', (req, res) => {
    var d = null;
    if (!Number.isNaN(parseInt(req.params.query, 10))) {
        d = new Date(parseInt(req.params.query, 10));
    } else {
        d = new Date(req.params.query);
        if (d.toDateString() === "Invalid Date") d = null;
    }
    var result = {"unix": null, "natural": null};
    if (d) {
        result["unix"] = d.getTime();
        result["natural"] = d.toDateString();
    }
    res.json(result);
});

app.listen(port);
