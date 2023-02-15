import React from 'react';
import InputBase from "@mui/material/Input";
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

// const styles = () => ({
//     root: {
//         width: '100%',
//     },
//     cssLabel: {
//         width: '80%',
//         fontSize: '0.8rem',
//         paddingLeft:0,
//         paddingTop:5,
//     },
//     formControl:{
//         paddingTop:10,
//     },
// });

export const InputComponent = ({value, type, error, label, id, translate, required, ...other}) => {
    // validateOnChange = (event) => {
    //     if (this.props.hasOwnProperty('onChange')) {
    //         this.props.onChange(event);
    //     }
    // };
    //
    // validateOnBlur = () => {
    //     let error = this.props.validateFunc(this.props.value);
    //     if(error){
    //         this.setState({
    //             error: error
    //         });
    //     } else {
    //         this.setState({
    //             error: false,
    //         })
    //     }
    // };
    //
    // onFocus = () => {
    //     this.setState({
    //         focused: true,
    //         error: false
    //     });
    // };
    //
    // onBlur = () => {
    //     this.setState({
    //         focused: false
    //     })
    // };

    return (
        <FormControl error={!!error} {...other}>
            <InputLabel htmlFor={id} >{label}</InputLabel>

            <InputBase
                id={id}
                required={required}
                fullWidth
                // classes={{formControl: classes.formControl}}
                // onChange={this.validateOnChange}
                value={value}
                type={type}
                {...other}
            />

            {!!error &&
                <FormHelperText><span dangerouslySetInnerHTML={{__html: error}} /></FormHelperText>
            }
        </FormControl>
    );
}
