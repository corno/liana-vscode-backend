
import * as _pi from 'pareto-core/dist/interface'

import * as i__imports_completion_suggestions from "../completion_suggestions/data"

import * as i__imports_location from "../location/data"

export namespace Result_ {
    
    export type completion_suggestions = i__imports_completion_suggestions.Completion_Suggestions
    
}

export type Result_ = {
    readonly 'completion suggestions': Result_.completion_suggestions
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
