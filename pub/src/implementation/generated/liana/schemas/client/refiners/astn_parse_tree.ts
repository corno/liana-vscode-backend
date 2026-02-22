
import * as _p from 'pareto-core/dist/assign'

import _p_change_context from 'pareto-core/dist/_p_change_context'

import _p_list_from_text from 'pareto-core/dist/_p_list_from_text'

import _p_variables from 'pareto-core/dist/_p_variables'

import * as t_signatures from "../../../../../../interface/generated/liana/schemas/client/unmarshall"

import * as t_out from "../../../../../../interface/generated/liana/schemas/client/data"

import * as v_unmarshalled_from_parse_tree from "liana-core/dist/implementation/manual/refiners/unmarshalled/astn_parse_tree"

import * as v_parse_tree_to_location from "astn-core/dist/implementation/manual/transformers/parse_tree/location"

export const Position: t_signatures.Position = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "line": null,
                    "character": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'line': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'line',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Number(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['decimal', null],
                        },
                    ),
                ),
                'character': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'character',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Number(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['decimal', null],
                        },
                    ),
                ),
            }
        },
    ),
)

export const Range: t_signatures.Range = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "start": null,
                    "end": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'start': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'start',
                        },
                    ),
                    ($) => Position(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'end': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'end',
                        },
                    ),
                    ($) => Position(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Format_Options: t_signatures.Format_Options = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "insert spaces": null,
                    "preserve delimiters": null,
                    "preserve final newline state": null,
                    "preserve commas": null,
                    "indent string": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'insert spaces': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'insert spaces',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
                'preserve delimiters': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'preserve delimiters',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
                'preserve final newline state': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'preserve final newline state',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
                'preserve commas': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'preserve commas',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Boolean(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'type': ['true/false', null],
                        },
                    ),
                ),
                'indent string': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'indent string',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Text_Edit: t_signatures.Text_Edit = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.State(
        $,
        ($) => abort(
            $,
        ),
    ),
    ($) => _p.decide.text(
        $['option']['value'],
        ($t): t_out.Text_Edit => {
            switch ($t) {
                case 'replace':
                    return _p_change_context(
                        $['value'],
                        ($) => ['replace', Replace(
                            $,
                            ($) => abort(
                                $,
                            ),
                        )],
                    )
                case 'delete':
                    return _p_change_context(
                        $['value'],
                        ($) => ['delete', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "range": null,
                                        },
                                    ),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                    )
                                    return {
                                        'range': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'range',
                                                },
                                            ),
                                            ($) => Range(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                case 'insert':
                    return _p_change_context(
                        $['value'],
                        ($) => ['insert', _p_change_context(
                            v_unmarshalled_from_parse_tree.Verbose_Group(
                                $,
                                ($) => abort(
                                    $,
                                ),
                                {
                                    'expected properties': _p.dictionary.literal(
                                        {
                                            "location": null,
                                            "text": null,
                                        },
                                    ),
                                },
                            ),
                            ($) => _p_variables(
                                () => {
                                    
                                    const var_verbose_group_range = v_parse_tree_to_location.Value(
                                        $['value'],
                                    )
                                    return {
                                        'location': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'location',
                                                },
                                            ),
                                            ($) => Position(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                        'text': _p_change_context(
                                            v_unmarshalled_from_parse_tree.Property(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                                {
                                                    'id': 'text',
                                                },
                                            ),
                                            ($) => v_unmarshalled_from_parse_tree.Text(
                                                $,
                                                ($) => abort(
                                                    $,
                                                ),
                                            ),
                                        ),
                                    }
                                },
                            ),
                        )],
                    )
                default:
                    return abort(
                        ['liana', {
                            'type': ['state', ['unknown option', $['option']['value']]],
                            'range': v_parse_tree_to_location.Value(
                                $['value'],
                            ),
                        }],
                    )
            }
        },
    ),
)

export const Replace: t_signatures.Replace = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "range": null,
                    "text": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'range': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'range',
                        },
                    ),
                    ($) => Range(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
                'text': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'text',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Format_Result: t_signatures.Format_Result = ($, abort) => _p.list.from.list(
    v_unmarshalled_from_parse_tree.List(
        $,
        ($) => abort(
            $,
        ),
    )['items'],
).map(
    ($) => _p_change_context(
        $['value'],
        ($) => Text_Edit(
            $,
            ($) => abort(
                $,
            ),
        ),
    ),
)

export const Format_Error: t_signatures.Format_Error = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "message": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'message': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'message',
                        },
                    ),
                    ($) => v_unmarshalled_from_parse_tree.Text(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Format_Parameters: t_signatures.Format_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "options": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'options': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'options',
                        },
                    ),
                    ($) => Format_Options(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)

export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($, abort) => _p_change_context(
    v_unmarshalled_from_parse_tree.Verbose_Group(
        $,
        ($) => abort(
            $,
        ),
        {
            'expected properties': _p.dictionary.literal(
                {
                    "position": null,
                },
            ),
        },
    ),
    ($) => _p_variables(
        () => {
            
            const var_verbose_group_range = v_parse_tree_to_location.Value(
                $['value'],
            )
            return {
                'position': _p_change_context(
                    v_unmarshalled_from_parse_tree.Property(
                        $,
                        ($) => abort(
                            $,
                        ),
                        {
                            'id': 'position',
                        },
                    ),
                    ($) => Position(
                        $,
                        ($) => abort(
                            $,
                        ),
                    ),
                ),
            }
        },
    ),
)
