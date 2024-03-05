/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    AuthToken,
    AuthTokenFromJSON,
    AuthTokenToJSON,
} from '../models';

export interface ApiTokenAuthCreateRequest {
    username: string;
    password: string;
    token: string;
}

/**
 * 
 */
export class ApiTokenAuthApi extends runtime.BaseAPI {

    /**
     */
    async apiTokenAuthCreateRaw(requestParameters: ApiTokenAuthCreateRequest): Promise<runtime.ApiResponse<AuthToken>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling apiTokenAuthCreate.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling apiTokenAuthCreate.');
        }

        if (requestParameters.token === null || requestParameters.token === undefined) {
            throw new runtime.RequiredError('token','Required parameter requestParameters.token was null or undefined when calling apiTokenAuthCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'application/x-www-form-urlencoded' },
            { contentType: 'multipart/form-data' },
            { contentType: 'application/json' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.username !== undefined) {
            formParams.append('username', requestParameters.username as any);
        }

        if (requestParameters.password !== undefined) {
            formParams.append('password', requestParameters.password as any);
        }

        if (requestParameters.token !== undefined) {
            formParams.append('token', requestParameters.token as any);
        }

        const response = await this.request({
            path: `/api-token-auth/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthTokenFromJSON(jsonValue));
    }

    /**
     */
    async apiTokenAuthCreate(requestParameters: ApiTokenAuthCreateRequest): Promise<AuthToken> {
        const response = await this.apiTokenAuthCreateRaw(requestParameters);
        return await response.value();
    }

}
