/** -----------------------------------------------------------------------
 * @module [CII]
 * @author [APG] ANGELI Paolo Giusto
 * @version 0.9.4 [APG 2023/01/21] Deno Deploy Beta
 * @version 0.9.5 [APG 2023/01/28] Moved from CAD to CII
 * @version 0.9.6 [APG 2023/03/06] Updated to JSV 0.9.6
 * -----------------------------------------------------------------------
*/

import { eApgCiiInstructionTypes } from "../enums/eApgCiiInstructionTypes.ts";

import { eApgCii_TYPES_SCHEMA, eApgCii_TYPES_SCHEMA_ID } from "../schemas/eApgCii_TYPES_SCHEMA.ts";
import { IApgCii_INSTRUCTION_SCHEMA } from "../schemas/IApgCii_INSTRUCTION_SCHEMA.ts";

import { IApgCad_VIEWBOX_SCHEMA, IApgCad_VIEWBOX_SCHEMA_ID } from "../schemas/IApgCad_VIEWBOX_SCHEMA.ts";
import { IApgCad_BACKGROUND_SCHEMA, IApgCad_BACKGROUND_SCHEMA_ID } from "../schemas/IApgCad_BACKGROUND_SCHEMA.ts";
import { eApgCad_CARTESIAN_MODES_SCHEMA, eApgCad_CARTESIAN_MODES_SCHEMA_ID } from "../schemas/eApgCad_CARTESIAN_MODES_SCHEMA.ts";
import { IApgCad_CARTESIANS_SCHEMA, IApgCad_CARTESIANS_SCHEMA_ID } from "../schemas/IApgCad_CARTESIANS_SCHEMA.ts";
import { eApgCad_GRID_MODES_SCHEMA, eApgCad_GRID_MODES_SCHEMA_ID } from "../schemas/eApgCad_GRID_MODES_SCHEMA.ts";
import { IApgCad_GRID_SCHEMA, IApgCad_GRID_SCHEMA_ID } from "../schemas/IApgCad_GRID_SCHEMA.ts";

import { IApgCad_FILL_STYLE_SCHEMA, IApgCad_FILL_STYLE_SCHEMA_ID } from "../schemas/IApgCad_FILL_STYLE_SCHEMA.ts";
import { IApgCad_STROKE_STYLE_SCHEMA, IApgCad_STROKE_STYLE_SCHEMA_ID } from "../schemas/IApgCad_STROKE_STYLE_SCHEMA.ts";
import { IApgCad_TEXT_STYLE_SCHEMA, IApgCad_TEXT_STYLE_SCHEMA_ID } from "../schemas/IApgCad_TEXT_STYLE_SCHEMA.ts";
import { IApgCad_PATH_ARC_OPTIONS_SCHEMA, IApgCad_PATH_ARC_OPTIONS_SCHEMA_ID } from "../schemas/IApgCad_PATH_ARC_OPTIONS_SCHEMA.ts";

import { eApgCad_ARC_DIMENSION_TYPES_SCHEMA, eApgCad_ARC_DIMENSION_TYPES_SCHEMA_ID } from "../schemas/eApgCad_ARC_DIMENSION_TYPES_SCHEMA.ts";
import { eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA, eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA_ID } from "../schemas/eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA.ts";
import { IApgCad_ARC_DIM_OPTIONS_SCHEMA, IApgCad_ARC_DIM_OPTIONS_SCHEMA_ID } from "../schemas/IApgCad_ARC_DIM_OPTIONS_SCHEMA.ts";
import { IApgCad_LINEAR_DIM_OPTIONS_SCHEMA, IApgCad_LINEAR_DIM_OPTIONS_SCHEMA_ID } from "../schemas/IApgCad_LINEAR_DIM_OPTIONS_SCHEMA.ts";

import { IApgCii_NEW_FILL_STYLE_SCHEMA } from "../schemas/IApgCii_NEW_FILL_STYLE_SCHEMA.ts";
import { IApgCii_NEW_STROKE_STYLE_SCHEMA } from "../schemas/IApgCii_NEW_STROKE_STYLE_SCHEMA.ts";
import { IApgCii_NEW_TEXT_STYLE_SCHEMA } from "../schemas/IApgCii_NEW_TEXT_STYLE_SCHEMA.ts";

import { IApgCii_SETUP_BEGIN_SCHEMA } from "../schemas/IApgCii_SETUP_BEGIN_SCHEMA.ts";
import { IApgCii_SET_NAME_SCHEMA } from "../schemas/IApgCii_SET_NAME_SCHEMA.ts";
import { IApgCii_SET_VIEWBOX_SCHEMA } from "../schemas/IApgCii_SET_VIEWBOX_SCHEMA.ts";
import { IApgCii_SET_BACKGROUND_SCHEMA } from "../schemas/IApgCii_SET_BACKGROUND_SCHEMA.ts";
import { IApgCii_SET_CARTESIANS_SCHEMA } from "../schemas/IApgCii_SET_CARTESIANS_SCHEMA.ts";
import { IApgCii_SET_GRID_SCHEMA } from "../schemas/IApgCii_SET_GRID_SCHEMA.ts";
import { IApgCii_SETUP_END_SCHEMA } from "../schemas/IApgCii_SETUP_END_SCHEMA.ts";

