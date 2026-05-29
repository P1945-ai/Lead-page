export default function MeshGradient() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* Primary indigo blob — top-left */}
      <div
        className="mesh-blob absolute rounded-full"
        style={{
          width: '900px',
          height: '900px',
          top: '-200px',
          left: '-200px',
          background: 'radial-gradient(circle, rgba(91,108,255,0.15) 0%, transparent 65%)',
          animationName: 'mesh-drift-a',
          animationDuration: '24s',
        }}
      />

      {/* Secondary purple blob — bottom-right */}
      <div
        className="mesh-blob absolute rounded-full"
        style={{
          width: '700px',
          height: '700px',
          bottom: '-150px',
          right: '-150px',
          background: 'radial-gradient(circle, rgba(123,91,255,0.10) 0%, transparent 65%)',
          animationName: 'mesh-drift-b',
          animationDuration: '20s',
        }}
      />

      {/* Center accent blob */}
      <div
        className="mesh-blob absolute rounded-full"
        style={{
          width: '500px',
          height: '500px',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(91,108,255,0.06) 0%, transparent 70%)',
          animationName: 'mesh-drift-c',
          animationDuration: '32s',
        }}
      />
    </div>
  );
}
