import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


function BioEdit({ bio = '', action, handleEdit }) {
    const [open, setOpen] = useState(false)
    const [bioForm, setBioForm] = useState(bio)

    const handleShowForm = () => setOpen(!open)

    function handleSubmit() {
        const body = {bio: bioForm}
        handleShowForm()
        handleEdit(body)
    }

    return (
        <>
        <Button variant='text' onClick={handleShowForm} >{action}</Button>
        <Dialog open={open} onClose={handleShowForm} >
            <DialogTitle>{action}</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                id="bio-form"
                label="Edit Bio"
                type="textarea"
                fullWidth
                variant="outlined"
                multiline
                value={bioForm}
                onChange={e => setBioForm(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} >Save</Button>
                <Button
                color='error'
                onClick={() => {
                    handleShowForm()
                    setBioForm(bio)
                }}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default BioEdit