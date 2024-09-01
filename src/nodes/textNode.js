import { useState, useEffect, useRef } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const textAreaRef = useRef(null);
  const [currText, setCurrText] = useState(data?.text || '{{1}}');
  const [handles, setHandles] = useState([ { type: 'target', position: Position.Left, id: 'system', style: { top: `${100/2}%` } },{ type: 'source', position: Position.Right, id: 'output' }]);
  // Get the updateHandlePosition function from the store
  const updateHandlePosition = useStore(state => state.updateHandlePosition);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'; // Reset the height
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }

    // Extract variables from text input
    const variableRegex = /\{\{(\w+)\}\}/g;
    const variables = [...currText.matchAll(variableRegex)].map(match => match[1]);

    // Calculate positions and create handles for each variable
    const newHandles = variables.map((variable, index) => ({
      type: 'target', // Make it a target handle
      position: Position.Left,
      id: `input-${variable}`,
      style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }, // Dynamic positioning
    }));
     console.log(newHandles)
    // Include the existing output handle
    setHandles([...newHandles, { type: 'source', position: Position.Right, id: 'output' }]);
//updating store 

   
  }, [currText]);
  useEffect(() => {
    handles.forEach(handle => {
      // Update the store with the handle positions only after handles are fully set
      updateHandlePosition(id, handle.id, { position: handle.position ,top: handle.style?.top});
    });
  }, [handles, id, updateHandlePosition]);

  const content = (
    <div>
      <span>Text</span>
      <div>
        <label>
          Text:
          <textarea
            value={currText}
            onChange={(e) => setCurrText(e.target.value)}
            ref={textAreaRef}
            style={{
              width: '100%',
              boxSizing: 'border-box',
              outline: 'none', // Removes the outline on focus
            }}
          />
        </label>
      </div>
    </div>
  );

  return <BaseNode id={id} data={data} handles={handles} content={content} />;
};

