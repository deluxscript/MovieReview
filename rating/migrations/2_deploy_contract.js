var Ratings = artifacts.require("./Rating.sol");

module.exports = function(deployer) {
  deployer.deploy(Ratings,['Acrimony', 'Blank Panther', 'Damsel', 'Beirut', 'Nancy', 'Blockers', 'Leave No Trace', 'Paddington 2', 'Night Comes On', 'Eight Grade'], {gas: 6700000});
};