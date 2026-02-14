"use client"

import {ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, addEdge, MiniMap } from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useState, useCallback } from "react"; 


 const initialNodes = [
    {
        id : "n1",
        position: {x:0, y:0},
        data : {label : "Node 1"},
        type : 'input'
    },
    {
        id : "n2",
        position: {x:-100, y:100},
        data : {label : "Node 2"},
        type : 'output'
    },
    {
        id: 'n3',
        position : {x:100, y:100},
        data : {value : "Node 3", label : 'node node'},
        type : 'textUpdater'
    }
 ];

 const initialEdges = [
    {
        id : 'n1-n2',
        source : 'n1',
        target : 'n2',
        label : 'connects with'
    },
    {
        id:'n1-n3',
        source : "n1",
        target: 'n3',
        animated: true,
        label:"what the hack"
    }
 ]

 const nodeColor = (node:any)=> {
    switch(node.type){
        case 'input':
            return 'red';
        
        case 'output':
            return 'blue';
        
        case 'default':
            return 'green'
    }
 }

 export function TextUpdaterNode(props :any){
    const onChange = useCallback((evt: any)=> {console.log(evt.target.value);},[]);

    return (
        <div className="text-updater-node px-4 py-2 rounded-md border bg-red-200 w-auto">
            <div>
                <label htmlFor="text">Text:</label>
                <input id="text" name="text" onChange={onChange} className="nodrag" />
            </div>
        </div>
    )
 }

 

 const nodeType = {
    textUpdater : TextUpdaterNode,
 };

 const rfStyle = {
    backgroundColor : '#B8CEFF'
 }


export default function Flow(){

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes:any) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    )

    const onEdgesChange = useCallback(
        (changes : any) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    )

    const onConnect = useCallback(
        (params:any) => setEdges((edgesSnapshot)=> addEdge(params, edgesSnapshot)),
        []
    )

    return (
        <div className="h-screen w-screen bg-white text-black">
            <ReactFlow 
            nodes={nodes} 
            edges={edges} 
            nodeTypes={nodeType}
            onNodesChange={onNodesChange} 
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            style={rfStyle}
            fitView>
                <Background/>
                <Controls />
                {/* @ts-ignore */}
                <MiniMap nodeColor={nodeColor} nodeStrokeWidth={3} zoomable pannable />
            </ReactFlow>
        </div>
    )
}
