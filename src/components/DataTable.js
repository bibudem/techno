import React, { useState, useEffect } from 'react';

const DataTable = ({ src }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(src, { headers: { 'Accept': 'text/csv' } })
      .then(response => {
        if (!response.ok) throw new Error(`Erreur : ${response.statusText}`);
        return response.text();
      })
      .then(text => {
        if (text.includes("<!DOCTYPE html>")) throw new Error("Le fichier CSV est mal servi.");
        const rows = text.trim().split("\n").map(row => row.split(","));
        setData(rows);
      })
      .catch(err => setError(err.message));
  }, [src]);

  if (error) return <p style={{ color: 'red' }}>⚠️ {error}</p>;
  if (data.length === 0) return <p>Chargement des données...</p>;

  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
        <thead>
          <tr>
            {data[0].map((header, i) => (
              <th key={i} style={{ padding: '8px', borderBottom: '2px solid var(--c-dddddd)' }}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} style={{ padding: '8px', borderBottom: '1px solid var(--c-dddddd)' }}>
                  {cell.startsWith("[") && cell.includes("](") ? (
                    <a href={cell.match(/\((.*?)\)/)[1]} target="_blank" rel="noopener noreferrer">
                      {cell.match(/\[(.*?)\]/)[1]}
                    </a>
                  ) : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;