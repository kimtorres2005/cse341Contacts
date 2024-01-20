const crypto = require('crypto');

function generateApiKey() {
  // Generate a random 32-character hexadecimal string
  return crypto.randomBytes(16).toString('hex');
}

console.log('Generated API Key:', generateApiKey());