import {ReactFlow, Background, Controls } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

 const initialNodes = [
    {
        id : "n1",
        position: {x:0, y:0},
        data : {label : "Node 1"},
    },
    {
        id : "n2",
        position: {x:100, y:100},
        data : {label : "Node 2"}
    }
 ];

 const initialEdges = [
    {
        id : 'n1-n2',
        source : 'n1',
        target : 'n2',
        type : 'step',
        label : 'connects with'
    },
 ]

export default function Flow(){
    return (
        <div className="h-screen w-screen bg-white text-black">
            <ReactFlow nodes={initialNodes} edges={initialEdges}>
                <Background/>
                <Controls />
            </ReactFlow>
        </div>
    )
}
