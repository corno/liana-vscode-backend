import * as _pi from 'pareto-core/dist/interface'

import * as d_on_completion from "./generated/liana/schemas/get_completion_suggestions/data"
import * as d_on_hover from "./generated/liana/schemas/get_on_hover_info/data"
import * as d_validate_document from "./generated/liana/schemas/validate_document/data"

import * as d_load_document from "pareto-liana/dist/interface/to_be_generated/load_document"

export namespace queries {

    export type on_completion = _pi.Query<d_on_completion.Result, d_load_document.Error, d_on_completion.Parameters>
    export type on_hover = _pi.Query<d_on_hover.Result, d_load_document.Error, d_on_hover.Parameters>
    export type seal = _pi.Query<d_on_hover.Result, d_load_document.Error, d_on_hover.Parameters>
    export type validate_document = _pi.Query<d_validate_document.Result, d_load_document.Error, d_validate_document.Parameters>

}