import { useState, useEffect } from "react";
import { Grid, Button, Typography, Box, Grow, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import blogServices from "../services/blog-services";
import BlogPreview from "./blog-preview";
import Loader from "./loader";
import featuredImg from "../assets/featured.jpg"
import { useNavigate } from "react-router-dom";

export default function FeaturedBlogs() {
    const [isLoading, setIsLoading] = useState(false);
    const [featuredBlogs, setFeaturedBlogs] = useState([]);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
    const navigate = useNavigate();

    const getFeaturedBlogs = async () => {
        try {
            setIsLoading(true);
            const blogList = await blogServices.getFeaturedBlogs();
            setFeaturedBlogs(blogList.featured);
        }
        catch (err) { }
        finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        getFeaturedBlogs();
    }, []);

    return (
        <Grid container rowSpacing={5} justifyContent={"center"} ref={ref}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Featured
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Fade in={inView} timeout={1000}>
                    <Box component={"img"} src={featuredImg} height={600} />
                </Fade>
            </Grid>
            <Grid item xs={6}>
                <Grid container rowGap={3} justifyContent={"end"}>
                    <Grid item xs={12}>
                        <Grid container rowGap={3}>
                            {
                                isLoading ?
                                    <Grid item xs={12}>
                                        <Loader />
                                    </Grid>
                                    :
                                    featuredBlogs?.length ? featuredBlogs.map((blog, index) => {
                                        return (
                                            <Grow
                                                key={index}
                                                in={inView}
                                                style={{ transformOrigin: '0 0 0' }}
                                                timeout={1000 * (index + 1)}
                                            >
                                                <Grid item xs={12} key={index}>
                                                    <BlogPreview id={blog.id} title={blog.title} description={blog.description} featured={true} />
                                                </Grid>
                                            </Grow>
                                        )
                                    }) : <></>
                            }
                        </Grid>
                    </Grid>
                    <Grow
                        in={inView}
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={1000 * (featuredBlogs?.length)}
                    >
                        <Grid item xs={12}>
                            <Button variant="outlined" fullWidth onClick={() => { navigate('/blogs') }}>
                                View All
                            </Button>
                        </Grid>
                    </Grow>
                </Grid>
            </Grid>
        </Grid >
    )
}