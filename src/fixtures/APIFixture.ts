import {APIRequestContext, test as baseTest, request} from '@playwright/test';
import * as dotenv from 'dotenv';
dotenv.config();


const testAPI = baseTest.extend<{
apiContext: APIRequestContext
}>({
    apiContext: async ({}, use) => {
        const context = await request.newContext({
            baseURL: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview/',
            extraHTTPHeaders: {
                'Content-Type': 'application/json',
                'x-goog-api-key': String(process.env.api_key)
            }
        });

        await use(context);
        await context.dispose();
    }
});

export const test = testAPI;
export const expect = testAPI.expect;
