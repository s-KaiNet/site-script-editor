import * as React from 'react';
import {removeNodeAtPath} from 'react-sortable-tree';
import {getNodeKey} from '../../../helpers';
import {INodeProps} from '../../../types';
import NodeWrapper from '../../../components/nodes/node-wrapper';
import SDTextField from '../../../components/sd-text-field';
import './node-field-deletion.css'

export default function NodeFieldDeletion(props : INodeProps) {
    var {path, treeData, setTreeAndScriptData} = props;
    var actionProps = {
        iconProps: {
            iconName: 'Delete'
        },
        onClick: () => setTreeAndScriptData(removeNodeAtPath({treeData, path, getNodeKey})),
        title: "Remove the field deletion"
    };

    return <NodeWrapper actionProps={actionProps} smallTitle="Field deletion" menuClass="sd_site_hierarchy_node_menu_field_deletion" infoText="Deletes a default field that was provided by the selected template type.">
        <div className="sd_site_hierarchy_node_field_deletion">
            <div><SDTextField {...props} label="Field display name" fieldName="displayName"/></div>
        </div>
    </NodeWrapper>;
}