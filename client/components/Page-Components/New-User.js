import React, {useState} from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

import Title from './Title';
import { createUser } from '../Api/api.user';
import Dialogue from './Dialogue';

const useStyles = makeStyles({
    card: {
        maxWidth: 600,
        margin: 'auto',
        textAlign: 'center',
        marginTop: 40,
        paddingBottom: 16
    },
    error: {
        verticalAlign: 'middle'
    },
    title: {
        marginTop: 16,
        textAlign: 'center',
        paddingBottom: 20,
        paddingTop: 20
    },
    submit: {
        marginBottom: 16,
        backgroundColor: '#083818',
        color: '#fff',
        marginRight: 8
    },
    spacing: {
        paddingBottom: 150
    },
    formControl: {
        margin: 20,
        minWidth: 120
    },
});

export default function NewUser() {
    const classes = useStyles();
    
    const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        error: '',
        dialogueOpen: false
    });

    const handleChange = name => event => {
        setUser({...user, [name] : event.target.value });
    };

    const clickSubmit = () => {
        let newUser = {
            first_name: user.first_name || undefined,
            last_name: user.last_name || undefined,
            email: user.email || undefined,
            password: user.password || undefined,
        }
        createUser(newUser).then((data) => {
            if(data.error) {
                setUser({...user, error: data.error})
            } else {
                setUser({...user, error: '', dialogueOpen: true})
            }
        });
    };

    const message = `Hello. The account for "${user.first_name}" was successfully created. Contact admin@growmzl.com for any questions. Thank you`;
    const title='New User successfully created!';

    if (user.dialogueOpen) {
        return (
            <Dialogue message={message} title={title}/>
        );
    }
    return (
        <div className={classes.spacing}>
            <Title title={'Create New User'}/>
            <Card className={classes.card}>
                <CardContent>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField 
                            id="first_name" 
                            label=" First Name" 
                            className={classes.textField} 
                            value={user.first_name} 
                            onChange={handleChange('first_name')}
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="last_name"
                            label="Last Name"
                            className={classes.textField}
                            value={user.last_name}
                            onChange={handleChange('last_name')}
                            margin="normal"
                        />
                    </FormControl>
                    <br/>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            value={user.email}
                            onChange={handleChange('email')}
                            margin="normal"
                        />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <TextField
                            id="password"
                            label="Password"
                            className={classes.textField}
                            value={user.password}
                            onChange={handleChange('password')}
                            margin="normal"
                        />
                    </FormControl>
                    {
                        user.error && (<Typography component="p" color="error">
                            <Icon color="error" className={classes.error}>Error</Icon>
                            {user.error}
                        </Typography>)
                    }
                </CardContent>
                <CardActions style={{justifyContent: 'center'}}>
                    <Button variant="contained" onClick={clickSubmit} className={classes.submit}>Submit</Button>
                    <RouterLink to='/'>
                        <Button variant="contained" className={classes.submit}>Cancel</Button>
                    </RouterLink>
                </CardActions>
            </Card>
        </div>
    );
};