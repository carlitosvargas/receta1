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
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface OpenDataCategory
 */
export interface OpenDataCategory {
    /**
     * 
     * @type {number}
     * @memberof OpenDataCategory
     */
    readonly id: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof OpenDataCategory
     */
    version: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataCategory
     */
    readonly createdBy: string;
}

/**
 * Check if a given object implements the OpenDataCategory interface.
 */
export function instanceOfOpenDataCategory(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "createdBy" in value;

    return isInstance;
}

export function OpenDataCategoryFromJSON(json: any): OpenDataCategory {
    return OpenDataCategoryFromJSONTyped(json, false);
}

export function OpenDataCategoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataCategory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': json['created_by'],
    };
}

export function OpenDataCategoryToJSON(value?: OpenDataCategory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': OpenDataVersionToJSON(value.version),
        'slug': value.slug,
        'name': value.name,
        'description': value.description,
        'comment': value.comment,
    };
}
