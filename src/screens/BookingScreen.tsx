import React, { useState } from 'react';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonBadge } from '../components/CartoonBadge';
import { CartoonCard } from '../components/CartoonCard';
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
        <CartoonBackground>
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
                        const badgeText = isFull ? 'LLENO' : missing === 1 ? 'FALTA 1' : `FALTAN ${missing}`;

                        return (
                            <CartoonCard key={item.id} className="booking-card">
                                <div className="card-header">
                                    <h2 className="court-name">{item.courtName}</h2>
                                    <CartoonBadge
                                        text={badgeText}
                                        tone={isFull ? 'red' : 'blue'}
                                    />
                                </div>

                                <p className="host-name">Anfitrión: {item.hostName}</p>
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
                            </CartoonCard>
                        );
                    })}
                </div>
            </div>
        </CartoonBackground>
    );
};

export default BookingScreen;
