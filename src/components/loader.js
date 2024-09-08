import { Box, CircularProgress } from "@mui/material"
export default function Loader({ size = 25, sx = {} }) {
    return (
        <Box display="flex" alignItems={"center"} justifyContent={"center"} sx={{ ...sx }}>
            <CircularProgress size={size}>
            </CircularProgress>
        </Box >
    )
}