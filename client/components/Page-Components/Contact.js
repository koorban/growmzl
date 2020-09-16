import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';

import contactImage from '../../../dist/contactus.jpg';
import { create } from '../Api/api.contact';
import DialogueContact from './DialogueContact';
import MenuFlex from '../../core/MenuFlex';

const useStyles = makeStyles({
    formControl: {
        margin: 40,
        minWidth: 180,
        paddingLeft: 50
    },
    card: {
        maxWidth: 600,
        textAlign: 'center',
        marginTop: 72,
        paddingBottom: 8,
        margin: 'auto',
    },
    title: {
        textAlign: 'center',
        paddingBottom: 80,
        paddingTop: 80
    },
    typography: {
        textAlign: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    spacing: {
        paddingBottom: 128,
        paddingLeft: '3em',
        paddingRight: '3em',
        margin: 'auto'
    },
    submit: {
        marginBottom: 8,
        backgroundColor: '#083818',
        color: '#fff',
        marginRight: 50
    },
    image: {
        maxHeight: '80%',
        width: '100%'
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
        dialogueOpen: false
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
        create(newContact).then((data) => {
            if(data.error) {
                setInfo({ ...info, error: data.error})
            } else {
                setInfo({ ...info, error: '', dialogueOpen: true})
            }
        })
    };

    const message = `Hello ${info.first_name}. Thank you for contacting us in regards to '${info.reason}'. Our team will respond shortly.`;
    const title = 'Thanks for contacting us!';

    if (info.dialogueOpen) {
        return (
            <DialogueContact message={message} title={title}/>
        )
    }
    return (
        <div className={classes.spacing}>
            <MenuFlex/>
            <Grid container spacing={1} style={{ minHeight: '80vh'}}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Typography variant='h2' className={classes.title}>
                        Contact Us
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <img src={contactImage} className={classes.image}/>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Card>
                        <CardContent>
                            <Typography variant='h4' component='h2' className={classes.typography}>
                                Contact Form
                            </Typography>
                            <Typography variant='body2' className={classes.typography}>
                                Question or Comment? Send us a message
                            </Typography>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id='first_name'
                                    label='First Name'
                                    value={info.first_name}
                                    onChange={handleChange('first_name')}
                                    margin='normal'
                                />
                            </FormControl>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    id='email'
                                    label='Email'
                                    value={info.email}
                                    onChange={handleChange('email')}
                                    margin='normal'
                                />
                            </FormControl>
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel id='reason' style={{marginLeft: 50}}>Reason</InputLabel>
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
                                    margin='normal'
                                />
                            </FormControl>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <Button variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                            <Link to='/'>
                                <Button variant="contained" className={classes.submit}>Cancel</Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>   
            </Grid> 
        </div>
    );
};