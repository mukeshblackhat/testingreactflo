import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DateNode = ({ id, data }) => {
  const [date, setDate] = useState(data?.date || new Date().toISOString().split('T')[0]);

  const content = (
    <div>
      <span>Date</span>
      <div>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
    </div>
  );

  const handles = [{ type: 'source', position: Position.Right, id: 'value' }];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
