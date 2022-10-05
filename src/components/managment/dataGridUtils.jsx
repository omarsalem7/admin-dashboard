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
