import * as React from 'react';
import { addNavLinkToTree } from '../../../helpers';
import { INodeProps } from '../../../types';
import "./node-nav-links.css"
import NodeContainer from '../../../components/nodes/node-container';

export  function NodeNavLinks(props : INodeProps) {
    var {treeData, setTreeAndScriptData}=props
    var actionProps = {
        iconProps: {
            iconName: 'Add'
        },
        onClick: () => addNavLinkToTree(treeData,setTreeAndScriptData),
        title: "Add a new navigation link"
    };
    var containerProps = {...props, actionProps, title:"Nav links"}
    return <NodeContainer {...containerProps}/>
}