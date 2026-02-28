import * as _pdev from "pareto-core-dev"

import * as d_out from "../../../../interface/generated/liana/schemas/location/data"
import * as d_in from "astn-core/dist/interface/generated/liana/schemas/location/data"

export const Relative_Location = ($: d_in.Relative_Location): d_out.Position => ({
    'line': $.line,
    'character': $.column,
    
})
