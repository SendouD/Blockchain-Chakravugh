const route = require('express').Router();
const AddressModel = require("../Models/TeamContractAddressModel");
route.get('/:id', async (req, res) => {
    try {
        const contractAddress = await AddressModel.findOne({ teamId: req.params.id });
        if (!contractAddress) return res.status(404).json({ message: 'Contract address not found' });

        res.json(contractAddress);


    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
})


module.exports = route;