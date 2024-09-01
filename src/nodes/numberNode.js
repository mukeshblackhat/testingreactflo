import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const NumberNode = ({ id, data }) => {
  const [number, setNumber] = useState(data?.number || 0);

  const content = (
    <div>
      <span>Number</span>
      <div>
        <label>
          Number:
          <input
            type="number"
            value={number}
            onChange={(e) => setNumber(parseFloat(e.target.value))}
          />
        </label>
      </div>
    </div>
  );

  const handles = [{ type: 'source', position: Position.Right, id: 'value' }];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
