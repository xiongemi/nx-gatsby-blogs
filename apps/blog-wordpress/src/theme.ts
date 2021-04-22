import { red, grey, pink } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[300],
    },
    secondary: {
      main: pink[300],
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
});
