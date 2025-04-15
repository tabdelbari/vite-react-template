import { Box, CircularProgress, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LoadingSpinnerProps {
  minHeight?: string;
}

export const LoadingSpinner = ({ minHeight = '60vh' }: LoadingSpinnerProps) => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight,
        gap: 2,
      }}
    >
      <CircularProgress />
      <Typography>{t('common.loading')}</Typography>
    </Box>
  );
}; 