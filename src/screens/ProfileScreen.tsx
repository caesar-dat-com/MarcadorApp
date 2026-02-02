import React from 'react';
import { CartoonBackground } from '../components/CartoonBackground';
import { CartoonCard } from '../components/CartoonCard';
import { CartoonButton } from '../components/CartoonButton';
import { CartoonBadge } from '../components/CartoonBadge';
import { CartoonTheme as T } from '../theme/cartoonTheme';
import { CURRENT_USER } from '../services/MockData';
import './ProfileScreen.css';

const ProfileScreen = () => {
    const user = CURRENT_USER;

    const handleEditProfile = () => {
        alert('Perfil: Próximamente podrás editar tus datos.');
    };

    return (
        <CartoonBackground>
            <div className="profile-scroll-content">
                {/* Header Avatar Section */}
                <CartoonCard className="header-card">
                    <div className="avatar-wrapper">
                        <img src={user.avatarUrl} alt="avatar" className="avatar" />
                    </div>
                    <h2 className="user-name">{user.name} 👤</h2>
                    <CartoonBadge text={`${user.rank} • Lvl ${user.level}`} tone="purple" />

                    <div style={{ marginTop: '16px', width: '100%' }}>
                        <CartoonButton
                            title="EDITAR PERFIL"
                            leftEmoji="✏️"
                            variant="ghost"
                            onPress={handleEditProfile}
                        />
                    </div>
                </CartoonCard>

                {/* Stats Grid */}
                <div className="stats-row">
                    <CartoonCard className="stat-card">
                        <span className="stat-value">{user.stats.wins}</span>
                        <span className="stat-label">VICTORIAS 🏆</span>
                    </CartoonCard>
                    <CartoonCard className="stat-card">
                        <span className="stat-value">{user.stats.winRate}</span>
                        <span className="stat-label">WIN RATE 📈</span>
                    </CartoonCard>
                </div>

                {/* Detailed Stats */}
                <CartoonCard className="details-card">
                    <h3 className="section-title">TEMPORADA ACTUAL 🌟</h3>

                    <div className="stat-line">
                        <span className="label">Total Partidos</span>
                        <span className="value">{user.stats.matches}</span>
                    </div>

                    <div className="divider" />

                    <div className="stat-line">
                        <span className="label">Racha Actual</span>
                        <span className="value">3 🔥</span>
                    </div>

                    <div style={{ marginTop: '16px' }}>
                        <CartoonButton
                            title="VER LOGROS"
                            leftEmoji="🏅"
                            variant="blue"
                            onPress={() => alert('Logros: ¡Sigue jugando para desbloquear más!')}
                        />
                    </div>
                </CartoonCard>
            </div>
        </CartoonBackground>
    );
};

export default ProfileScreen;
