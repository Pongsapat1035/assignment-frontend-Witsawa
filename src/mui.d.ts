import '@mui/material/Button';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dropdownMenu: true;
    containedGradient: true;
  }
}