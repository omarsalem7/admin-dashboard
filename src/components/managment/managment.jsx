import './managment.css';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import { useFormik } from 'formik';
import SearchInput from '../searchInput/searchInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { columns, rows } from './dataGridUtils';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 5;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};
const names = ['Active', 'Inactive', 'Locked'];

function Managment() {
  const formik = useFormik({
    initialValues: {
      search: '',
      userName: '',
      startDate: '',
      endDate: '',
      status: [],
    },
  });
  const [value, setValue] = useState([
    new DateObject().setDay(15),
    new DateObject().add(1, 'month').setDay(15),
  ]);

  const [checks, setChecks] = useState([]);

  useEffect(() => {
    formik.values.startDate = value[0]?.toDate().toISOString();
    formik.values.endDate = value[1]?.toDate().toISOString();
    formik.values.status = checks;
  }, [value, checks]);
  console.log(formik.values);
  console.log(value[0].toDate().toISOString());

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChecks(typeof value === 'string' ? value.split(',') : value);
  };
  return (
    <div className="manage-container">
      <div className="mange-header">
        <h1>User Managment</h1>
        <button className="add-btn"> + Add New</button>
      </div>

      <div className="managment">
        <form onSubmit={formik.handleSubmit} className="form-filters">
          <SearchInput
            name="search"
            onChange={formik.handleChange}
            style={{ width: '20%' }}
            placeholder="Search..."
          />
          <SearchInput
            name="userName"
            onChange={formik.handleChange}
            style={{ width: '15%' }}
            placeholder="user name"
          />
          <FormControl sx={{ width: 200 }} size="small">
            <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={checks}
              onChange={handleChange}
              input={<OutlinedInput label="Status" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={checks.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <DatePicker
            value={value}
            onChange={setValue}
            range
            numberOfMonths={2}
            plugins={[<Footer position="bottom" />]}
          />
          <button className="apply-filter-btn">Apply Filters</button>
        </form>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

export default Managment;
