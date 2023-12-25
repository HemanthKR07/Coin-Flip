const CoinFlip = artifacts.require("coinFlip");

module.exports = function (deployer) {
  deployer.deploy(CoinFlip);
};