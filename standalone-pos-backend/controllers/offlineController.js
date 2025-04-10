
exports.saveOffline = (req, res) => {
    const transaction = req.body;
    // Save to offline DB logic here
    res.json({ message: 'Saved offline transaction', transaction });
};

exports.listOffline = (req, res) => {
    // Query from offline DB logic here
    res.json({ transactions: [] });
};
