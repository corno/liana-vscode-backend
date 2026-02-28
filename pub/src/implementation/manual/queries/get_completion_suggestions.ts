import * as _p from 'pareto-core/dist/query'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/liana/schemas/get_completion_suggestions/data"

//dependencies
import { $$x as q_load_pareto_document } from "pareto-liana/dist/implementation/manual/queries/load_document"
import * as t_unmarshall_result_to_completion_suggestions from "../transformers/unmarshall_result/completion_suggestions"
import * as t_astn_location_to_location from "../transformers/astn_core_location/location"
import * as r_path_from_text from "pareto-resources/dist/implementation/manual/refiners/node_path/text"


export const $$: signatures.queries.get_completion_suggestions = _p.query_function(
    ($p, $qr) => q_load_pareto_document($qr)(
        {
            'content': $p.content,
            'file path': r_path_from_text.Node_Path(
                $p['file path'],
                () => _pdev.implement_me("Invalid file path"),
                {
                    'pedantic': true,
                },
            ),
        },
        ($) => $,
    ).transform_result(($): d.Result => ({
        'completion suggestions': t_unmarshall_result_to_completion_suggestions.Value(
            $.content,
            {
                'position': $p.position,
                'indent': $p.indent,
            }
        ).__decide(
            ($) => $,
            () => _p.list.literal([]),
        )
    }))
)