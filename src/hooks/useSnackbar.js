import { useDispatch } from "react-redux";
import { showSnackbar } from "../store/snackbarSlice";

export const useSnackbar = () => {
    const dispatch = useDispatch();
    const openSnackbar = (params) => {
        dispatch(showSnackbar(params));
    };
    return openSnackbar;
};