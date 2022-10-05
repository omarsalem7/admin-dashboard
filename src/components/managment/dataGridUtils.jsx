import Avatar from '@mui/material/Avatar';

function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

export const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithAvatar">
          <Avatar
            sx={{ bgcolor: stringToColor(params.row.firstName) }}
          >{`${params.row.firstName[0].toUpperCase()}${params.row.lastName[0].toUpperCase()}`}</Avatar>
          <span>{`${params.row.firstName} ${params.row.lastName}`}</span>
        </div>
      );
    },
  },
  { field: 'userName', headerName: 'User Name', width: 200 },
  { field: 'emailAddress', headerName: 'Email Address', width: 200 },
];

export const rows = [
  {
    id: 1,
    lastName: 'Omar',
    firstName: 'ashraf',
    userName: 'omar.ashraf1',
    age: 35,
    emailAddress: 'fdsfdsdfs@gmail.com',
  },
  {
    id: 2,
    userName: 'ahemedsalem12',
    emailAddress: 'dasdsa@gmail.com',
    lastName: 'salem',
    firstName: 'ahmed',
    age: 42,
  },
  {
    id: 3,
    userName: 'john.wick.07',
    emailAddress: 'john@gmail.com',
    lastName: 'wick',
    firstName: 'John',
    age: 45,
  },
  {
    id: 4,
    userName: 'Stark',
    emailAddress: 'stark122@gmail.com',
    lastName: 'Snow',
    firstName: 'stark',
    age: 16,
  },
  {
    id: 5,
    userName: 'Targaryen',
    lastName: 'Good',
    firstName: 'Targaryen',
    emailAddress: 'Targaryen44@gmail.com',
    age: 41,
  },
  {
    id: 6,
    userName: 'Melisandre',
    lastName: 'Snow',
    firstName: 'Jon',
    emailAddress: 'Melisandre@gmail.com',
    age: 150,
  },
  {
    id: 7,
    userName: 'Clifford',
    lastName: 'yehia',
    firstName: 'Clifford',
    emailAddress: 'Cliffordd885@gmail.com',
    age: 44,
  },
  {
    id: 8,
    userName: 'Frances',
    lastName: 'Roxie',
    firstName: 'Frances',
    emailAddress: 'dsasad@gmail.com',
    age: 36,
  },
  {
    id: 9,
    userName: 'Roxie',
    lastName: 'Snow',
    firstName: 'Roxie',
    emailAddress: 'wdqwfw@gmail.com',
    age: 65,
  },
];
