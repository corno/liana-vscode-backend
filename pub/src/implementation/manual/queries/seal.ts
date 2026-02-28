import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

import * as d_text from "pareto-fountain-pen/dist/interface/generated/liana/schemas/text/data"
import * as d_function from "../../../interface/generated/liana/schemas/seal/data"
import * as d_function_tbg from "../../../interface/to_be_generated/seal"

type Signature = _pi.Refiner_With_Parameter<d_function.Result, d_function_tbg.Error, d_text.Text, d_function.Parameters>

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
                'document resource identifier': xxx
            },
        ),
        ($) => abort(['seal', $]),
        {
            'definition': $p['definition'],
            'definition path': $p['definition path'],
        }
    ),
    {
        'indentation': "",
        'newline': "\n",
    }
)

// export const $$x: signatures.queries.load_document = _p.query_function(
