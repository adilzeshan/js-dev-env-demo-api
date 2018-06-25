const express = require('express');
const cors = require('cors');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(compression());

app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {
  response.send('Hello World!')
});

app.get('/books', function (req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json(
    [
      {
        "id": 1,
        "author": "Lord Dunsany",
        "book": "The King of Elfland's Daughter",
        "genre": "fantasy"
      },
      {
        "id": 2,
        "author": "JRR Tolkien",
        "book": "The Lord of the Rings",
        "genre": "fantasy"
      },
      {
        "id": 3,
        "author": "Lynn Flewelling",
        "book": "The Bone Doll's Twin",
        "genre": "fantasy"
      }
    ]
  );
});

app.listen(app.get('port'), function () {
  console.log("Node app is running at localhost:" + app.get('port'));
});