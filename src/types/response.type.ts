export interface ResponseType {
  message: string;
  success: boolean;
  token?: string;
  data?: unknown;
}

export const isResponseType = (
  responseType: unknown,
): responseType is ResponseType => {
  return (
    typeof responseType === 'object' &&
    Object.keys(responseType ?? {}).includes('message') &&
    Object.keys(responseType ?? {}).includes('message')
  );
};
