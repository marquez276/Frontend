import { Link } from 'react-router-dom'
import Logo from '../img/Logo.jpg'
import { useState, useEffect } from 'react'
import api from 'axios'
import { useAuth } from '../../context/AuthContext'

function Header() {
    const { user, isAuthenticated, logout, isAdmin } = useAuth()
    const [showDropdown, setShowDropdown] = useState(false)
    const [showAdminMenu, setShowAdminMenu] = useState(false)

    return (
        <header>
            <div>
                <img src={Logo} alt="InovaVerde" title="Inovação e Sustentabilidade" className="logo" />
                
                <div className="header-actions">
                    <div 
                        className="admin-menu-container"
                        onClick={() => setShowAdminMenu(!showAdminMenu)}
                    >
                        <div className="hamburger-icon">Menu</div>
                        
                        {showAdminMenu && (
                            <div className="dropdown-menu admin-dropdown">
                                <Link to="/home" className="dropdown-item">
                                    Início
                                </Link>
                                <Link to="/projetos" className="dropdown-item">
                                    Projetos
                                </Link>
                                <Link to="/enviar-ideia" className="dropdown-item">
                                    Enviar Ideia
                                </Link>
                                <Link to="/dicas" className="dropdown-item">
                                    Dicas
                                </Link>
                                <Link to="/sobre" className="dropdown-item">
                                    Sobre
                                </Link>
                                <Link to="/ajuda" className="dropdown-item">
                                    Ajuda
                                </Link>
                                {isAuthenticated && (
                                    <>
                                        <hr className="menu-divider" />
                                        <Link to="/favoritos" className="dropdown-item">
                                            Favoritos
                                        </Link>
                                    </>
                                )}
                                {isAdmin() && (
                                    <>
                                        <Link to="/admin-projetos" className="dropdown-item">
                                            Gerenciar Projetos
                                        </Link>
                                        <Link to="/admin-ideias" className="dropdown-item">
                                            Gerenciar Ideias
                                        </Link>
                                        <Link to="/admin-usuarios" className="dropdown-item">
                                            Gerenciar Usuários
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                    
                    <div className="user-profile">
                    <div 
                        className="profile-container"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        {user && user.foto ? (
                            <img 
                                src={user.foto} 
                                alt={user.nome} 
                                className="profile-pic"
                            />
                        ) : (
                            <div className="profile-icon">User</div>
                        )}
                        
                        {showDropdown && (
                            <div className="dropdown-menu">
                                {isAuthenticated ? (
                                    <>
                                        <Link to="/usuario_layout" className="dropdown-item">
                                            Perfil
                                        </Link>
                                        <span className="user-name">{user?.nome}</span>
                                        <button onClick={logout} className="dropdown-item">
                                            Sair da conta
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/login" className="dropdown-item">
                                            Fazer Login
                                        </Link>
                                        <Link to="/usuario" className="dropdown-item">
                                            Cadastrar
                                        </Link>
                                    </>
                                )}
                            </div>
                        )}
                    </div>
                </div>
                </div>
            </div>
        </header>
    );

}
export default Header;