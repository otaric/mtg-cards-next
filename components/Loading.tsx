export default function Loading() {
  return (
    <>
      <div className="container">
        <div className="loading"></div>
      </div>
      <style jsx>{`
        .container {
          margin-top: 300px;
          display: flex;
          justify-content: center;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        .loading {
          width: 64px;
          height: 64px;
          border-radius: 50%;

          border-top: 8px solid rgba(0, 0, 0, 1);
          border-left: 8px solid rgba(0, 0, 0, 1);
          border-right: 8px solid rgba(0, 0, 0, 0);

          animation: spin 0.575s infinite linear;
        }
      `}</style>{' '}
    </>
  )
}
