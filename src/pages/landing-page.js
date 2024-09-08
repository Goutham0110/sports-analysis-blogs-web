import { Grid, Divider } from "@mui/material";
import Hero from "../components/hero";
import FeaturedBlogs from "../components/featured-blogs";
import ReachOut from "../components/reach-out";
import Subscribe from "../components/subscribe";


export default function Landing() {

    return (
        <>
            <Hero />
            <Grid container paddingX={10} spacing={2} rowSpacing={5} paddingBottom={5}>

                <Grid item xs={12}>
                    <Divider />
                </Grid>

                <Grid item xs={12}>
                    <FeaturedBlogs />
                </Grid>

                <Grid item xs={12}>
                    <Subscribe />
                </Grid>

                <Grid item xs={12}>
                    <ReachOut />
                </Grid>

            </Grid >
        </>
    )
}