const router = require('express').Router();
const stripe = require('stripe')('sk_test_51NCMbNIxMuivi4RNeXNK2t1OFPbDOXY3iF99iFKkYk2jFJQ86ganehBRtsn11I60ge9GpCtxiLyRrQPICx6aHW3E00DkV1sOPl');

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'brl',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    },
  );
});
module.exports = router;
