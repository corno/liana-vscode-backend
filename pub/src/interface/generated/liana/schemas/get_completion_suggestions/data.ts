
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_location from "../location/data"

export namespace Result_ {
    
    export namespace completion_items {
        
        export namespace L {
            
            export type label = string
            
            export type insert_text = string
            
            export type documentation = string
            
        }
        
        export type L = {
            readonly 'label': L.label
            readonly 'insert text': L.insert_text
            readonly 'documentation': L.documentation
        }
        
    }
    
    export type completion_items = _pi.List<completion_items.L>
    
}

export type Result_ = {
    readonly 'completion items': Result_.completion_items
}

export namespace Parameters_ {
    
    export type content = string
    
    export type file_path = string
    
    export type position = i__imports_location.Position
    
    export type indent = string
    
}

export type Parameters_ = {
    readonly 'content': Parameters_.content
    readonly 'file path': Parameters_.file_path
    readonly 'position': Parameters_.position
    readonly 'indent': Parameters_.indent
}

export { 
    Result_ as Result, 
    Parameters_ as Parameters, 
}
