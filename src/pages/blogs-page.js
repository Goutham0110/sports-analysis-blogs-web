import { useState, useEffect } from "react";
import { Grid, Pagination, Paper, Typography, Box, Fade, Breadcrumbs, Link } from "@mui/material";
import blogServices from "../services/blog-services";
import BlogPreview from "../components/blog-preview";
import Loader from "../components/loader";
import blogPageTop from "../assets/blog_page_top.jpg";
import blogPageBottom from "../assets/blog_page_bg_bottom.jpg";

export default function Blogs() {
    const [isLoading, setIsLoading] = useState(false);
    const [blogs, setBlogs] = useState([]);
    const [totalBlogs, setTotalBlogs] = useState(0);
    const [showPagination, setShowPagination] = useState(false);
    const [featuredBlogList, setFeaturedBlogList] = useState([]);
    const [latestBlogList, setLatestBlogList] = useState([]);
    const [page, setPage] = useState(1);

    const getBlogs = async (page = 1) => {
        try {
            const blogListData = await blogServices.getBlogsList({ page: page });
            setBlogs(blogListData?.blogs);
            setTotalBlogs(blogListData?.count);
            setShowPagination(() => blogListData?.count > 10);
        }
        catch (err) { }
        finally {
            setIsLoading(false);
        }
    }

    const getFeaturedAndLatest = async () => {
        setIsLoading(true);
        const featuredBlogListData = await blogServices.getFeaturedBlogs();
        setFeaturedBlogList(featuredBlogListData?.featured);
        setLatestBlogList(featuredBlogListData?.latest);
    }

    useEffect(() => {
        getFeaturedAndLatest();
    }, []);

    useEffect(() => {
        getBlogs(page);
    }, [page]);

    useEffect(() => {

    }, [totalBlogs])

    return (
        <>
            <Fade in={true} timeout={300}>
                <Grid container justifyContent={"space-between"} height={"100vh"} direction={"column"} m={-1} position={"fixed"} zIndex={-1}>
                    <Grid item>
                        <Box component={"img"} src={blogPageTop} width="100vw" />
                    </Grid>
                    <Grid item>
                        <Box component={"img"} src={blogPageBottom} width="100vw" />
                    </Grid>
                </Grid>
            </Fade>
            <Grid container justifyContent={"space-between"} width={"95vw"}>
                <Grid item xs={8}>
                    <Grid container rowSpacing={5} paddingX={25} paddingTop={10} paddingBottom={5}>
                        <Grid item xs={12}>
                            <Breadcrumbs aria-label="breadcrumb">
                                <Link underline="hover" color="inherit" href="/">
                                    Home
                                </Link>
                                <Link
                                    underline="hover"
                                    color="text.primary"
                                    aria-current="page"
                                >
                                    Blogs
                                </Link>
                            </Breadcrumbs>
                        </Grid>
                        <Grid item xs={12}>
                            {isLoading ? <Loader sx={{ height: "80vh" }} />
                                :
                                <Grid container spacing={2} rowSpacing={3} columnSpacing={6}>
                                    {
                                        blogs?.length ? blogs.map((blog, index) => {
                                            return (
                                                <Grid item xs={12} sm={12} md={12} lg={12} key={index}>
                                                    <BlogPreview id={blog.id} title={blog.title} description={blog.description} variant="transparent" />
                                                </Grid>
                                            )
                                        }) : <></>
                                    }
                                </Grid >
                            }
                        </Grid>
                        {
                            showPagination &&
                            <Grid item xs={12} minWidth={450}>
                                <Grid container justifyContent={"center"}>
                                    <Grid item>
                                        <Pagination count={Math.ceil(totalBlogs / 10)} color="primary" size="large"
                                            onChange={(e, page) => {
                                                setPage(page);
                                            }} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        }
                    </Grid>
                </Grid>
                <Grid item width={"400px"}>
                    <Grid container py={12}
                        sx={{
                            position: "fixed",
                            height: "150%",
                            width: "100%",
                        }}
                    >
                        <Grid item xs={12}>
                            <Grid container gap={10}>
                                <Grid item xs={12}>
                                    <Paper sx={{
                                        borderRadius: 3,
                                        background: "rgba(51, 204, 204, 0.25)",
                                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                        backdropFilter: "blur(10px)"
                                    }}>
                                        <Grid container height={350} p={3} gap={2}>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    Featured
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container gap={2}>
                                                    {
                                                        isLoading ? <Loader sx={{ width: "400px", height: "200px" }} />
                                                            :
                                                            featuredBlogList?.map((blog, index) => {
                                                                return (<Grid item xs={12} key={index}>
                                                                    <BlogPreview id={blog.id} title={blog.title} description={blog.description} size={1} variant={"transparent"} />
                                                                </Grid>)
                                                            })
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                                <Grid item xs={12}>
                                    <Paper sx={{
                                        borderRadius: 3,
                                        background: "rgba(51, 204, 204, 0.25)",
                                        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                                        backdropFilter: "blur(7.9px)"
                                    }}>
                                        <Grid container height={350} p={3} gap={2}>
                                            <Grid item>
                                                <Typography variant="h5">
                                                    Latest
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Grid container gap={2}>
                                                    {
                                                        isLoading ? <Loader sx={{ width: "400px", height: "200px" }} />
                                                            :
                                                            latestBlogList?.map((blog, index) => {
                                                                return (<Grid item xs={12} key={index}>
                                                                    <BlogPreview id={blog.id} title={blog.title} description={blog.description} size={1} variant={"transparent"} />
                                                                </Grid>)
                                                            })
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Paper>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Grid >
        </>
    )
}