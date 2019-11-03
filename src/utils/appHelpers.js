const slugify = (title) => title.replace(/ /g, '_');
const deslugify = (title) => title.replace(/_/g, ' ');
const isValidEmail = (email) => {
  return /\S+@\S+\.\S+/.test(email);
};

export { slugify, deslugify, isValidEmail };
