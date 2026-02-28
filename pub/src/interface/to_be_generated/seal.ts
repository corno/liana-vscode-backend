

import * as d_function_seal from "pareto-liana/dist/interface/to_be_generated/sealed_target_from_parse_tree"
import * as d_function_deserialize from "astn-core/dist/interface/generated/liana/schemas/deserialize_parse_tree/data"

export type Error =
    | ['seal', d_function_seal.Error]
    | ['deserialize', d_function_deserialize.Error]



