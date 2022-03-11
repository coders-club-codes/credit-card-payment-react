export default async function handler(req, res) {
  const stripe = require('stripe')('SUA_CHAVE_SECRET');

  const paymentIntent = await stripe.paymentIntents.create({
    amount: req.body.amount, // centavos
    currency: 'brl',
    payment_method_types: ['card'],
  });

  res.status(200).json(paymentIntent);
}
