import {
    AppBar,
    Toolbar,
    Typography,
    Grid
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import SoccerBallAnimation from './soccer-ball-animation';

export default function NavBar() {
    const navigate = useNavigate();

    return (
        <AppBar
            position="fixed"
            sx={{
                boxShadow: 0,
                bgcolor: 'transparent',
                backgroundImage: 'none',
            }}
        >
            <Grid container>
                <Grid item xs={12}>
                    <Toolbar
                        variant="regular"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexShrink: 0,
                            maxHeight: 60,
                            background: "rgba(255, 255, 255, 0.5)",
                            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                            backdropFilter: "blur(50.0px)",
                        }}
                    >
                        <Grid container
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: "space-between",
                                ml: '-18px',
                                px: 6,
                            }}
                        >
                            <Grid item onClick={() => navigate('/')} >
                                <Grid container
                                    columnGap={2}
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: "center",
                                        cursor: "pointer"
                                    }}>
                                    <Grid item>
                                        <SoccerBallAnimation size={"50px"} />
                                    </Grid>
                                    <Grid item>
                                        <Typography variant={"subtitle1"} color="text.primary">
                                            Sports Analysis Blogs
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={3}>
                                <Grid container justifyContent={"space-evenly"}>
                                    <Grid item sx={{ cursor: "pointer" }}>
                                        <Typography variant="subtitle1" color="text.primary" onClick={() => navigate('/')}>
                                            Home
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ cursor: "pointer" }}>
                                        <Typography variant="subtitle1" color="text.primary" onClick={() => navigate('/blogs')}>
                                            Blogs
                                        </Typography>
                                    </Grid>
                                    <Grid item sx={{ cursor: "pointer" }}>
                                        <Typography variant="subtitle1" color="text.primary" onClick={() => navigate('/')}>
                                            About
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}