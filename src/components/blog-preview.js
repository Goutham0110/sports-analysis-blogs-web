import { Divider, Grid, Card, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function BlogPreview({ id, title, description, featured, size = 2, variant = "contained" }) {

    const navigate = useNavigate();

    const openBlog = () => {
        navigate(`/blogs/${title}`)
    }

    let commonSx = {
        borderRadius: 2,
        cursor: "pointer",
    }

    let transparentSx = {
        ...commonSx,
        background: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(15px)"
    }


    return (
        <Card elevation={2} sx={variant === "transparent" ? transparentSx : commonSx} onClick={openBlog}>
            <CardActionArea>
                <Grid container gap={size > 1 ? 2 : 0} p={size > 1 ? 3 : 1} pl={size > 1 ? 3 : 2} direction={"column"} bgcolor={featured && "#A7E6FF"}>
                    <Grid item>
                        <Typography variant={size > 1 ? "h4" : "h6"}>
                            {size > 1 ? ((title?.length > 40) ? title.slice(0, 38) + "..." : title) : ((title?.length > 35) ? title.slice(0, 33) + "..." : title)}
                        </Typography>
                    </Grid>
                    {
                        size > 1 &&
                        <Grid item>
                            <Divider />
                        </Grid>
                    }
                    <Grid item>
                        <Typography variant={size === "small " ? "caption" : "subtitle1"}>
                            {size > 1 && ((description?.length > 182) ? description.slice(0, 180) + "..." : description)}
                        </Typography>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card >
    )
}