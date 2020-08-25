import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import MenuFlex from '../core/MenuFlex';
import { create } from './api.contact';
import Dialogue from './Dialogue';

const useStyles = makeStyles({
    formControl: {
        margin: 40,
        minWidth: 100,
    },
    card: {
        margin: 'auto',
        textAlign: 'center',
        marginTop: 72,
        paddingBottom: 8,
    },
    title: {
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 40
    },
    spacing: {
        paddingBottom: 200
    },
    submit: {
        marginLeft: 100,
        marginBottom: 8
    },
});

export default function Contact(){
    const classes= useStyles();

    const [ info, setInfo ] = useState({
        first_name: '',
        email: '',
        reason: '',
        message: '',
        error: '',
        redirect: false
    });

    const handleChange = textField => event => {
        setInfo({ ...info, [textField] : event.target.value })
    };

    const clickSubmit = () => {
        let newContact = {
            first_name: info.first_name || undefined,
            email: info.email || undefined,
            reason: info.reason || undefined,
            message: info.message || undefined,
        }
        console.log(newContact)
        create(newContact).then((data) => {
            if(data.error) {
                setInfo({ ...info, error: data.error})
            } else {
                setInfo({ ...info, error: '', redirect: true})
            }
        })
    };

    const message = `Hello ${info.first_name}. Thank you for contacting us in regards to ${info.reason}. Our team will respond shortly`;
    const title = 'Thanks for contacting us!'

    if (info.redirect) {
        return (
            <Dialogue message={message} title={title}/>
        )
    }
    return (
        <>
            <MenuFlex/>
            <Grid container spacing={0} direction='column' alignItems='center' justify='center' style={{ minHeight: '80vh' }}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant='h2' className={classes.title}>
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.spacing}>
                    <Card>
                        <Typography variant='h4' component='h2' className={classes.title}>
                            Contact Form
                        </Typography>
                        <Typography variant='body2' className={classes.title}>
                            Question or Comment? Leave us a message
                        </Typography>

                        <FormControl className={classes.formControl}>
                            <TextField
                                id='first_name'
                                label='First Name'
                                value={info.first_name}
                                onChange={handleChange('first_name')}
                            />
                        </FormControl>
                        
                        <FormControl className={classes.formControl}>
                            <TextField
                                id='email'
                                label='Email'
                                value={info.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                        <br/>

                        <FormControl className={classes.formControl}>
                            <InputLabel id='reason'>Reason</InputLabel>
                            <Select
                                labelId='reason'
                                id='reason'
                                value={info.reason}
                                onChange={handleChange('reason')}
                            >
                                <MenuItem value={'General'}>General</MenuItem>
                                <MenuItem value={'Products'}>Products</MenuItem>
                                <MenuItem value={'Review'}>Review</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl className={classes.formControl}>
                            <TextField
                                id='message'
                                label='Message'
                                value={info.message}
                                onChange={handleChange('message')}
                            />
                        </FormControl>
                        <CardActions>
                            <Button color="primary" variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                            <Link to='/'>
                                <Button variant="contained" className={classes.submit}>Cancel</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>   
            </Grid> 
        </>
    );
};