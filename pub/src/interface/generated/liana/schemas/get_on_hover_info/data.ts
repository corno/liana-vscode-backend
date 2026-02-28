
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_location from "../location/data"

export namespace Result_ {
    
    export namespace contents {
        
        export namespace hover_texts {
            
            export namespace O {
                
                export type L = string
                
            }
            
            export type O = _pi.List<O.L>
            
        }
        
        export type hover_texts = _pi.Optional_Value<hover_texts.O>
        
    }
    
    export type contents = {
        readonly 'hover texts': contents.hover_texts
    }
    
}

export type Result_ = {
    readonly 'contents': Result_.contents
}

export namespace Parameters_ {
    
    export type content = string
    
    export type file_path = string
    
    export type position = i__imports_location.Position
    
}

export type Parameters_ = {
    readonly 'content': Parameters_.content
    readonly 'file path': Parameters_.file_path
    readonly 'position': Parameters_.position
}

export { 
    Result_ as Result, 
    Parameters_ as Parameters, 
}
