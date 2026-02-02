import React, { useState } from 'react';
import GlassContainer from '../components/GlassContainer';
import { MOCK_BOOKINGS, Booking } from '../services/MockData';
import './BookingScreen.css';

const BookingScreen = () => {
    const [bookings] = useState<Booking[]>(MOCK_BOOKINGS);

    const handleChallenge = (booking: Booking) => {
        alert(`🔥 RETADOR EN CAMINO\nHas retado a ${booking.hostName} en la ${booking.courtName}.`);
    };

    const handleReserve = () => {
        alert('Reserva: Función de crear nueva reserva próximamente.');
    };

    const handleJoin = () => {
        alert('Unirse: Te has unido al partido.');
    };

    return (
        <div className="booking-screen">
            <div className="booking-header">
                <h1 className="booking-header-title">Canchas Activas</h1>
                <button className="reserve-btn" onClick={handleReserve}>
                    + RESERVAR
                </button>
            </div>

            <div className="booking-list">
                {bookings.map((item) => {
                    const missing = item.playersMax - item.playersCurrent;
                    const isFull = missing <= 0;

                    return (
                        <GlassContainer key={item.id} className="booking-card" size="large">
                            <div className="card-header">
                                <h2 className="court-name">{item.courtName}</h2>
                                <div className={`badge ${isFull ? 'badge-full' : 'badge-open'}`}>
                                    <span className="badge-text">
                                        {isFull ? 'LLENO' : `FALTAN ${missing}`}
                                    </span>
                                </div>
                            </div>

                            <p className="host-name">Host: {item.hostName}</p>
                            <p className="time">{item.time}</p>

                            <div className="actions">
                                {item.isChallengeable && (
                                    <button
                                        className="action-btn btn-challenge"
                                        onClick={() => handleChallenge(item)}
                                    >
                                        🔥 RETAR
                                    </button>
                                )}
                                {!isFull && (
                                    <button
                                        className="action-btn btn-join"
                                        onClick={handleJoin}
                                    >
                                        UNIRSE
                                    </button>
                                )}
                            </div>
                        </GlassContainer>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingScreen;
