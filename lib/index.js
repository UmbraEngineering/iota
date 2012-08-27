
var next = 0;

module.exports = function() {
	return next++;
};

module.exports.set = function(value) {
	if (typeof value === 'number' && ! isNaN(value)) {
		next = value;
	}
};

module.exports.reset = function() {
	module.exports.set(0);
};

