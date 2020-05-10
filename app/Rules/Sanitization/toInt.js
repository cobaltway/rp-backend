module.exports = (value) => {
  if (typeof value === 'number') return value;
  const cast = Number(value);
  if (Number.isNaN(cast)) return null;
  return cast;
};
