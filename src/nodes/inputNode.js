import { useState } from 'react';
import { Position } from 'reactflow'; // Import Position
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const content = (
    <div>
      <span>Input</span>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
        </label>
        <label>
          Type:
          <select value={inputType} onChange={(e) => setInputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </div>
  );

  const handles = [{ type: 'source', position: Position.Right, id: 'value' }];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
