import Shop from "../models/Shop.js";

export const saveMessage = async (req, res) => {
  const { shopDomain, message } = req.body;

  const shop = await Shop.findOneAndUpdate(
    { shopDomain },
    { postPurchaseMessage: message },
    { new: true }
  );

  res.json(shop);
};

export const getMessage = async (req, res) => {
  const { shopDomain } = req.params;
  const shop = await Shop.findOne({ shopDomain });
  res.json({ message: shop?.postPurchaseMessage });
};
