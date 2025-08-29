/*
import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
  config?: Record<string, unknown>;
}

// Custom button styles
const customButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '25px',
  padding: '12px 30px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
};

// Custom panel styles
const customPanelStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  borderRadius: '16px',
  border: '2px solid #e1e8ed',
  backdropFilter: 'blur(10px)',
  padding: '20px',
  width: '320px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
};

// End call button style
const endCallButtonStyle: React.CSSProperties = {
  background: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '6px 12px',
  fontSize: '12px',
  fontWeight: 600,
  cursor: 'pointer',
};

const VapiWidget: React.FC<VapiWidgetProps> = ({ apiKey, assistantId }) => {
  const [vapi, setVapi] = useState<InstanceType<typeof Vapi> | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([]);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => {
      console.log('Call started');
      setIsConnected(true);
    });

    vapiInstance.on('call-end', () => {
      console.log('Call ended');
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on('speech-start', () => {
      console.log('Assistant started speaking');
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      console.log('Assistant stopped speaking');
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript((prev) => [...prev, { role: message.role, text: message.transcript }]);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    if (vapi) {
      vapi.start(assistantId);
    }
  };

  const endCall = () => {
    if (vapi) {
      vapi.stop();
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 9999,
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {!isConnected ? (
        <button onClick={startCall} style={customButtonStyle}>
          🎤 Talk to Assistant
        </button>
      ) : (
        <div style={customPanelStyle}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: isSpeaking ? '#ff4444' : '#12A594',
                  animation: isSpeaking ? 'pulse 1s infinite' : 'none',
                }}
              ></div>
              <span style={{ fontWeight: 'bold', color: '#333' }}>
                {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
              </span>
            </div>
            <button onClick={endCall} style={endCallButtonStyle}>
              End Call
            </button>
          </div>

          <div
            style={{
              maxHeight: '200px',
              overflowY: 'auto',
              marginBottom: '12px',
              padding: '8px',
              background: '#f8f9fa',
              borderRadius: '8px',
            }}
          >
            {transcript.length === 0 ? (
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                Conversation will appear here...
              </p>
            ) : (
              transcript.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '8px',
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                  }}
                >
                  <span
                    style={{
                      background: msg.role === 'user' ? '#12A594' : '#333',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      fontSize: '14px',
                      maxWidth: '80%',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0% { opacity: 1; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default VapiWidget;
*/

import React, { useState, useEffect } from 'react';
import Vapi from '@vapi-ai/web';

interface VapiWidgetProps {
  apiKey: string;
  assistantId: string;
}

// Custom button styles
const customButtonStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  borderRadius: '25px',
  padding: '12px 30px',
  fontSize: '14px',
  fontWeight: 600,
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
};

// Custom panel styles
const customPanelStyle: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  borderRadius: '16px',
  border: '2px solid #e1e8ed',
  backdropFilter: 'blur(10px)',
  padding: '20px',
  width: '320px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
};

// End call button style
const endCallButtonStyle: React.CSSProperties = {
  background: '#ff4d4f',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  padding: '6px 12px',
  fontSize: '12px',
  fontWeight: 600,
  cursor: 'pointer',
};

const VapiWidget: React.FC<VapiWidgetProps> = ({ apiKey, assistantId }) => {
  const [vapi, setVapi] = useState<InstanceType<typeof Vapi> | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [transcript, setTranscript] = useState<Array<{ role: string; text: string }>>([]);

  useEffect(() => {
    const vapiInstance = new Vapi(apiKey);
    setVapi(vapiInstance);

    vapiInstance.on('call-start', () => {
      setIsConnected(true);
    });

    vapiInstance.on('call-end', () => {
      setIsConnected(false);
      setIsSpeaking(false);
    });

    vapiInstance.on('speech-start', () => {
      setIsSpeaking(true);
    });

    vapiInstance.on('speech-end', () => {
      setIsSpeaking(false);
    });

    vapiInstance.on('message', (message) => {
      if (message.type === 'transcript') {
        setTranscript((prev) => [...prev, { role: message.role, text: message.transcript }]);
      }
    });

    vapiInstance.on('error', (error) => {
      console.error('Vapi error:', error);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, [apiKey]);

  const startCall = () => {
    vapi?.start(assistantId);
  };

  const endCall = () => {
    vapi?.stop();
  };

  return (
    <>
      {!isConnected ? (
        <button onClick={startCall} style={customButtonStyle}>
          🎤 Talk to Assistant
        </button>
      ) : (
        <div style={customPanelStyle}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: isSpeaking ? '#ff4444' : '#12A594',
                  animation: isSpeaking ? 'pulse 1s infinite' : 'none',
                }}
              ></div>
              <span style={{ fontWeight: 'bold', color: '#333' }}>
                {isSpeaking ? 'Assistant Speaking...' : 'Listening...'}
              </span>
            </div>
            <button onClick={endCall} style={endCallButtonStyle}>
              End Call
            </button>
          </div>

          <div
            style={{
              maxHeight: '200px',
              overflowY: 'auto',
              marginBottom: '12px',
              padding: '8px',
              background: '#f8f9fa',
              borderRadius: '8px',
            }}
          >
            {transcript.length === 0 ? (
              <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                Conversation will appear here...
              </p>
            ) : (
              transcript.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    marginBottom: '8px',
                    textAlign: msg.role === 'user' ? 'right' : 'left',
                  }}
                >
                  <span
                    style={{
                      background: msg.role === 'user' ? '#12A594' : '#333',
                      color: '#fff',
                      padding: '8px 12px',
                      borderRadius: '12px',
                      display: 'inline-block',
                      fontSize: '14px',
                      maxWidth: '80%',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))
            )}
          </div>

          <style>{`
            @keyframes pulse {
              0% { opacity: 1; }
              50% { opacity: 0.5; }
              100% { opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </>
  );
};

export default VapiWidget;
