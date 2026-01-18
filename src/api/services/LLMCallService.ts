import { BaseApiClient } from "../clients/BaseApiClient";

export class LLMCallService extends BaseApiClient {
    async callAPI(data: object) {
        return await this.post(':generateContent', {
            data: data
        });
    }
}