import { red,orange } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#2962ff'
    },
    secondary: {
      main: '#ff4f00'
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});
// '#ff4f00',
export default theme;
