import { expect, test } from '../fixtures/auth-fixture';

test('basic authenticated API call @smoke @api @regression', async ({ apiClient, authToken }) => {
  const response = await apiClient.get('/hearing/59cb14a6-e8de-4615-9c9d-260121155732', {
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  });
  expect(response.status(), 'status should be 200').toBe(200);
  expect(response.ok(), 'response should be ok').toBeTruthy();
});