export default async function handler(req, res) {
  const stripe = require('stripe')(
    'sk_test_51JqyuoFOTvsOTNfpCClWaY8gKc8Uk2uKNFb4ZhoItg9kTjrxD5qi97yvBUVG4UZA9mcNhf1wWrXdDIkurc4rcmmm00EXb237gl'
  );

  const token = await stripe.tokens.create({
    card: req.body.card,
  });

  res.status(200).json(token);
}
