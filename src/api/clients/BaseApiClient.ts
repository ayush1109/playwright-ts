import { APIRequestContext } from "@playwright/test";

export class BaseApiClient {
    constructor(protected request: APIRequestContext) { }

    async get(url: string, options = {}) {
        return await this.request.get(url, options);
    }

    async post(url: string, options = {}) {
        return await this.request.post(url, options);
    }

    async delete(url: string, options = {}) {
        return await this.request.delete(url, options);
    }
}