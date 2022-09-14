import React from "react";
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';



function Contact() {
    return (
        <Container sx={{marginTop: '3%'}}>
            <Paper sx={{color: '#e0e0e0', padding: 5}}>
                <Card sx={{ maxWidth: 700, overflow: 'auto', margin: 'auto' }}>
                    <CardHeader title="Developer: Naftali Kulik" sx={{width: 'fit-content', margin: 'auto'}}/>
                    <CardContent sx={{lineHeight: '2'}}>
                        <Avatar
                        src={"https://drive.google.com/uc?export=view&id=12O1_1NbBDxe0KDwPkMHP897AlJVal0o4"}
                        sx={{
                            float: 'left',
                            width: '20%',
                            height: '20%',
                            marginRight: '2rem'
                        }}
                        />
                        <Typography variant="title">LinkedIn: <Link href="https://www.linkedin.com/in/naftali-kulik-se/">https://www.linkedin.com/in/naftali-kulik-se/</Link></Typography>
                        <br/>
                        <Typography variant="title">Email: <Link href="mailto:naftalikulikse@gmail.com">naftalikulikse@gmail.com</Link></Typography>
                        <br/>
                        <Typography variant="title">Github: <Link href='https://github.com/nkulik94'>https://github.com/nkulik94</Link></Typography>
                        <br/>
                        <Typography variant="title">Blog: <Link href="https://dev.to/nkulik94">https://dev.to/nkulik94</Link></Typography>
                    </CardContent>
                </Card>
            </Paper>
        </Container>
    )
}

export default Contact