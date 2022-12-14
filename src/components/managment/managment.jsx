import './managment.css';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useEffect } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';
import { useFormik } from 'formik';
import CustomInput from '../customInput/customInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { columns } from './dataGridUtils';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import MainBtn from '../mainBtn/mainBtn';
import { filterWithMutiValues } from '../../utils';

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

function Managment({ data, setData }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const formik = useFormik({
    initialValues: {
      search: '',
      userName: '',
      startDate: '',
      endDate: '',
      status: [],
    },
    onSubmit: (values) => {
      if (
        typeof values.startDate === 'undefined' &&
        typeof values.endDate === 'undefined'
      ) {
        values.startDate = '';
        values.endDate = '';
      }
      setData(filterWithMutiValues(values));
    },
  });
  const formikModal = useFormik({
    initialValues: {
      id: '',
      lastName: '',
      firstName: '',
      userName: '',
      emailAddress: '',
      status: '',
      date: '',
    },
    onSubmit: (values) => {
      formikModal.values.date = new Date().toLocaleDateString();
      formikModal.values.id = Math.floor(100000 + Math.random() * 900000);
      setData((prev) => [...prev, values]);
      setOpen(false);
    },
  });
  const [value, setValue] = useState([
    new DateObject().setDay(new Date().getDate()),
    new DateObject().add(1, 'month').setDay(15),
  ]);

  const [checks, setChecks] = useState([]);
  useEffect(() => {
    formik.values.startDate = value[0]?.toDate()?.toLocaleDateString();
    formik.values.endDate = value[1]?.toDate()?.toLocaleDateString();
    formik.values.status = checks;
  }, [value, checks, data]);

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
        <MainBtn onClick={handleOpen}>+ Add New</MainBtn>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={{ ...style }}>
            <div className="modal-container">
              <div className="modal-header">
                <h2>Add New User</h2>
                <Button onClick={handleClose}>
                  <CloseIcon fontSize="large" color="success" />
                </Button>
              </div>
              <form onSubmit={formikModal.handleSubmit} className="modal-form">
                <div>
                  <label>First Name</label>
                  <CustomInput
                    onChange={formikModal.handleChange}
                    name="firstName"
                    placeholder="Enter First Name"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <CustomInput
                    onChange={formikModal.handleChange}
                    name="lastName"
                    placeholder="Enter Last Name"
                  />
                </div>
                <div>
                  <label>User Name</label>
                  <CustomInput
                    onChange={formikModal.handleChange}
                    name="userName"
                    placeholder="Enter Username"
                  />
                </div>
                <div>
                  <label>Email Address</label>
                  <CustomInput
                    onChange={formikModal.handleChange}
                    name="emailAddress"
                    placeholder="Enter email address"
                  />
                </div>
                <FormControl
                  style={{ width: '100%', marginLeft: '-1px' }}
                  sx={{ m: 1, minWidth: 140 }}
                  size="small"
                >
                  <InputLabel id="demo-select-small">Status</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="status"
                    value={formikModal.values.status}
                    label="Age"
                    name="status"
                    onChange={formikModal.handleChange}
                  >
                    <MenuItem value={'Active'}>Active</MenuItem>
                    <MenuItem value={'Inactive'}>Inactive</MenuItem>
                    <MenuItem value={'Locked'}>Locked</MenuItem>
                  </Select>
                </FormControl>

                <hr />
                <div className="modal-footer">
                  <MainBtn type="submit">Add user</MainBtn>
                  <MainBtn onClick={handleClose} style={{ background: 'gray' }}>
                    Cancel
                  </MainBtn>
                </div>
              </form>
            </div>
          </Box>
        </Modal>
      </div>
      <div className="managment">
        <form onSubmit={formik.handleSubmit} className="form-filters">
          <CustomInput
            name="search"
            onChange={formik.handleChange}
            style={{ width: '20%' }}
            placeholder="Search..."
          />
          <CustomInput
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
          <button type="submit" className="apply-filter-btn">
            Apply Filters
          </button>
        </form>
        <DataGrid
          rows={data}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  borderRadius: '7px',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
};
export default Managment;
