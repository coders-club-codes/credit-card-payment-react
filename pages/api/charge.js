export default async function handler(req, res) {
  const stripe = require('stripe')(
    'sk_test_51JqyuoFOTvsOTNfpCClWaY8gKc8Uk2uKNFb4ZhoItg9kTjrxD5qi97yvBUVG4UZA9mcNhf1wWrXdDIkurc4rcmmm00EXb237gl'
  );

  const charge = await stripe.charges.create({
    amount: req.body.amount, // centavos
    currency: 'brl',
    source: req.body.token,
  });

  res.status(200).json(charge);
}
