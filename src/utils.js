export const filterWithEmail = (data, value) =>
  data.filter((item) => {
    if (value === '') {
      return item;
    } else if (item.emailAddress.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });
