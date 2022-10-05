import { mockData } from './data';

export const filterWithEmail = (value) =>
  mockData.filter((item) => {
    if (value === '') {
      return item;
    } else if (item.emailAddress.toLowerCase().includes(value.toLowerCase())) {
      return item;
    }
  });

export const filterWithMutiValues = (values) =>
  mockData.filter((item) => {
    if (
      values.search === '' &&
      values.userName === '' &&
      values.status.length === 0
    ) {
      return item;
    } else if (
      item.emailAddress.toLowerCase().includes(values.search.toLowerCase()) &&
      item.userName.toLowerCase().includes(values.userName.toLowerCase()) &&
      values.status.includes(item.status)
    ) {
      return item;
    }
  });