import { IApgCii_POP_LAYER_SCHEMA } from "../schemas/IApgCii_POP_LAYER_SCHEMA.ts";
import { IApgCii_PUSH_LAYER_SCHEMA } from "../schemas/IApgCii_PUSH_LAYER_SCHEMA.ts";

import { IApgCii_NEW_POINT_SCHEMA } from "../schemas/IApgCii_NEW_POINT_SCHEMA.ts";
import { IApgCii_NEW_POINT_DELTA_SCHEMA } from "../schemas/IApgCii_NEW_POINT_DELTA_SCHEMA.ts";

import { IApgCii_GROUP_BEGIN_SCHEMA } from "../schemas/IApgCii_GROUP_BEGIN_SCHEMA.ts";
import { IApgCii_GROUP_END_SCHEMA } from "../schemas/IApgCii_GROUP_END_SCHEMA.ts";

import { IApgCii_DRAW_ALL_POINTS_SCHEMA } from "../schemas/IApgCii_DRAW_ALL_POINTS_SCHEMA.ts";

import { IApgCii_DRAW_POINTS_SCHEMA } from "../schemas/IApgCii_DRAW_POINTS_SCHEMA.ts";
import { IApgCii_DRAW_LINE_SCHEMA } from "../schemas/IApgCii_DRAW_LINE_SCHEMA.ts";
import { IApgCii_DRAW_POLYLINE_SCHEMA } from "../schemas/IApgCii_DRAW_POLYLINE_SCHEMA.ts";
import { IApgCii_DRAW_CIRCLE_SCHEMA } from "../schemas/IApgCii_DRAW_CIRCLE_SCHEMA.ts";
import { IApgCii_DRAW_GROUP_SCHEMA } from "../schemas/IApgCii_DRAW_GROUP_SCHEMA.ts";
import { IApgCii_DRAW_ARC_SCHEMA } from "../schemas/IApgCii_DRAW_ARC_SCHEMA.ts";
import { IApgCii_DRAW_RECTANGLE_POINTS_SCHEMA } from "../schemas/IApgCii_DRAW_RECTANGLE_POINTS_SCHEMA.ts";
import { IApgCii_DRAW_RECTANGLE_SIZES_SCHEMA } from "../schemas/IApgCii_DRAW_RECTANGLE_SIZES_SCHEMA.ts";
import { IApgCii_DRAW_REGULAR_POLIGON_SCHEMA } from "../schemas/IApgCii_DRAW_REGULAR_POLIGON_SCHEMA.ts";
import { IApgCii_DRAW_POLYGON_SCHEMA } from "../schemas/IApgCii_DRAW_POLYGON_SCHEMA.ts";
import { IApgCii_DRAW_TEXT_SCHEMA } from "../schemas/IApgCii_DRAW_TEXT_SCHEMA.ts";

import { IApgCii_PATH_BEGIN_SCHEMA } from "../schemas/IApgCii_PATH_BEGIN_SCHEMA.ts";
import { IApgCii_PATH_MOVE_SCHEMA } from "../schemas/IApgCii_PATH_MOVE_SCHEMA.ts";
import { IApgCii_PATH_LINE_SCHEMA } from "../schemas/IApgCii_PATH_LINE_SCHEMA.ts";
import { IApgCii_PATH_ARC_SCHEMA } from "../schemas/IApgCii_PATH_ARC_SCHEMA.ts";
import { IApgCii_PATH_CURSOR_SCHEMA } from "../schemas/IApgCii_PATH_CURSOR_SCHEMA.ts";
import { IApgCii_PATH_CLOSE_SCHEMA } from "../schemas/IApgCii_PATH_CLOSE_SCHEMA.ts";
import { IApgCii_PATH_END_SCHEMA } from "../schemas/IApgCii_PATH_END_SCHEMA.ts";

import { IApgCii_DRAW_LINEAR_DIM_SCHEMA } from "../schemas/IApgCii_DRAW_LINEAR_DIM_SCHEMA.ts";
import { IApgCii_DRAW_ARC_DIM_SCHEMA } from "../schemas/IApgCii_DRAW_ARC_DIM_SCHEMA.ts";
import { IApgCii_DRAW_ANNOTATION_SCHEMA } from "../schemas/IApgCii_DRAW_ANNOTATION_SCHEMA.ts";

