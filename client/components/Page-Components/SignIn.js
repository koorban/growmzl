import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuFlex from '../../core/MenuFlex';
import Icon from '@material-ui/core/Icon';
import { signIn } from '../Api/api.user';

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
        backgroundColor: '#083818',
        color: '#fff'
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

export default function SignIn() {
    const classes = useStyles();
    
    const [ values, setValues ] = useState({
        email: '',
        password: '',
        error: '',
        openModal: false
    });

    const handleChange = textField => event => {
        setValues({ ...values, [textField] : event.target.value })
    };

    const clickSubmit = () => {
        let user = {
            email: values.email || undefined,
            password: values.password || undefined,
        };
        signIn(user).then((data) => {
            if(data.error) {
                setValues({ ...values, error: "data.error"})
            } else {
                setValues({ ...values, error: '', openModal: true})
            }
        });
    };

    if (values.openModal) {
        return (<Redirect to='/admin'/>)
    }
    return (
        <div className={classes.spacing}>
            <MenuFlex/>
            <Typography variant='h2' className={classes.title}>
                Admin
            </Typography>
            <Card className={classes.card}>
                <Typography variant='h5' className={classes.title}>
                    Grow MZL Admin
                </Typography>
                <TextField label="Email" value={values.email} onChange={handleChange('email')} className={classes.textField} margin="normal"/>
                <TextField label="Password" value={values.password} onChange={handleChange('password')} className={classes.textField} margin="normal"/>
                <br/>
                {
                    values.error && (<Typography component="p" color="error">
                    <Icon color="error">error</Icon>
                    {values.error}
                    </Typography>)
                }
                <CardActions style={{justifyContent: 'center'}}>
                    <Button className={classes.submit} variant="contained" onClick={clickSubmit}>Sign In</Button>
                </CardActions>
            </Card>
        </div>
    );
};