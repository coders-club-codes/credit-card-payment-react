export default async function handler(req, res) {
  const stripe = require('stripe')('SUA_CHAVE_SECRET');

  const token = await stripe.tokens.create({
    card: req.body.card,
  });

  res.status(200).json(token);
}
