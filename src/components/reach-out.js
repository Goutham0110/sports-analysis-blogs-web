import { Grid, Paper, TextField, Typography, Fade } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Contact from "./contact";
import LoadingButton from "./loading-button";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { useSnackbar } from "../hooks/useSnackbar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import subscriberServices from "../services/subscriber-service";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';


export default function ReachOut() {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });

    const [isLoading, setIsLoading] = useState(false);
    const openSnackbar = useSnackbar();

    const validationSchema = yup.object({
        email: yup.string().email("Enter a valid email").required("Enter a valid email"),
        message: yup.string()
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { email: "", message: "" }
    });

    useEffect(() => {
        if (errors?.email) {
            openSnackbar({ content: "Enter a valid Email!", type: "error" });
        }
    }, [errors])

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const result = await subscriberServices.mail(data);
            openSnackbar({ content: result?.data?.message, type: result.status === 400 ? "error" : "success" });
        } catch (err) { }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <Grid container gap={5} ref={ref}>
            <Grid item xs={12}>
                <Typography variant="h3">
                    Reach Out
                </Typography>
            </Grid>
            <Fade in={inView} timeout={800}>
                <Grid item xs={3}>
                    <Contact />
                </Grid>
            </Fade>
            <Grid item xs={8}>
                <Paper variant="outlined" >
                    <form onSubmit={handleSubmit(onSubmit)} noValidate>
                        <Grid container gap={2} p={5} justifyContent={"end"}>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="E-Mail" fullWidth {...register("email")} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField variant="outlined" label="Message" multiline rows={9} fullWidth {...register("message")} />
                            </Grid>
                            <Grid item>
                                <LoadingButton isLoading={isLoading} startIcon={<SendOutlinedIcon />}>
                                    Send Message
                                </LoadingButton>
                            </Grid>
                        </Grid>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    )
}