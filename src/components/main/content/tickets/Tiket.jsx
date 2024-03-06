/* eslint-disable react/prop-types */
import React from 'react';
import styles from './tickets.module.scss';

function formatISOTime(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function formatDuration(totalMinutes) {
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `${hours}ч ${minutes}м`;
}

function addMinutesToISOTimeString(isoString, minutesToAdd) {
  const date = new Date(isoString);
  date.setMinutes(date.getMinutes() + minutesToAdd);
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

const Ticket = ({ ticket }) => (
  <div style={{
    marginTop: '20px',
    marginBottom: '20px',
    padding: '10px',
    boxShadow: '0px 0px 2px 2px rgba(0, 0, 0, 0.05)',
    height: '184px',
    backgroundColor: '#fff',
    borderRadius: '5px',
  }}
  >
    {/* {console.log(ticket)} */}
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '40px',
    }}
    >
      <p style={{ color: '#2196F3', textTransform: 'uppercase', fontSize: '24px' }}>
        {`${ticket?.price} P`}
      </p>
      <p>
        {ticket?.carrier}
      </p>
    </div>
    <div className={styles.gridContainer} style={{ width: '400px' }}>
      {ticket?.segments.map((segment, index) => (
        <React.Fragment key={segment.id || index}>
          <div className={styles.gridItem}>
            <p>
              {segment.origin}
              {' '}
              -
              {' '}
              {segment.destination}
            </p>
            <p>
              В ПУТИ
            </p>
            <p>
              {segment.stops.length}
              {' '}
              ПЕРЕСАДКИ
            </p>
          </div>
          <div className={styles.gridItem}>
            <p>
              {addMinutesToISOTimeString(segment.date, segment.duration)}
              {' '}
              -
              {' '}
              {formatISOTime(segment.date)}
            </p>
            <p>
              {formatDuration(segment.duration)}
              {' '}
            </p>
            <p>
              {segment.stops.join(', ') || 'Без пересадок'}
            </p>
          </div>
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default Ticket;
