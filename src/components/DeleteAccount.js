import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';
import { GamesContext } from '../context/games';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import ErrorMsg from './ErrorMsg';

function DeleteAccount() {
    const gamesContext = useContext(GamesContext)
    const userContext = useContext(UserContext)
    const [open, setOpen] = useState(false)
    const [error, setError] = useState(null)

    function handleError(error) {
        setError(error)
        setTimeout(() => setError(error), 3000)
    }

    function handleDeleteAccount() {
        fetch(`https://gamer-spot.up.railway.app/users/${userContext.user.id}`, {method: 'DELETE'})
        .then(r => {
            if (r.ok) {
                setOpen(false)
                userContext.signOut()
                gamesContext.getAndSetGames()
            } else {
                r.json().then(({ error }) => handleError(error))
            }
        })
    }

    return (
        <>
        <Button onClick={() => setOpen(true)} color='error'>Delete Account</Button>
        <Dialog open={open} onClose={() => setOpen(false)} >
            <DialogContent>
                Are You Sure You Want To Delete Your Account? This Action Cannot Be Undone
            </DialogContent>
            {error ? <ErrorMsg error={error} /> : null}
            <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button onClick={handleDeleteAccount} color="error">Delete</Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default DeleteAccount