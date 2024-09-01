import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const BooleanNode = ({ id, data }) => {
  const [value, setValue] = useState(data?.value || false);

  const content = (
    <div>
      <span>Boolean</span>
      <div>
        <label>
          Value:
          <input
            type="checkbox"
            checked={value}
            onChange={(e) => setValue(e.target.checked)}
          />
        </label>
      </div>
    </div>
  );

  const handles = [{ type: 'source', position: Position.Right, id: 'value' }];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
