import { red, blue, grey } from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

// A custom theme for this app
export const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: blue.A400,
    },
    secondary: {
      main: grey.A400,
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
  },
});
