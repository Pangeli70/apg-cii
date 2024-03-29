/** -----------------------------------------------------------------------
 * @module [CII+JSV]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.5 [APG 2023/02/26]
 * @version 0.9.6 [APG 2023/03/06] Updated to JSV 0.9.6
 * -----------------------------------------------------------------------
 */
import { Uts, Jsv } from '../../deps.ts'
import { eApgCiiInstructionTypes } from "../enums/eApgCiiInstructionTypes.ts";


export const IApgCii_PATH_CURSOR_SCHEMA_ID =
    Jsv.ApgJsv_DOMAIN + 'IApgCii_PathCursor'

const rawSchema: Jsv.IApgJsvInterface = {
    $schema: Jsv.ApgJsv_DIALECT,
    $id: IApgCii_PATH_CURSOR_SCHEMA_ID,
    type: 'object',
    properties: {

        type: {
            const: eApgCiiInstructionTypes.PATH_CURSOR as string
        },
        origin: {
            description: 'Name of the point used as Path cursor',
            type: 'string',
        },
        pivot: {
            description: 'Name of the point used to reset the Path cursor',
            type: 'string',
        },
        w: {
            description: 'Horizontal delta from pivot.x',
            type: 'number'
        },
        h: {
            description: 'Vertical delta from pivot.y',
            type: 'number'
        }
    },
    additionalProperties: false,
    allErrors: true,
    required: [
        'type', 'origin', 'pivot', 'w', 'h'
    ]

};

export const IApgCii_PATH_CURSOR_SCHEMA = Uts.ApgUtsObj.DeepFreeze(rawSchema) as Jsv.IApgJsvInterface;