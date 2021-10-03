import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormYNRadio() {
    return (
        <FormControl component="fieldset">

            <RadioGroup row aria-label="position" name="position" defaultValue="top">

                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="Yes"
                    labelPlacement="top"
                />
                <FormControlLabel
                    value="top"
                    control={<Radio color="primary" />}
                    label="No"
                    labelPlacement="top"
                />

            </RadioGroup>
        </FormControl>
    );
}
