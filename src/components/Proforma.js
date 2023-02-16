import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Form, Field } from 'react-final-form'
import {Button, generateUtilityClasses, MenuItem, Select, TextField} from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";


const classes = generateUtilityClasses("Grid", [
    "root",
    "buttonWrapper",
]);

const StyledGrid = styled(Grid)(({ theme }) => ({
    [`&.${classes.root}`]: {
        maxWidth: 500,
    },
    [`& .${classes.buttonWrapper}`]: {
        marginTop: theme.spacing(4),
        textAlign:'end'
    },
}))


export const Proforma = () => {

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

    const onSubmit = async values => {
        await sleep(300)
        window.alert(JSON.stringify(values, 0, 2))
    }

    const validate = (values) => {
        const errors = {}

        Object.keys(values).forEach((key)=>{
            if (!values[key]) {
                errors[key] = 'Required'
            }
        })

        if (Number(values.stickerPrice) > Number(values.wholesalePrice)){
            errors.wholesalePrice = 'Wholesale price should be more than the sticker price'
        }
        return errors
    }

    const  formatOnBlur = (value) => {
        if (!!value) {
            return Number(value.replaceAll(',','')).toFixed(2)
        }
        return value
    }

    const onBlur = callback => e => {
        const value =formatOnBlur(e.target.value)
        const syntheticEvent = {
            target:{
                name:e.target.name,
                value:value
            }
        }
        callback(syntheticEvent)
    }

    const  reverseString = (str) => {
        return str.split("").reverse().join("");
    }

    const getMask = (value) => {
        if (!!value  && !isNaN(Number(value))) {
            const array = value.split('.')
            const integer  = reverseString(array[0]).match(/.{1,3}/g).join(',')
            array[0] = reverseString(integer)
            return array.join('.')
        }
        return ''
    }

    const destroyMask = (value) => {
        const val = value.replaceAll(',','')
        let result
        if (isNaN(Number(val))) {
            result = val.replaceAll(/[^\d.]/ig,"").split('.')
        }
        if (!!val && val.includes('.')){
            result = val.split('.')
        }
        if (!!result){
            result[0]= result[0]+'.'
            if (!result[1] || result[1].length <=2 ){
                return result.join('')
            } else if (!!result[1] && result[1].length > 2) {
                return result[0] + result[1][0] + result[1][1]
            }
        }
        return val
    }

    return (
        <StyledGrid className={classes.root}>
            <Box
                sx={{
                    width: 500,
                    p: 2,
                    bgcolor: 'background.default',
                    display: 'grid',
                    gap: 2,
                }}
            >
                <Form
                    onSubmit={onSubmit}
                    validate={validate}
                    initialValues={{ stickerPrice: '', onlinePrice: '',wholesalePrice:'',requiredDown:'', autoMarkup:'false'  }}
                    render={({ handleSubmit, submitting,invalid }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid sx={{marginTop:'1rem'}}>
                                <Field
                                    name="autoMarkup">
                                    {({ input, meta: { error, touched } }) => (
                                        <FormControl fullWidth>
                                            <InputLabel
                                                style={{left: '-0.8rem', top: '0.2rem', textAlign:'start'}}
                                            >Auto Markup</InputLabel>
                                            <Select
                                            required
                                            variant='standard'
                                            fullWidth
                                            defaultValue={"false"}
                                            onChange={input.onChange}
                                        >
                                            <MenuItem value={'false'} style={{textAlign:'start'}}>
                                                <em>No</em>
                                            </MenuItem>
                                            <MenuItem value={'true'}>Yes</MenuItem>
                                        </Select>
                                        </FormControl>
                                    )}
                                </Field>
                            </Grid>
                            <Grid sx={{marginTop:'1rem'}}>
                                <Field
                                    name="stickerPrice"
                                    parse={value => destroyMask(value)}
                                    format={value => getMask(value)}
                                >
                                    {({ input, meta: { error, touched } }) => (
                                        <TextField
                                            {...input}
                                            required
                                            label={'Sticker Price'}
                                            variant="standard"
                                            color="primary"
                                            error={touched && error}
                                            helperText={touched && error}
                                            fullWidth
                                            onBlur={onBlur(input.onChange)}
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid sx={{marginTop:'1rem'}}>
                                <Field
                                    name="onlinePrice"
                                    parse={value => destroyMask(value)}
                                    format={value => getMask(value)}
                                >
                                    {({ input, meta: { error, touched } }) => (
                                        <TextField
                                            {...input}
                                            required
                                            label={'Online Price'}
                                            variant="standard"
                                            color="primary"
                                            error={touched && error}
                                            helperText={touched && error}
                                            fullWidth
                                            onBlur={onBlur(input.onChange)}
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid sx={{marginTop:'1rem'}}>
                                <Field
                                    name="wholesalePrice"
                                    parse={value => destroyMask(value)}
                                    format={value => getMask(value)}
                                >
                                    {({ input, meta: { error, touched } }) => (
                                        <TextField
                                            {...input}
                                            required
                                            label={'Wholesale Price'}
                                            variant="standard"
                                            color="primary"
                                            error={touched && error}
                                            helperText={touched && error}
                                            fullWidth
                                            onBlur={onBlur(input.onChange)}
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid sx={{marginTop:'1rem'}}>
                                <Field
                                    name="requiredDown"
                                    parse={value => destroyMask(value)}
                                    format={value => getMask(value)}
                                >
                                    {({ input, meta: { error, touched } }) => (
                                        <TextField
                                            {...input}
                                            required
                                            label={'Required Down'}
                                            variant="standard"
                                            color="primary"
                                            error={touched && error}
                                            helperText={touched && error}
                                            fullWidth
                                            onBlur={onBlur(input.onChange)}
                                        />
                                    )}
                                </Field>
                            </Grid>
                            <Grid className={classes.buttonWrapper}>
                                <Button
                                    variant="contained"
                                    type="submit"
                                    disabled={submitting || invalid}
                                >
                                    Save and back
                                </Button>
                            </Grid>
                        </form>
                    )}
                />
            </Box>
        </StyledGrid>
    );
}
