import * as _pdev from "pareto-core-dev"

import * as d_in from "../../../../interface/generated/liana/schemas/server/data"
import * as d_out from "astn-core/dist/interface/generated/liana/schemas/location/data"

export const Relative_Location = ($: d_in.Position): d_out.Relative_Location => ({
    'document resource identifier': _pdev.implement_me("document resource identifier"),
    'line': $.line,
    'column': $.character,
    
})
