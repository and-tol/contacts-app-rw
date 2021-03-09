import { format, parseISO } from 'date-fns';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { CopyToClipboardText } from '../../../components/CopyToClipboardText';

const useStyles = makeStyles({
  table: {},
});

export const ContactsTable = ({ data }) => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='contacts table'>
        <TableHead>
          <TableRow>
            <TableCell>Avatar</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align='right'>Nationality</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(contact => (
            <TableRow key={contact.login.uuid}>
              <TableCell component='th' scope='row'>
                <Avatar
                  alt={`${contact.name.first} ${contact.name.last}`}
                  src={contact.picture.thumbnail}
                />
              </TableCell>
              <TableCell>{`${contact.name.title} ${contact.name.first} ${contact.name.last}`}</TableCell>
              <TableCell>
                <Typography>
                  {format(parseISO(contact.dob.date), 'MM/dd/yyyy')}
                </Typography>
                <Typography>{`${contact.dob.age} years`}</Typography>
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.email} />
              </TableCell>
              <TableCell>
                <CopyToClipboardText text={contact.cell} />
              </TableCell>
              <TableCell>5</TableCell>
              <TableCell align='right'>5</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};