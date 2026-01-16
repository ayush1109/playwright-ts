import { test, expect, request } from "@playwright/test";
import * as dotenv from 'dotenv';
dotenv.config();
test.describe('Functional test cases', async () => {

    test('Factual Test', async ({ request }) => {

        try {
            const response = await request.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent', {
                data: {
                    contents: [{
                        parts: [{ text: "Capital of India" }]
                    }]
                },
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': String(process.env.api_key)
                }
            });

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            const answer = body.candidates?.[0].content?.parts?.[0]?.text;

            expect(answer).toBeTruthy();
            expect(answer).toContain('New Delhi');
        } finally {
            await request.dispose();
        }
    })

    test('Math Test', async ({ request }) => {

        try {
            const response = await request.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent', {
                data: {
                    contents: [{
                        parts: [{ text: "15*12" }]
                    }]
                },
                headers: {
                    'Content-Type': 'application/json',
                    'x-goog-api-key': String(process.env.api_key)
                }
            });

            expect(response.ok()).toBeTruthy();
            expect(response.status()).toBe(200);

            const body = await response.json();
            const answer = body.candidates?.[0].content?.parts?.[0]?.text;

            expect(answer).toBeTruthy();
            expect(answer).toContain('180');
        } finally {
            await request.dispose();
        }
    })
})