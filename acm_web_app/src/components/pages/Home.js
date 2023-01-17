import React from 'react'
import { useCallback } from "react";
import ReactFlow, {
  addEdge,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState
} from "reactflow";
import "reactflow/dist/style.css";

import {
  nodes as initialNodes,
  edges as initialEdges
} from "../../utils/initial-elements";

const onInit = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
}

export default function Home(){
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <div class = "home">
      <div className = "home--title">
        Welcome to The ACM Student Chapter at ULM
      </div>
      
      <section class="section">
        <div class="grid">
          <div class="item item--medium"></div>
          <div class="item item--large"></div>
          <div class="item item--medium"></div>
          <div class="item item--large"></div>
          <div class="item item--full"></div>
          <div class="item item--medium-1"></div>
          {/* <div class="item item--medium"></div> */}
        </div>
        </section>

        <section className="home--aboutACM">
            <p className='heading'>ACM as a gloabal community</p>
            <p className='description'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                  vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                  veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                  natus!

                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
                  vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
                  veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
                  natus!
            </p>
        </section>

      <section className = "home--aboutChapter">
        <p className='heading'>Why ACM Student Chapter at ULM?</p>
        <p className = "description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
          vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
          veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
          natus!

          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis mollitia 
          vel obcaecati tenetur rerum suscipit alias repudiandae laudantium ab. Qui 
          veniam dolore perspiciatis sapiente itaque, incidunt quam accusamus numquam 
          natus!
        </p>
      </section>

      <section className = "home--courses">
        <p className = "home--courses--title">CS courses offered at ULM</p>
        <div className = "home--courses--course-chart">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onInit={onInit}
            fitView
            attributionPosition="top-right"
            preventScrolling={false}
          >
            <MiniMap />
            <Controls />
            <Background color="#aaa" gap={16} />
          </ReactFlow>
        </div>
      </section>
    </div>
  )
}

