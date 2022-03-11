export default async function handler(req, res) {
  const stripe = require('stripe')('SUA_CHAVE_SECRET');

  const charge = await stripe.charges.create({
    amount: 3500, // centavos
    currency: 'brl',
    source: req.body.token,
  });

  res.status(200).json(charge);
}
