import { FlowType, RequestedParameters } from '../types';
import { FrontendApi } from '@ory/client';
import { AxiosRequestConfig } from 'axios';

/**
 * Selects the correct flow based on the flow type.
 * @param flowType - The flow type.
 * @param requestedParameters - The requested parameters.
 * @param options - The Axios request options.
 */
export const selectFlow = async (
  oryClient: FrontendApi,
  flowType: FlowType,
  {
    requestedParameters,
    options,
  }: {
    requestedParameters: RequestedParameters;
    options?: AxiosRequestConfig;
  }
) => {
  switch (flowType) {
    case 'login':
      console.log('login flow');
      return oryClient.getLoginFlow(requestedParameters, options);
    case 'registration':
      console.log('registration flow');
      return oryClient.getRegistrationFlow(requestedParameters, options);
    case 'verification':
      console.log('verification flow');
      return oryClient.getVerificationFlow(requestedParameters, options);
    case 'recovery':
      console.log('recovery flow');
      return oryClient.getRecoveryFlow(requestedParameters, options);
    default:
      console.log('default flow');
      throw new Error('Invalid flow type');
  }
};
