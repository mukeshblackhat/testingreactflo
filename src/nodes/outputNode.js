import { useState } from 'react';
import { Position } from 'reactflow'; // Import Position
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const content = (
    <div>
      <span>Output</span>
      <div>
        <label>
          Name:
          <input type="text" value={currName} onChange={(e) => setCurrName(e.target.value)} />
        </label>
        <label>
          Type:
          <select value={outputType} onChange={(e) => setOutputType(e.target.value)}>
            <option value="Text">Text</option>
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </div>
  );

  const handles = [{ type: 'target', position: Position.Left, id: 'value' }];

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};
