export const dynamic = 'force-static';

export default function Home() {
  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '50px auto', 
      padding: '20px',
      textAlign: 'center'
    }}>
      <h1>Sam Chat API</h1>
      <p>This is an API-only service. Use the <code>/api/chat</code> endpoint to interact with the chat.</p>
      <p>See <code>FRONTEND_INTEGRATION.md</code> for integration instructions.</p>
    </div>
  );
} 