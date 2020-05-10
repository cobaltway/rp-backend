module.exports = (value) => {
  return value && value.toISOString ? value.toISOString() : null;
};
