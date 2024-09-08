import { Button, Grid, Typography, Fade } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import SoccerBallAnimation from "./soccer-ball-animation";

export default function Hero() {
    const navigate = useNavigate();
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });


    return (
        <Grid container ref={ref} minHeight={"100vh"}>
            <Grid item xs={6} display={"flex"} justifyContent={"center"} flexDirection={"column"} pl={10} pb={20}>
                <Fade in={inView} timeout={700}>
                    <Grid container direction={"column"} rowSpacing={2}>
                        <Grid item>
                            <Typography variant="h2">
                                Beyond the Scoreboard
                            </Typography>
                            <Typography variant="h4">
                                Exploring the Essence of Sports
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Button onClick={() => { navigate('/blogs') }} color={"primary"}>
                                View Blogs
                            </Button>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
            <Grid item xs={6} display={"flex"} justifyContent={"center"} alignItems={"center"} >
                <SoccerBallAnimation size={"800px"} />
            </Grid>
        </Grid>
    )
}