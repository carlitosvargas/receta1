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

import { mapValues } from '../runtime';
import type { Group } from './Group';
import {
    GroupFromJSON,
    GroupFromJSONTyped,
    GroupToJSON,
} from './Group';

/**
 * Adds nested create feature
 * @export
 * @interface InviteLink
 */
export interface InviteLink {
    /**
     * 
     * @type {number}
     * @memberof InviteLink
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof InviteLink
     */
    readonly uuid: string;
    /**
     * 
     * @type {string}
     * @memberof InviteLink
     */
    email?: string;
    /**
     * 
     * @type {Group}
     * @memberof InviteLink
     */
    group: Group;
    /**
     * 
     * @type {Date}
     * @memberof InviteLink
     */
    validUntil?: Date;
    /**
     * 
     * @type {number}
     * @memberof InviteLink
     */
    usedBy?: number;
    /**
     * 
     * @type {boolean}
     * @memberof InviteLink
     */
    reusable?: boolean;
    /**
     * 
     * @type {string}
     * @memberof InviteLink
     */
    internalNote?: string;
    /**
     * 
     * @type {number}
     * @memberof InviteLink
     */
    readonly createdBy: number;
    /**
     * 
     * @type {Date}
     * @memberof InviteLink
     */
    readonly createdAt: Date;
}

/**
 * Check if a given object implements the InviteLink interface.
 */
export function instanceOfInviteLink(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('uuid' in value)) return false;
    if (!('group' in value)) return false;
    if (!('createdBy' in value)) return false;
    if (!('createdAt' in value)) return false;
    return true;
}

export function InviteLinkFromJSON(json: any): InviteLink {
    return InviteLinkFromJSONTyped(json, false);
}

export function InviteLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): InviteLink {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'uuid': json['uuid'],
        'email': json['email'] == null ? undefined : json['email'],
        'group': GroupFromJSON(json['group']),
        'validUntil': json['valid_until'] == null ? undefined : (new Date(json['valid_until'])),
        'usedBy': json['used_by'] == null ? undefined : json['used_by'],
        'reusable': json['reusable'] == null ? undefined : json['reusable'],
        'internalNote': json['internal_note'] == null ? undefined : json['internal_note'],
        'createdBy': json['created_by'],
        'createdAt': (new Date(json['created_at'])),
    };
}

export function InviteLinkToJSON(value?: InviteLink | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'group': GroupToJSON(value['group']),
        'valid_until': value['validUntil'] == null ? undefined : ((value['validUntil']).toISOString().substring(0,10)),
        'used_by': value['usedBy'],
        'reusable': value['reusable'],
        'internal_note': value['internalNote'],
    };
}
