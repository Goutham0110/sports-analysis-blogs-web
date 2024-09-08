import { Grid, Paper, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import subscriberServices from "../services/subscriber-service";
import LoadingButton from "./loading-button";
import { useSnackbar } from "../hooks/useSnackbar";
import { useEffect, useState } from "react";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

export default function Subscribe() {
    const [isLoading, setIsLoading] = useState(false);
    const openSnackbar = useSnackbar();

    const validationSchema = yup.object({
        email: yup.string().email("Enter a valid email").required("Enter a valid email"),
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: { email: "" }
    });

    useEffect(() => {
        if (errors?.email) {
            openSnackbar({ content: "Enter a valid Email!", type: "error" });
        }
    }, [errors])

    const onSubmit = async (data) => {
        try {
            setIsLoading(true);
            const result = await subscriberServices.subscribe(data);
            openSnackbar({ content: result?.data?.message, type: result.status === 400 ? "error" : "success" });
        } catch (err) { }
        finally {
            setIsLoading(false);
        }
    }

    return (
        <Paper>
            <Grid container justifyContent={"center"} bgcolor={"ButtonFace"} p={5}>
                <Grid item>
                    <Grid container rowGap={2}>
                        <Grid item xs={12}>
                            <Typography variant={"h5"}>
                                Join our newsletter to get instant updates
                            </Typography>
                        </Grid>
                        <Grid item xs={9}>
                            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                                <Grid container alignItems={"center"} display={"flex"} columnSpacing={2}>
                                    <Grid item xs={9}>
                                        <TextField variant="outlined" label="E-Mail" fullWidth {...register("email")} />
                                    </Grid>
                                    <Grid item xs={3}>
                                        <LoadingButton type="submit" isLoading={isLoading} startIcon={<EmailOutlinedIcon />}>
                                            Subscribe
                                        </LoadingButton>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}