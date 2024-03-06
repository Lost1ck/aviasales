/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useGetSearchIdQuery, useGetTicketsQuery } from '../../../../api/tikets.api';
import styles from './tickets.module.scss';
import Ticket from './Tiket';

const TicketsComponent = () => {
  const { data: searchIdData, isFetching: isFetchingSearchId } = useGetSearchIdQuery();
  const [tickets, setTickets] = useState([]);
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [stop, setStop] = useState(false);
  const ticketsPerPage = 5;

  const { data: ticketsData, refetch } = useGetTicketsQuery(searchIdData?.searchId, {
    skip: !searchIdData?.searchId || stop,
  });

  useEffect(() => {
    if (!isFetchingSearchId && searchIdData?.searchId && !stop) {
      const fetchTickets = async () => {
        const response = await refetch();
        if (response.data) {
          setTickets((prev) => [...prev, ...response.data.tickets]);
          setDisplayedTickets((prev) => [...prev, ...response.data.tickets]
            .slice(0, ticketsPerPage));
          setStop(response.data.stop);
        }
      };

      fetchTickets();
    }
  }, [searchIdData, isFetchingSearchId, stop, refetch]);

  const handleLoadMore = () => {
    const nextTicketsToShow = tickets
      .slice(displayedTickets.length, displayedTickets.length + ticketsPerPage);
    setDisplayedTickets((prev) => [...prev, ...nextTicketsToShow]);
  };

  return (
    <div>
      {displayedTickets.length === 0 && <p>Билеты загружаются...</p>}
      {displayedTickets.map((ticket, index) => <Ticket key={ticket.id || index} ticket={ticket} />)}
      {displayedTickets.length < tickets.length && (
        <button className={styles.button} type="button" onClick={handleLoadMore}><span className={styles.text}>Показать еще 5 билетов</span></button>
      )}
    </div>
  );
};

export default TicketsComponent;
