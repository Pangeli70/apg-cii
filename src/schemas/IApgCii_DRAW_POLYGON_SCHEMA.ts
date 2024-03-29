/** -----------------------------------------------------------------------
 * @module [CII+JSV]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.3 [APG 2022/12/26] Github Beta
 * @version 0.9.4 [APG 2023/01/07] Deno Deploy Beta
 * @version 0.9.5 [APG 2023/01/28] Moved from CAD to CII
 * @version 0.9.6 [APG 2023/03/06] Updated to JSV 0.9.6
 * -----------------------------------------------------------------------
 */
import { Uts, Jsv } from '../../deps.ts'
import { eApgCiiInstructionTypes } from "../enums/eApgCiiInstructionTypes.ts";
import { eApgCiiInstructionFieldsNames } from "./IApgCii_INSTRUCTION_SCHEMA.ts";

export const IApgCii_DRAW_POLYGON_SCHEMA_ID =
    Jsv.ApgJsv_DOMAIN + 'IApgCii_DrawPolygon';

const rawSchema: Jsv.IApgJsvInterface = {
    $schema: Jsv.ApgJsv_DIALECT,
    $id: IApgCii_DRAW_POLYGON_SCHEMA_ID,
    type: 'object',
    properties: {
        [eApgCiiInstructionFieldsNames.type]: {
            const: eApgCiiInstructionTypes.DRAW_POLYGON as string
        },
        [eApgCiiInstructionFieldsNames.name]: {
            type: 'string'
        },
        [eApgCiiInstructionFieldsNames.points]: {
            type: 'array',
            items: {
                type: 'string'
            }
        },
        [eApgCiiInstructionFieldsNames.angle]: {
            type: 'number'
        },
        [eApgCiiInstructionFieldsNames.strokeStyle]: {
            type: 'string'
        },
        [eApgCiiInstructionFieldsNames.fillStyle]: {
            type: 'string'
        },
    },
    additionalProperties: false,
    allErrors: true,
    required: [
        eApgCiiInstructionFieldsNames.type,
        eApgCiiInstructionFieldsNames.points
    ]

};

export const IApgCii_DRAW_POLYGON_SCHEMA = Uts.ApgUtsObj.DeepFreeze(rawSchema) as Jsv.IApgJsvInterface;