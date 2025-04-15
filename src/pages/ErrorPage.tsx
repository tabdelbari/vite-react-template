import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface ErrorPageProps {
  statusCode: number;
  message?: string;
}

export const ErrorPage = ({ statusCode, message }: ErrorPageProps) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const getErrorMessage = () => {
    switch (statusCode) {
      case 401:
        return t('errors.unauthorized');
      case 404:
        return t('errors.notFound');
      case 500:
        return t('errors.serverError');
      default:
        return message || t('errors.unknownError');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        textAlign: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h1" component="h1" color="primary">
        {statusCode}
      </Typography>
      <Typography variant="h5" component="h2">
        {getErrorMessage()}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/')}
        sx={{ mt: 2 }}
      >
        {t('common.backToHome')}
      </Button>
    </Box>
  );
}; 