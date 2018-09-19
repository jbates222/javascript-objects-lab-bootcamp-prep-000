var recipes = {};
var key;
var value;
recipes[key] = value;
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {key: value});
}