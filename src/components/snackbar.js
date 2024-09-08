import {forwardRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { clearSnackbar, selectSnackbar } from "../store/snackbarSlice";

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomSnackbar() {
    const dispatch = useDispatch();
    const snackbarContent = useSelector(selectSnackbar);

    function handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(clearSnackbar());
    }

    return (
        <Snackbar
            open={snackbarContent.open}
            autoHideDuration={snackbarContent.duration ? snackbarContent.duration : 5000}
            onClose={handleClose}
            key="bottomcenter"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
            <Alert onClose={handleClose} severity={snackbarContent.type} sx={{ width: "100%" }}>
                {snackbarContent.content}
            </Alert>
        </Snackbar>
    );
}