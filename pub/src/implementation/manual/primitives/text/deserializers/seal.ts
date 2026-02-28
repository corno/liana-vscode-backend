import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'

type Signature = _pi.Refiner_With_Parameter<string, null, string, d_server.Convert_To_JSON_Parameters>

import * as d_server from "../../../../../interface/generated/liana/schemas/server/data"

//dependencies
import * as t_astn_parse_tree_2_sealed_ast from "astn/dist/implementation/manual/transformers/parse_tree/sealed_target"
import * as r_parse_tree_from_text from "astn-core/dist/implementation/manual/schemas/parse_tree/deserializers"

export const $$_temp: Signature = ($, abort, $p) => s_json.Document(
    t_astn_parse_tree_2_sealed_ast.Document(
        r_parse_tree_from_text.Document(
            $,
            ($) => abort(null),
            {
                'tab size': 1,
            },
        )
    ),
    {
        'indentation': "",
        'newline': "\n",
    }
)