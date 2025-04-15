import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTokenValidation } from '../services/tokenService';
import { LoadingSpinner } from '../components/LoadingSpinner';

export const ValidateTokenPage = () => {
  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { data, error, isLoading } = useTokenValidation(token || '');

  useEffect(() => {
    if (data?.isValid) {
      navigate('/');
    }
  }, [data, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    const statusCode = error.response?.status || 500;
    navigate(`/${statusCode}`);
  }

  return null;
}; 