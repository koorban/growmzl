import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuFlex from '../core/MenuFlex';
import Dialogue from './Dialogue';
import { createUser } from './api.user';

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: 40,
        paddingBottom: 16
    },
    form: {
        marginTop: 16
    },
    submit: {
        margin: 'auto',
        marginBottom: 16,
    },
    textField: {
        marginLeft: 8,
        marginRight: 8,
        width: 300
    },
    title: {
        textAlign: 'center',
        paddingBottom: 40,
        paddingTop: 40
    },
    spacing: {
        paddingBottom: 128,
        paddingLeft: '3em',
        paddingRight: '3em',
        margin: 'auto'
    },
});

export default function Signup() {
    const classes = useStyles();

    const [ values, setValues ] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        error: '',
        redirect: false,
    });

    const message = `Thank you for registering ${values.first_name}. You registered with email: ${values.email}. Please contact admin@growmzl.com for any questions. Thank You.`;
    const title = 'Thanks for registering!'

    const handleChange = textField => event => {
        setValues({ ...values, [textField] : event.target.value });
    };

    const clickSubmit = () => {
        let newUser = {
            first_name: values.first_name || undefined,
            last_name: values.last_name || undefined,
            email: values.email || undefined,
            password: values.password || undefined,
        };
        createUser(newUser).then((data) => {
            if(data.error) {
                setValues({ ...values, error: data.error})
            } else {
                setValues({ ...values, error: '', redirect: true})
            }
        });
    };

    if (values.redirect) {
        return (
            <Dialogue message={message} title={title}/>
        )
    }
    return (
        <div className={classes.spacing}>
            <MenuFlex/>
            <Typography variant='h2' className={classes.title}>
                Sign Up Now
            </Typography>
            <Card className={classes.card}>
                <Typography variant='h5' className={classes.title}>
                    Registration Form
                </Typography>
                <TextField label="First Name" value={values.first_name} onChange={handleChange('first_name')} className={classes.textField} margin="normal"/>
                <TextField label="Last Name" value={values.last_name} onChange={handleChange('last_name')} className={classes.textField} margin="normal"/>
                <TextField label="Email" value={values.email} onChange={handleChange('email')} className={classes.textField} margin="normal"/>
                <TextField label="Password" value={values.password} onChange={handleChange('password')} className={classes.textField} margin="normal"/>
                <br/>   
                {
                    values.error && (<Typography component="p" color="error">
                    <Icon color="error">error</Icon>
                    {values.error}
                    </Typography>)
                }
                <CardActions>
                    <Button color="primary" variant="contained" onClick={clickSubmit}>Sign up</Button>
                </CardActions>
            </Card>
        </div>
    );
};