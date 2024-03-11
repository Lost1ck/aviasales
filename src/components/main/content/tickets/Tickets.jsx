/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetSearchIdQuery, useGetTicketsQuery } from '../../../../api/tikets.api';
import styles from './tickets.module.scss';
import Ticket from './Tiket';

const TicketsComponent = () => {
  const active = useSelector((state) => state.tabs.active); // Получаем активный таб
  const { data: searchIdData, isFetching: isFetchingSearchId } = useGetSearchIdQuery();
  const [tickets, setTickets] = useState([]);
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [stop, setStop] = useState(false);
  const ticketsPerPage = 5;
  const { checkboxes } = useSelector((state) => state.aviasales);

  const { data: ticketsData, refetch } = useGetTicketsQuery(searchIdData?.searchId, {
    skip: !searchIdData?.searchId || stop,
  });

  const filterTicketsByTransfers = (ticketsArray) => ticketsArray.filter((ticket) => {
    const transferCounts = ticket.segments.map((segment) => segment.stops.length);
    return transferCounts.every((count) => {
      if (checkboxes.withoutTransfer && count === 0) return true;
      if (checkboxes.oneTransfer && count === 1) return true;
      if (checkboxes.twoTransfers && count === 2) return true;
      if (checkboxes.threeTransfers && count === 3) return true;
      return false;
    });
  });

  useEffect(() => {
    if (!isFetchingSearchId && searchIdData?.searchId && !stop) {
      const fetchTickets = async () => {
        const response = await refetch();
        if (response.data) {
          const newTickets = [...tickets, ...response.data.tickets];
          const filteredTickets = filterTicketsByTransfers(newTickets);
          setTickets(filteredTickets);
          sortAndDisplayTickets(filteredTickets);
          setStop(response.data.stop);
        }
      };

      fetchTickets();
    }
  }, [searchIdData, isFetchingSearchId, stop, refetch, active, checkboxes]);

  useEffect(() => {
    sortAndDisplayTickets(tickets);
  }, [active]);

  const sortAndDisplayTickets = (ticketsArray) => {
    const sortedTickets = [...ticketsArray];
    if (active === 'cheapest') {
      sortedTickets.sort((a, b) => a.price - b.price);
    } else if (active === 'fastest') {
      sortedTickets.sort((a, b) => a.segments
        .reduce((acc, curr) => acc + curr.duration, 0) - b.segments
        .reduce((acc, curr) => acc + curr.duration, 0));
    } else if (active === 'optimal') {
      sortedTickets.sort((a, b) => {
        const durationA = a.segments.reduce((acc, curr) => acc + curr.duration, 0);
        const durationB = b.segments.reduce((acc, curr) => acc + curr.duration, 0);
        return (a.price / durationA) - (b.price / durationB);
      });
    }
    setDisplayedTickets(sortedTickets.slice(0, ticketsPerPage));
  };

  const handleLoadMore = () => {
    const sortedTickets = [...tickets];
    if (active === 'cheapest') {
      sortedTickets.sort((a, b) => a.price - b.price);
    } else if (active === 'fastest') {
      sortedTickets.sort((a, b) => a.segments
        .reduce((acc, curr) => acc + curr.duration, 0) - b.segments
        .reduce((acc, curr) => acc + curr.duration, 0));
    } else if (active === 'optimal') {
      sortedTickets.sort((a, b) => {
        const durationA = a.segments.reduce((acc, curr) => acc + curr.duration, 0);
        const durationB = b.segments.reduce((acc, curr) => acc + curr.duration, 0);
        return (a.price / durationA) - (b.price / durationB);
      });
    }
    const nextTicketsToShow = sortedTickets
      .slice(displayedTickets.length, displayedTickets.length + ticketsPerPage);

    setDisplayedTickets(sortedTickets.slice(0, displayedTickets.length + ticketsPerPage));
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
