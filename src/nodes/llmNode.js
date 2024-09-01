import { Position } from 'reactflow'; // Import Position
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const content = (
    <div>
      <span>LLM</span>
      <div>This is a LLM.</div>
    </div>
  );

  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: `${100/3}%` } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200/3}%` } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
