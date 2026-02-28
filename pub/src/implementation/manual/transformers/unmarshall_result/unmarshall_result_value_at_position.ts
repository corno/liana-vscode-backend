import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/assign'
import * as _pdev from 'pareto-core-dev'

//data types
import * as d_in from "pareto-liana/dist/interface/to_be_generated/unmashall_result"
import * as d_out from "pareto-liana/dist/interface/to_be_generated/unmashall_result"
import * as d_astn_location from "astn-core/dist/interface/generated/liana/schemas/location/data"
import * as d_location from "../../../../interface/generated/liana/schemas/location/data"

// import { $$ as op_expect_1_element } from "pareto-standard-operations/dist/implementation/operations/impure/list/expect_exactly_one_element"

//dependencies
import * as t_parse_tree_to_start_token_range from "astn-core/dist/implementation/manual/transformers/parse_tree/start_token_range"
import * as t_parse_tree_to_full_value_range from "astn-core/dist/implementation/manual/transformers/parse_tree/full_range"
import * as t_astn_location_to_location from "../astn_core_location/location"


export type Found = 
| ['value', d_out.Value]

export type Document = _pi.Transformer_With_Parameter<
    d_in.Document,
    Found,
    {
        'position': d_location.Position
    }
>

// export type Items = _pi.Transformer_With_Parameter<
//     d_in.Items,
//     Found,
//     {
//         'position': d_location.Position
//     }
// >

export type Value = _pi.Transformer_With_Parameter<
    d_in.Value,
    Found,
    {
        'position': d_location.Position
    }
>

export const Document: Document = ($, $p) => Value($.content, $p)

export const Value: Value = ($, $p) => {

    const value = $

    const value_range = t_parse_tree_to_start_token_range.Value($.instance)

    const is_in_range = (
        $: d_location.Position,
        $p: {
            'range': d_location.Range

        }
    ): boolean => (
        $p.range.start.line < $.line
        ||
        ($p.range.start.line === $.line && $p.range.start.character <= $.character)
    ) && (
            $p.range.end.line > $.line
            ||
            ($p.range.end.line === $.line && $p.range.end.character >= $.character)
        )

    const this_value = (
    ): Found => ['value', $]


    return _p.decide.state($.unmarshalled, ($) => {
        switch ($[0]) {
            case 'number': return _p.ss($, ($) => this_value())
            case 'boolean': return _p.ss($, ($) => this_value())
            case 'component': return _p.ss($, ($) => Value($.value, $p))
            case 'dictionary': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => _p.decide.list.has_match)
                    case 'invalid': return _p.ss($, ($) => this_value())
                    default: return _p.au($[0])
                }
            }))
            case 'group': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => )
                    case 'invalid': return _p.ss($, ($) => this_value())
                    default: return _p.au($[0])
                }
            }))
            case 'list': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => )
                    case 'invalid': return _p.ss($, ($) => this_value())
                    default: return _p.au($[0])
                }
            }))
            case 'nothing': return _p.ss($, ($) => this_value())
            case 'optional': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => )
                    case 'invalid': return _p.ss($, ($) => this_value())
                    default: return _p.au($[0])
                }
            }))
            case 'reference': return _p.ss($, ($) => this_value())
            case 'state': return _p.ss($, ($) => _p.decide.state($['found value type'], ($) => {
                switch ($[0]) {
                    case 'valid': return _p.ss($, ($) => )
                    case 'invalid': return _p.ss($, ($) => this_value())
                    default: return _p.au($[0])
                }
            }))
            case 'text': return _p.ss($, ($) => this_value())
            default: return _p.au($[0])
        }
    })
}