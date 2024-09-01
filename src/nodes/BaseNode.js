import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, data, handles = [], content }) => {
  // console.log(handles,"---------->");
  return (
    <div className="baseNode" style={{ width: 200, minHeight: 80, display: 'flex', flexDirection: 'column' }}>
      {handles.map((handle, index) => (
        <Handle
          key={index}
          type={handle.type}
          position={handle.position || Position.Left}
          id={`${id}-${handle.id}`}
          style={handle.style}
        />
      ))}
      <div style={{ flexGrow: 1 }}>{content}</div>
    </div>
  );
};
