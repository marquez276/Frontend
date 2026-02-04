import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';

import Header from './pages/Header/header';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Sobre from './pages/Sobre/sobre';
import Ajuda from "./pages/Ajuda/ajuda";

import Usuario from "./pages/Usuario/usuario";
import UsuarioLayout from "./pages/Usuario/usuario_layout";
import Favoritos from "./pages/Favoritos/favoritos";

import Projetos from "./pages/Projetos/projetos";
import ProjetoDetalhes from "./pages/ProjetoDetalhes/projetoDetalhes";
import EnviarIdeia from "./pages/EnviarIdeia/enviarIdeia";
import Dicas from "./pages/Dicas/dicas";

import AdminProjetos from "./pages/AdminProjetos/adminProjetos";
import AdminIdeias from "./pages/AdminIdeias/adminIdeias";
import AdminUsuarios from "./pages/AdminUsuarios/adminUsuarios";
import EditarProjeto from "./pages/EditarProjeto/editarProjeto";

function RoutesApp() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="sobre" element={<Sobre />} />
                        <Route path="ajuda" element={<Ajuda />} />
                        
                        <Route path="usuario" element={<Usuario />} />
                        <Route path="usuario_layout" element={<UsuarioLayout />} />
                        <Route path="favoritos" element={<Favoritos />} />
                        
                        <Route path="projetos" element={<Projetos />} />
                        <Route path="projetos/:id" element={<ProjetoDetalhes />} />
                        <Route path="enviar-ideia" element={<EnviarIdeia />} />
                        <Route path="dicas" element={<Dicas />} />
                        
                        <Route path="admin-projetos" element={<AdminProjetos />} />
                        <Route path="admin-ideias" element={<AdminIdeias />} />
                        <Route path="admin-usuarios" element={<AdminUsuarios />} />
                        <Route path="editar-projeto/:id" element={<EditarProjeto />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

function Layout() {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RoutesApp;
