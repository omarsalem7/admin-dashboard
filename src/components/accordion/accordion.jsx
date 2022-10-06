import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './accordion.css';

const AccordionField = () => {
  return (
    <div className="accordion">
      <Accordion>
        <AccordionSummary
          className="accordion-color"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          ATM Settings
        </AccordionSummary>
        <AccordionDetails className="accordion-color-detail">
          <ul>
            <li>Users</li>
            <li>Profiles</li>
            <li>Groups</li>
          </ul>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          className="accordion-color"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>User Managment</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordion-color-detail">
          <ul>
            <li>Users</li>
            <li>Profiles</li>
            <li>Groups</li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionField;
