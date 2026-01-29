import { APIRequestContext, request } from '@playwright/test';

export async function createApiClient(): Promise<APIRequestContext> {
  return await request.newContext({
    baseURL: process.env.DEV_API_BASE_URL!,
    extraHTTPHeaders: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
}

export async function authenticate(api: APIRequestContext) {
  const response = await api.post(process.env.DEV_API_AUTH_URL!, {
    params: {
      grant_type: 'client_credentials',
    },
    headers: {
      Accept: 'application/json',
      Authorization:
        'Basic ' +
        Buffer.from(`${process.env.DEV_API_USERNAME}:${process.env.DEV_API_PASSWORD}`).toString(
          'base64',
        ),
    },
  });
  if (!response.ok()) {
    throw new Error(`Auth failed: ${response.status()} ${response.statusText()}`);
  }
  const body = await response.json();
  return body.access_token;
}
