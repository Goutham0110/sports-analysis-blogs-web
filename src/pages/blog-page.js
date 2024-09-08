import { useEffect, useState } from "react";
import { Divider, Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import blogServices from "../services/blog-services";
import { useParams } from "react-router-dom";
import Loader from "../components/loader";
import Subscribe from "../components/subscribe";
import { useInView } from "react-intersection-observer";
import BlogPreview from "../components/blog-preview";

export default function Blog() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 1 });
    const [isLoading, setIsLoading] = useState(true);
    const [isFeatureLoading, setIsFeatureLoading] = useState(false);
    const [featuredBlogList, setFeaturedBlogList] = useState([]);
    const [blog, setBlog] = useState({});
    const params = useParams();


    const getBlog = async () => {
        try {
            setIsLoading(true);
            const blogData = await blogServices.getBlog({ title: params.title });
            setBlog(blogData);
        }
        catch (err) { }
        finally {
            setIsLoading(false);
        }
    }

    const getFeaturedBlogs = async () => {
        try {
            setIsFeatureLoading(true);
            const featuredList = await blogServices.getFeaturedBlogs();
            setFeaturedBlogList(featuredList?.featured);
        }
        catch (err) { }
        finally {
            setIsFeatureLoading(false);
        }
    }

    useEffect(() => {
        getBlog();
    }, []);

    useEffect(() => {
        if (inView) {
            getFeaturedBlogs();
        }
    }, [inView])

    return (
        <Grid container mt={10} pb={5} justifyContent={"center"} gap={10} width={"95vw"}>
            <Grid item xs={6} >
                <Grid container gap={3}>
                    <Grid item xs={12}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link underline="hover" color="inherit" href="/">
                                Home
                            </Link>
                            <Link
                                underline="hover"
                                color="inherit"
                                href="/blogs"
                            >
                                Blogs
                            </Link>
                            <Link
                                underline="hover"
                                color="text.primary"
                                aria-current="page"
                            >
                                {blog.title}
                            </Link>
                        </Breadcrumbs>
                    </Grid>

                    {
                        isLoading ?
                            <Loader sx={{ height: "60vh", width: "100%" }} />
                            :
                            <Grid item xs={12} >
                                <Grid container gap={2}>

                                    <Grid item xs={12}>
                                        <Typography variant="h3">
                                            {blog.title}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Divider />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant="h6">
                                            {blog.description}
                                        </Typography>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <Typography variant="body1">
                                            {blog.content}
                                        </Typography>
                                    </Grid>

                                </Grid>
                            </Grid>
                    }
                </Grid>
            </Grid>

            < Grid item xs={10}>
                {
                    !isLoading &&
                    <Grid container ref={ref} gap={5} justifyContent={"center"}>

                        <Grid item xs={8}>
                            <Subscribe />
                        </Grid>

                        <Grid item xs={8} bgcolor={"ButtonFace"} p={5}>
                            <Grid container gap={3} justifyContent={"center"}>

                                <Grid item xs={10}>
                                    <Typography variant="h5">
                                        You might also like...
                                    </Typography>
                                </Grid>

                                <Grid item xs={10}>
                                    {
                                        isFeatureLoading ?
                                            <Loader />
                                            :
                                            <Grid container gap={3}>
                                                {featuredBlogList.map((blog, index) => {
                                                    return (
                                                        <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                                                            <BlogPreview id={blog.id} title={blog.title} desc={blog.desc} size={1} variant="transparent" />
                                                        </Grid>
                                                    )
                                                })}
                                            </Grid>
                                    }
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                }
            </Grid>
        </Grid >
    )
}