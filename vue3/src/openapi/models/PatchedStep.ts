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

import { exists, mapValues } from '../runtime';
import {
    Ingredient,
    IngredientFromJSON,
    IngredientFromJSONTyped,
    IngredientToJSON,
    UserFileView,
    UserFileViewFromJSON,
    UserFileViewFromJSONTyped,
    UserFileViewToJSON,
} from './';

/**
 * Adds nested create feature
 * @export
 * @interface PatchedStep
 */
export interface PatchedStep {
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    instruction?: string;
    /**
     * 
     * @type {Array<Ingredient>}
     * @memberof PatchedStep
     */
    ingredients?: Array<Ingredient>;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    readonly instructionsMarkdown?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    time?: number;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    order?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedStep
     */
    showAsHeader?: boolean;
    /**
     * 
     * @type {UserFileView}
     * @memberof PatchedStep
     */
    file?: UserFileView | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedStep
     */
    stepRecipe?: number | null;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    readonly stepRecipeData?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedStep
     */
    readonly numrecipe?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedStep
     */
    showIngredientsTable?: boolean;
}

export function PatchedStepFromJSON(json: any): PatchedStep {
    return PatchedStepFromJSONTyped(json, false);
}

export function PatchedStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'instruction': !exists(json, 'instruction') ? undefined : json['instruction'],
        'ingredients': !exists(json, 'ingredients') ? undefined : ((json['ingredients'] as Array<any>).map(IngredientFromJSON)),
        'instructionsMarkdown': !exists(json, 'instructions_markdown') ? undefined : json['instructions_markdown'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'order': !exists(json, 'order') ? undefined : json['order'],
        'showAsHeader': !exists(json, 'show_as_header') ? undefined : json['show_as_header'],
        'file': !exists(json, 'file') ? undefined : UserFileViewFromJSON(json['file']),
        'stepRecipe': !exists(json, 'step_recipe') ? undefined : json['step_recipe'],
        'stepRecipeData': !exists(json, 'step_recipe_data') ? undefined : json['step_recipe_data'],
        'numrecipe': !exists(json, 'numrecipe') ? undefined : json['numrecipe'],
        'showIngredientsTable': !exists(json, 'show_ingredients_table') ? undefined : json['show_ingredients_table'],
    };
}

export function PatchedStepToJSON(value?: PatchedStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'instruction': value.instruction,
        'ingredients': value.ingredients === undefined ? undefined : ((value.ingredients as Array<any>).map(IngredientToJSON)),
        'time': value.time,
        'order': value.order,
        'show_as_header': value.showAsHeader,
        'file': UserFileViewToJSON(value.file),
        'step_recipe': value.stepRecipe,
        'show_ingredients_table': value.showIngredientsTable,
    };
}


