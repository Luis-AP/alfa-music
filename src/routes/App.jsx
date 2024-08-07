import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Layout from "./Layout";
import Login from "../components/Login";
import Albums from "../components/Albums";
import Artists from "../components/Artists";
import PlaylistForm from "../components/PlaylistForm";
import ProtectedRoute from "../contexts/ProtectedRout";
import ModifyForm from "../components/ModifyForm";
import ModifyPlaylist from "../components/ModifyPlaylist";
import DeletePlaylist from "../components/DeletePlaylist";
import ConfirmDelete from "../components/ConfirmDelete";
import Playlist from "../components/Playlist";
import AddSong from "../components/AddSong";
import ProfileInfo from "../components/ProfileInfo";

const App = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
                
            },
            {
                path: "albums",
                element: 
                    
                    <Albums/>,
                
            },
            {
                path: "artists",
                element: 
                    
                    <Artists/>,
                
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/form",
                
                element:
                <ProtectedRoute>
                     <PlaylistForm />
                </ProtectedRoute>
            },
            {
                path: "/modPlaylist",
                element: 
                <ProtectedRoute>
                    <ModifyPlaylist />,
                </ProtectedRoute>

            },
            {
                path: "/modForm",
                element:
                <ProtectedRoute>
                    <ModifyForm />,
                </ProtectedRoute>
            },
            {
                path: "/delPlaylist",
                element:
                <ProtectedRoute>
                    <DeletePlaylist />,
                </ProtectedRoute>
                 
            },
            {
                path: "confirmDelete",
                element: <ConfirmDelete/>
            },
            {
                path: "/customPlaylist",
                element: 
                <ProtectedRoute>
                    <Playlist />,
                </ProtectedRoute>
                
            },
            {
                path: "/addSong",
                element: 
                <ProtectedRoute>
                    <AddSong />,
                </ProtectedRoute>
            },
            {
                path: "*",
                element: <h1>Not Found</h1>,
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <ProfileInfo />
                    </ProtectedRoute>
                ),
            },
        ],
    },
], {basename: "/alfa-music/"});

export default App;
