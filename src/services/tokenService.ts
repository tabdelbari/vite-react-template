import { useApi } from '../hooks/useApi';
import { API_BASE_URL } from '../constants/api';

interface TokenValidationResponse {
  isValid: boolean;
}

export const useTokenValidation = (token: string) => {
  return useApi.get<TokenValidationResponse>(`${API_BASE_URL}/validate?token=${token}`);
}; 