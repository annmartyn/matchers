function get_health(pers) {
  if (pers.health > 50) {
    return 'healthy';
  } else if (pers.health >= 15) {
    return 'wounded';
  } else if (pers.health > 0) {
    return 'critical';
  }
};
export default get_health;
