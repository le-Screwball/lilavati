import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: 'radial-gradient(45deg, #FFFFFF 30%, #E2FFF6 90%)',
        },
        secondary: {
            main: 'radial-gradient(45deg, #FF6896 30%, #2E166E 90%)',
        },
    },
});

export default theme;