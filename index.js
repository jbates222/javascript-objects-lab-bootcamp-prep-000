var recipes = {};
recipes[key] = value;
function updateObjectWithKeyAndValue(recipes, key, value) {
  var obj = recipes
  obj[key] = value;
  return obj;
}