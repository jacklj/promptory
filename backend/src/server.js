import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("Hello there");
});

app.get('/hi/:name', (req, res) => {
  const responseMessage = `Hi ${req.params.name}!`;
  res.send(responseMessage);
});

const vehicles = {
  car: {
    wheels: 4,
    env: 'land',
  },
  boat: {
    wheels: 0,
    env: 'water'
  },
  bycicle: {
    wheels: 2,
    env: 'land',
  }
}

app.get('/vehicle/:type', (req, res) => {
  const vehicle = req.params.type;
  if (vehicle in vehicles) {
    res.json({
      vehicle: vehicles[vehicle],
    });
  } else {
     res.status(404).send("Sorry can't find that!");
  }
});

app.listen(3000, () => {
  console.log("*** Server listening on port 3000 ***");
})
