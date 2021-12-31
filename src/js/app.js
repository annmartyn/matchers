function compare(a, b) {
  const healthA = a.health;
  const healthB = b.health;

  let comparison = 0;
  if (healthA > healthB) {
    comparison = -1;
  } else if (healthA < healthB) {
    comparison = 1;
  }
  return comparison;
};

function get_match(list_of_pers) {
  return list_of_pers.sort(compare);
};

export default get_match;
