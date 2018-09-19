var recipes = {};
var key;
var value;
recipes[key] = value;
function updateObjectWithKeyAndValue(recipes, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value) {
  recipes[key] = value;
  return recipes
}
function deleteFromObjectByKey(recipes, key) {
  var obj = recipes;
  delete obj.key
  return key
}
function