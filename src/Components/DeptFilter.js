import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '150%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function DeptFilter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="dept-native-helper"></InputLabel>
        <NativeSelect
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'Dept',
            id: 'dept-native-helper',
          }}
        >
          <option aria-label="None" value="" />
          <option value={10}>Medical</option>
          <option value={20}>Non-Medical</option>
          <option value={30}>Para-Medical</option>
        </NativeSelect>
      </FormControl>

    </div>
  );
}
