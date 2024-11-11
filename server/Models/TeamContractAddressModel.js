const mongoose = require('mongoose');

// Define the schema
const ContractSchema = new mongoose.Schema({
    teamId: {
        type: String,
        required: true,
        unique: true
    },
    contractAddress: String
}, { timestamps: true });

const ContractAddresses = mongoose.models.ContractAddresses || mongoose.model('ContractAddresses', ContractSchema);

module.exports = ContractAddresses;