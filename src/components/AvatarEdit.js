import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AvatarEdit({ handleEdit, avatar }) {
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState(avatar)

    const handleForm = () => setOpen(!open)

    function handleSubmit() {
        const body = {avatar_url: formData}
        handleForm()
        handleEdit(body)
    }

    return (
        <>
        <Button variant='text' onClick={handleForm}>Change</Button>
        <Dialog open={open} onClose={handleForm} >
            <DialogTitle>Add Avatar URL</DialogTitle>
            <DialogContent>
                <TextField
                autoFocus
                id="avatar-form"
                label="URL"
                type="input"
                fullWidth
                variant="outlined"
                value={formData}
                onChange={e => setFormData(e.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleSubmit} >Save</Button>
                <Button
                color='error'
                onClick={() => {
                    handleForm()
                    setFormData(avatar)
                }}
                >
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
        </>
    )
}

export default AvatarEdit