import { IApgCiiValidator } from "../interfaces/IApgCiiValidator.ts";
import { eApgCad_DIMENSION_POSITIONS_SCHEMA, eApgCad_DIMENSION_POSITIONS_SCHEMA_ID } from "../schemas/eApgCad_DIMENSION_POSITIONS_SCHEMA.ts";


/** 
 * WARNING!! Order matters
 * When using dependencies those ones must be already defined in Ajv
 */
export const ApgCiiValidators: IApgCiiValidator[] = [
    {
        type: eApgCiiInstructionTypes.TYPES, // Ok 2023/01/04
        jsonSchema: eApgCii_TYPES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.INSTRUCTION, // Ok 2023/01/04
        jsonSchema: IApgCii_INSTRUCTION_SCHEMA,
        dependencies: [eApgCii_TYPES_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.CAD_FILL_STYLE, // Ok 2023/02/27
        jsonSchema: IApgCad_FILL_STYLE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_STROKE_STYLE, // Ok 2023/02/27
        jsonSchema: IApgCad_STROKE_STYLE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_TEXT_STYLE,
        jsonSchema: IApgCad_TEXT_STYLE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_VIEWBOX, // 
        jsonSchema: IApgCad_VIEWBOX_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_BACKGROUND, // 
        jsonSchema: IApgCad_BACKGROUND_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_CARTESIAN_MODES, //
        jsonSchema: eApgCad_CARTESIAN_MODES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_CARTESIANS, // 
        jsonSchema: IApgCad_CARTESIANS_SCHEMA,
        dependencies: [
            eApgCad_CARTESIAN_MODES_SCHEMA_ID,
            IApgCad_STROKE_STYLE_SCHEMA_ID,
            IApgCad_TEXT_STYLE_SCHEMA_ID
        ]
    },
    {
        type: eApgCiiInstructionTypes.CAD_GRID_MODES, //
        jsonSchema: eApgCad_GRID_MODES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_GRID, // 
        jsonSchema: IApgCad_GRID_SCHEMA,
        dependencies: [
            eApgCad_GRID_MODES_SCHEMA_ID,
            IApgCad_STROKE_STYLE_SCHEMA_ID,
        ]
    },
    {
        type: eApgCiiInstructionTypes.CAD_PATH_ARC_OPTIONS,
        jsonSchema: IApgCad_PATH_ARC_OPTIONS_SCHEMA
    },
    {
        type: eApgCiiInstructionTypes.CAD_LIN_DIM_TYPES, // Ok 2023/03/04
        jsonSchema: eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_DIM_POSITIONS, // Ok 2023/03/26
        jsonSchema: eApgCad_DIMENSION_POSITIONS_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_ARC_DIM_TYPES, // Ok 2023/03/04
        jsonSchema: eApgCad_ARC_DIMENSION_TYPES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.CAD_LIN_DIM_OPTIONS, // Ok 2023/03/04
        jsonSchema: IApgCad_LINEAR_DIM_OPTIONS_SCHEMA,
        dependencies: [
            eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA_ID,
            eApgCad_DIMENSION_POSITIONS_SCHEMA_ID
        ]
    },
    {
        type: eApgCiiInstructionTypes.CAD_ARC_DIM_OPTIONS, // Ok 2023/03/04
        jsonSchema: IApgCad_ARC_DIM_OPTIONS_SCHEMA,
        dependencies: [eApgCad_ARC_DIMENSION_TYPES_SCHEMA_ID]
    },

    {
        type: eApgCiiInstructionTypes.SETUP_BEGIN,
        jsonSchema: IApgCii_SETUP_BEGIN_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.SET_NAME,
        jsonSchema: IApgCii_SET_NAME_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.SET_VIEWBOX,
        jsonSchema: IApgCii_SET_VIEWBOX_SCHEMA,
        dependencies: [IApgCad_VIEWBOX_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.SET_CARTESIANS,
        jsonSchema: IApgCii_SET_CARTESIANS_SCHEMA,
        dependencies: [
            eApgCad_CARTESIAN_MODES_SCHEMA_ID,
            IApgCad_STROKE_STYLE_SCHEMA_ID,
            IApgCad_TEXT_STYLE_SCHEMA_ID,
            IApgCad_CARTESIANS_SCHEMA_ID
        ]
    },
    {
        type: eApgCiiInstructionTypes.SET_GRID,
        jsonSchema: IApgCii_SET_GRID_SCHEMA,
        dependencies: [
            eApgCad_GRID_MODES_SCHEMA_ID,
            IApgCad_STROKE_STYLE_SCHEMA_ID,
            IApgCad_GRID_SCHEMA_ID
        ]
    },
    {
        type: eApgCiiInstructionTypes.SET_BACKGROUND,
        jsonSchema: IApgCii_SET_BACKGROUND_SCHEMA,
        dependencies: [IApgCad_BACKGROUND_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.SETUP_END,
        jsonSchema: IApgCii_SETUP_END_SCHEMA,
    },

    {
        type: eApgCiiInstructionTypes.NEW_FILL_STYLE, // Ok 2023/01/21
        jsonSchema: IApgCii_NEW_FILL_STYLE_SCHEMA,
        dependencies: [IApgCad_FILL_STYLE_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.NEW_STROKE_STYLE, // Ok 2023/01/21
        jsonSchema: IApgCii_NEW_STROKE_STYLE_SCHEMA,
        dependencies: [IApgCad_STROKE_STYLE_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.NEW_TEXT_STYLE, // Ok 2023/01/21
        jsonSchema: IApgCii_NEW_TEXT_STYLE_SCHEMA,
        dependencies: [IApgCad_TEXT_STYLE_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.PUSH_LAYER, // Ok 2023/01/21
        jsonSchema: IApgCii_PUSH_LAYER_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.POP_LAYER, // Ok 2023/01/21
        jsonSchema: IApgCii_POP_LAYER_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.GROUP_BEGIN, // Ok 2023/01/21
        jsonSchema: IApgCii_GROUP_BEGIN_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.GROUP_END, // Ok 2023/01/21
        jsonSchema: IApgCii_GROUP_END_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.NEW_POINT, // Ok 2023/01/04
        jsonSchema: IApgCii_NEW_POINT_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.NEW_POINT_DELTA, // Ok 2023/01/04
        jsonSchema: IApgCii_NEW_POINT_DELTA_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_CURSOR, // Ok 2023/02/26
        jsonSchema: IApgCii_PATH_CURSOR_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_POINTS,  // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_POINTS_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_ALL_POINTS, // Ok 2023/01/04
        jsonSchema: IApgCii_DRAW_ALL_POINTS_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_ARC, // Ok 2023/01/15
        jsonSchema: IApgCii_DRAW_ARC_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_CIRCLE, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_CIRCLE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_LINE, // Ok 2023/01/04
        jsonSchema: IApgCii_DRAW_LINE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_POLYLINE, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_POLYLINE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_POLYGON, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_POLYGON_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_RECTANGLE_POINTS, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_RECTANGLE_POINTS_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_RECTANGLE_SIZES, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_RECTANGLE_SIZES_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_REGULAR_POLYGON, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_REGULAR_POLIGON_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_TEXT, // Ok 2023/01/06
        jsonSchema: IApgCii_DRAW_TEXT_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_BEGIN, // 
        jsonSchema: IApgCii_PATH_BEGIN_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_MOVE, // 
        jsonSchema: IApgCii_PATH_MOVE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_LINE, // 
        jsonSchema: IApgCii_PATH_LINE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_ARC, // 
        jsonSchema: IApgCii_PATH_ARC_SCHEMA,
        dependencies: [IApgCad_PATH_ARC_OPTIONS_SCHEMA_ID]
    },
    {
        type: eApgCiiInstructionTypes.PATH_CLOSE, // 
        jsonSchema: IApgCii_PATH_CLOSE_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.PATH_END, // 
        jsonSchema: IApgCii_PATH_END_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_GROUP,
        jsonSchema: IApgCii_DRAW_GROUP_SCHEMA,
    },
    {
        type: eApgCiiInstructionTypes.DRAW_LIN_DIM, // Ok 2023/01/15
        jsonSchema: IApgCii_DRAW_LINEAR_DIM_SCHEMA,
        dependencies: [
            eApgCad_LINEAR_DIMENSION_TYPES_SCHEMA_ID,
            eApgCad_DIMENSION_POSITIONS_SCHEMA_ID,
            IApgCad_LINEAR_DIM_OPTIONS_SCHEMA_ID,
        ]
    },
    {
        type: eApgCiiInstructionTypes.DRAW_ARC_DIM, // Ok 2023/01/15
        jsonSchema: IApgCii_DRAW_ARC_DIM_SCHEMA,
        dependencies: [
            eApgCad_ARC_DIMENSION_TYPES_SCHEMA_ID,
            IApgCad_ARC_DIM_OPTIONS_SCHEMA_ID,
        ]
    },
    {
        type: eApgCiiInstructionTypes.DRAW_ANNOTATION, // Ok 2023/01/15
        jsonSchema: IApgCii_DRAW_ANNOTATION_SCHEMA,
    },
    //{
    //   type: eApgCadInstructionTypes.DRAW_TEXT,
    //   schema: 'IApgCadSvgInsDrawText'
    // },
    //{
    //   type: eApgCadInstructionTypes.DRAW_NAME,
    //   schema: 'IApgCadSvgInsDrawName'
    //}
];
