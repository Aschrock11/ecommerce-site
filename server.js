// sk_test_51Mw8hrDN0ahl3l0UXDnSbzPqJ1J655dsnuMEgweKhM8EsfN1qLdnOeKehOAmh7ERwZhYHSD9bFTIMeL9UlpwGOEw002Votcjw5
// Open End Sofa With Armrest: price_1Mw8p4DN0ahl3l0UVbpmqSG7

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(
  'sk_test_51Mw8hrDN0ahl3l0UXDnSbzPqJ1J655dsnuMEgweKhM8EsfN1qLdnOeKehOAmh7ERwZhYHSD9bFTIMeL9UlpwGOEw002Votcjw5'
);

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:5173/success',
    cancel_url: 'http://localhost:5173/cancel',
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log('listening on port 4000'));
