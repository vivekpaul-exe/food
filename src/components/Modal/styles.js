import { makeStyles } from '@material-ui/core/styles';
export const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '0px solid #000',
      borderRadius : "1em",

      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));