import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link, FormControlLabel, Checkbox } from '@mui/material'
import Lock from '@mui/icons-material/Lock';
import styles from './Styles.css'

const SignIn=()=>{
    return(
        <div>
            <div className={styles.toolbar} />
        <Grid>
            <Paper elevation={5} className={styles.paper}>
                <Grid align='center'>
                     <Avatar className={styles.avatar}><Lock/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username' fullWidth required/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                <Button type='submit' color='primary' variant="contained" className={styles.button} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                     <Link href="#" >
                        Sign Up 
                </Link>
                </Typography>
            </Paper>
        </Grid>
        </div>
    )
}

export default SignIn;