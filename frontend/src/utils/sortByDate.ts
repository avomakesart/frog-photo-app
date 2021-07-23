export const sortByDate = (
  a: { created_at: string | number | Date },
  b: { created_at: string | number | Date }
) => {
  var dateA = new Date(a.created_at).getTime();
  var dateB = new Date(b.created_at).getTime();
  return dateA > dateB ? 1 : -1;
};
