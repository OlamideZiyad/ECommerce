const stripe = require('stripe')('sk_test_your_secret_key_here');

exports.payment = async (req, res) => {
    const { items } = req.body;

  const lineItems = items.map(item => ({
    price_data: {
      currency: 'fcfa',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100, // le prix en cents
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:5000/api/payment/success',
      cancel_url: 'http://localhost:5000/api/payment/cancel',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

};