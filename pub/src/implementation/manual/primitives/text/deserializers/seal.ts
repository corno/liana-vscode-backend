import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import * as d_function_seal from "pareto-liana/dist/interface/to_be_generated/sealed_target_from_parse_tree"
import * as d_function_deserialize from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"


export type Error =
    | ['seal', d_function_seal.Error]
    | ['deserialize', d_function_deserialize.Error]

type Signature = _pi.Refiner_With_Parameter<d_text.Text, Error, d_text.Text, d_server.Seal_Parameters>

import * as d_server from "../../../../../interface/generated/liana/schemas/server/data"

//dependencies
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/refiners/parse_tree/text"
import * as r_astn_parse_tree_2_sealed_ast from "pareto-liana/dist/implementation/manual/refiners/astn_sealed_target/astn_parse_tree"
import * as t_sealed_target_to_text from "astn-core/dist/implementation/manual/transformers/sealed_target/text"



export const $$_temp: Signature = ($, abort, $p) => t_sealed_target_to_text.Document(
    r_astn_parse_tree_2_sealed_ast.Document(
        r_parse_tree_from_text.Document(
            $,
            ($) => abort(['deserialize', $]),
            {
                'tab size': 1,
            },
        ),
        ($) => abort(['seal', $]),
        {
            'definition': 
        }
    ),
    {
        'indentation': "",
        'newline': "\n",
    }
)