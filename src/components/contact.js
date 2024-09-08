import { Paper, Grid, Divider, Typography, Avatar, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import configs from "../configs/configs";

export default function Contact() {
    return (
        <Paper>
            <Grid container p={2} justifyContent={"center"} rowGap={3} gap={3} bgcolor={"ButtonFace"}>
                <Grid item xs={12} display={"flex"} justifyContent={"center"} p={4}>
                    <Avatar sx={{ width: 80, height: 80 }}>
                        {configs.CONTACT_AVATAR}
                    </Avatar>
                </Grid>
                <Grid item>
                    <Typography variant="h5">
                        {configs.CONTACT_NAME}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Divider />
                </Grid>
                <Grid item px={3} py={1} xs={12} minHeight={"100px"}>
                    <Typography variant="subtitle1">
                        {configs.CONTACT_DESCRIPTION}
                    </Typography>
                </Grid>
                <Grid item sx={!configs.CONTACT_GITHUB && { display: "none" }}>
                    <IconButton sx={{ cursor: "pointer" }}>
                        <GitHubIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid item sx={!configs.CONTACT_LINKEDIN && { display: "none" }}>
                    <IconButton sx={{ cursor: "pointer" }}>
                        <LinkedInIcon fontSize="large" />
                    </IconButton>
                </Grid>
                <Grid item sx={!configs.CONTACT_INSTAGRAM && { display: "none" }}>
                    <IconButton sx={{ cursor: "pointer" }}>
                        <InstagramIcon fontSize="large" />
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    );
}