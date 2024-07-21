const MAX_SAFE_INTEGER = 9_007_199_254_740_991;

/** Checks if `value` is a valid array-like length. @see https://lodash.com/docs/4.17.15#isLength */
function isLength(value) {
	return (
		typeof value === 'number' && value > -1 && value % 1 === 0 && value <= MAX_SAFE_INTEGER
	);
}

export default function hasLength(object) {
	return (
		Array.isArray(object)
		|| (Object.hasOwn(object, 'length')
			&& isLength(object.length)
			&& (object.length === 0 || '0' in object))
	);
}
