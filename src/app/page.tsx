"use client";

import { ReactFlow, Background, Controls, addEdge } from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import { CustomNode } from "@/components/customNode";
import { useCallback, useState } from "react";

const nodeTypes = {
  custom: CustomNode,
};

const initialNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: {},
    type: "custom",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    type: 'custom',
    data: {}
  }
];

const initialEdges: any = [];




export default function Home() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);


  const onConnect = useCallback(
    (params: any) => setEdges((edgesSnapshot:any) => addEdge(params, edgesSnapshot)),
    []
  )
  return (
    <div style={{ width: "100%", height: "100vh", backgroundColor: "lightBlue" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}