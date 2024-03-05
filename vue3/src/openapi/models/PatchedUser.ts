/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Adds nested create feature
 * @export
 * @interface PatchedUser
 */
export interface PatchedUser {
    /**
     * 
     * @type {number}
     * @memberof PatchedUser
     */
    readonly id?: number;
    /**
     * Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.
     * @type {string}
     * @memberof PatchedUser
     */
    readonly username?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedUser
     */
    readonly displayName?: string;
}

/**
 * Check if a given object implements the PatchedUser interface.
 */
export function instanceOfPatchedUser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedUserFromJSON(json: any): PatchedUser {
    return PatchedUserFromJSONTyped(json, false);
}

export function PatchedUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
    };
}

export function PatchedUserToJSON(value?: PatchedUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
    };
}
