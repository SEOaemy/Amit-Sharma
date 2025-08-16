import React, { useEffect, useState } from 'react';

const BlockchainVisualizer: React.FC<{ nodeCount?: number, isExpanded?: boolean }> = ({ nodeCount = 25, isExpanded = false }) => {
    const [nodes, setNodes] = useState<{ id: number, x: number, y: number, size: number, delay: number, duration: number }[]>([]);

    useEffect(() => {
        const generatedNodes = Array.from({ length: nodeCount }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * (isExpanded ? 12 : 8) + 2,
            delay: Math.random() * 10,
            duration: Math.random() * 10 + 10,
        }));
        setNodes(generatedNodes);
    }, [nodeCount, isExpanded]);

    const lineStyle: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: 'rgba(57, 255, 20, 0.2)',
        height: '1px',
        transformOrigin: 'left',
    };

    return (
        <div className={`relative w-full ${isExpanded ? 'h-[400px]' : 'h-[250px]'} perspective-1000`}>
            <style>
                {`
                @keyframes pulse {
                    0% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(57, 255, 20, 0.7); }
                    70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(57, 255, 20, 0); }
                    100% { transform: scale(0.9); box-shadow: 0 0 0 0 rgba(57, 255, 20, 0); }
                }
                .node-pulse {
                    animation: pulse 2s infinite;
                }
                @keyframes float-node {
                    0% { transform: translate(0, 0); }
                    50% { transform: translate(5px, 10px); }
                    100% { transform: translate(0, 0); }
                }
                `}
            </style>
            <div className="absolute inset-0 transform-style-3d animate-float-node" style={{ animation: `float-node 20s infinite ease-in-out` }}>
                {nodes.map((node, i) => (
                    <div
                        key={node.id}
                        className="absolute rounded-full bg-gradient-to-br from-green-400 to-emerald-600 node-pulse"
                        style={{
                            left: `${node.x}%`,
                            top: `${node.y}%`,
                            width: `${node.size}px`,
                            height: `${node.size}px`,
                            animationDelay: `${node.delay}s`,
                            animationDuration: `${node.duration / 5}s`,
                            transform: `translateZ(${node.size * 5}px)`
                        }}
                    ></div>
                ))}
                {nodes.slice(1).map((node, i) => {
                    const prevNode = nodes[i];
                    const angle = Math.atan2(node.y - prevNode.y, node.x - prevNode.x) * 180 / Math.PI;
                    const distance = Math.sqrt(Math.pow(node.x - prevNode.x, 2) + Math.pow(node.y - prevNode.y, 2));

                    return (
                        <div
                            key={`line-${i}`}
                            style={{
                                ...lineStyle,
                                left: `${prevNode.x}%`,
                                top: `${prevNode.y}%`,
                                width: `${distance}%`,
                                transform: `rotate(${angle}deg)`,
                            }}
                        />
                    );
                })}
            </div>
             <div className="absolute inset-0 bg-gradient-to-t from-gray-900/0 to-gray-900/50 pointer-events-none"></div>
        </div>
    );
};

export default BlockchainVisualizer;
