import Button from '@mui/material/Button';
import Loader from './loader';

export default function LoadingButton(
    {
        startIcon,
        isLoading = false,
        isDisabled = false,
        children = "Save",
        type = 'submit',
        variant = 'contained',
        color = 'primary',
        fullwidth = false,
        size = '',
        onClick = () => { },
        id = "save-btn"
    }
) {
    return (
        <Button
            id={id}
            type={type}
            disabled={isLoading || isDisabled}
            variant={variant}
            color={color}
            fullWidth={fullwidth}
            size={size}
            onClick={onClick}
            startIcon={isLoading ? <Loader size={25} /> : startIcon}
        >
            {children}
        </Button>
    )
}