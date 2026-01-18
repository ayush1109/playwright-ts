import { test, expect } from '../../src/fixtures/APIFixture';
import { LLMCallService } from '../../src/api/services/LLMCallService';

test.describe('Functional test cases', async () => {

    test('Factual Test', async ({ apiContext }) => {

        const service = new LLMCallService(apiContext);

        const response = await service.callAPI({
            contents: [{
                parts: [{ text: "Capital of India" }]
            }]
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();
        const answer = body.candidates?.[0].content?.parts?.[0]?.text;

        expect(answer).toBeTruthy();
        expect(answer).toContain('New Delhi');
    })

    test('Math Test', async ({ apiContext }) => {

        const service = new LLMCallService(apiContext);

        const response = await service.callAPI({
            contents: [{
                parts: [{ text: "15*12" }]
            }]
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const body = await response.json();
        const answer = body.candidates?.[0].content?.parts?.[0]?.text;

        expect(answer).toBeTruthy();
        expect(answer).toContain('180');
    })
})