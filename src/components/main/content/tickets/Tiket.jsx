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
  <div className={styles.ticket}>
    <div className={styles.top}>
      <p style={{ color: '#2196F3', textTransform: 'uppercase', fontSize: '24px' }}>
        {`${ticket.price.toLocaleString('ru-RU')} P`}
      </p>
      <p>
        <img src={`https://pics.avs.io/99/36/${ticket.carrier}.png`} alt="avia ticket-logo" />
      </p>
    </div>
    {ticket?.segments.map((segment, index) => (
      <React.Fragment key={segment.id || index}>
        <div className={styles.flex}>
          <div className={styles.flex} style={{ flexDirection: 'column', flex: '1', marginBottom: '20px' }}>
            <div>
              <p>
                {segment.origin}
                {' '}
                -
                {' '}
                {segment.destination}
              </p>
            </div>
            <div>
              <p className={styles.textBlack}>
                {addMinutesToISOTimeString(segment.date, segment.duration)}
                {' '}
                -
                {' '}
                {formatISOTime(segment.date)}
              </p>
            </div>
          </div>
          <div className={styles.flex} style={{ flexDirection: 'column', flex: '1' }}>
            <div>
              <p>
                В ПУТИ
              </p>
            </div>
            <div>
              <p className={styles.textBlack}>
                {formatDuration(segment.duration)}
                {' '}
              </p>
            </div>
          </div>
          <div className={styles.flex} style={{ flexDirection: 'column', flex: '1' }}>
            <div>
              <p>
                {segment.stops.length === 0 ? 'БЕЗ ПЕРЕСАДОК' : `${segment.stops.length} ПЕРЕСАДКИ`}
              </p>
            </div>
            <div>
              <p className={styles.textBlack}>
                {segment.stops.join(', ') || '-'}
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
);

export default Ticket;
