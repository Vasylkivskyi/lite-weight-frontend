const slugify = title => title.replace(/ /g, '_');
const deslugify = title => title.replace(/_/g, ' ');

export { slugify, deslugify };
