import { APIRequestContext, test as base, expect } from '@playwright/test';
import { authenticate, createApiClient } from '@utils/api-client';

// 1. Define fixture types
type MyFixtures = {
  apiClient: APIRequestContext;
  authToken: string;
};

// 2. Extend Playwright base test with typed fixtures
export const test = base.extend<MyFixtures>({
  apiClient: async ({}, use) => {
    const api = await createApiClient();
    await use(api);
  },

  authToken: async ({ apiClient }, use) => {
    const token = await authenticate(apiClient);
    await use(token);
  },
});

// 3. Export expect for convenience
export { expect };
