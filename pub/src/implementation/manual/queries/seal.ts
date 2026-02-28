import * as _p from 'pareto-core/dist/query'
import * as _pi from 'pareto-core/dist/interface'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/liana/schemas/seal/data"

//dependencies
import { $$x as q_load_document } from "pareto-liana/dist/implementation/manual/queries/load_document"
import * as t_unmarshall_result_to_hover_info from "../transformers/unmarshall_result/hover_info"
import * as t_astn_location_to_location from "../transformers/astn_core_location/location"
import * as r_node_path_from_text from "pareto-resources/dist/implementation/manual/refiners/node_path/text"

export const $$: signatures.queries.get_on_hover_info = _p.query_function(
	($p, $qr) => q_load_document($qr)(
		{
			'content': $p.content,
			'file path': $p['file path']
		},
		($) => $,
	).transform_result(($): d.Result => ({
		'contents': {
			'hover texts': t_unmarshall_result_to_hover_info.Node($, {
				'position': $p.position,
				'full path': "",
				'id path': "",
			})
		}
	}))
)


// export const $$_temp: Signature = ($, abort, $p) => t_sealed_target_to_text.Document(
//     r_astn_parse_tree_2_sealed_ast.Document(
//         r_parse_tree_from_text.Document(
//             $,
//             ($) => abort(['deserialize', $]),
//             {
//                 'tab size': 1,
//                 'document resource identifier': xxx
//             },
//         ),
//         ($) => abort(['seal', $]),
//         {
//             'definition': $p['definition'],
//             'definition path': $p['definition path'],
//         }
//     ),
//     {
//         'indentation': "",
//         'newline': "\n",
//     }
// )

// export const $$x: signatures.queries.load_document = _p.query_function(
