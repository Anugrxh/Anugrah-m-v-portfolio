import React from 'react';

const Loading = () => {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      height: "100vh" // Removed background color
    }}>
      <div style={{
        border: '4px solid rgba(0, 0, 0, 0.1)', // Light gray border
        borderTop: '4px solid #fff', // White top border for the rotating part
        borderRadius: '50%',
        width: '50px',  // Adjust size as needed
        height: '50px', // Adjust size as needed
        animation: 'spin 1s linear infinite', // CSS animation
        margin: '0 auto'
      }}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loading;
