import { Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
function App() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App;


// function App() {
//   const [name, setName] = useState('');
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [searched, setSearched] = useState(false);
//   const { character, status, error } = useSelector(state => state.character);
//   const { currentUser, error: authError } = useSelector(state => state.auth);

//   useEffect(() => {
//     const handlePopState = (event) => {
//       if (location.pathname === '/searchbar' && currentUser) {
//         const confirmLogout = window.confirm('Do you want to log out?');
//         if (confirmLogout) {
//           dispatch(logout());
//           // Clearing the search bar
//           setName('');
//           navigate('/login');
//         } else {
//           navigate(1);
//         }
//       }
//     };

//     window.addEventListener('popstate', handlePopState);

//     return () => {
//       window.removeEventListener('popstate', handlePopState);
//     };
//   }, [location, currentUser, navigate, dispatch]);

//   useEffect(() => {
//     if (location.pathname === '/searchbar' && !currentUser) {
//       // Clearing the search bar when the user log outs
//       setName('');
//       navigate('/login');
//     } else if (location.pathname === '/login') {
//       // Clearing the search bar when navigating to the login page
//       setName('');
//       setSearched(false);
//     }
//   }, [location, currentUser, navigate]);

//   const handleSearch = () => {
//     if (name.trim()) {
//       dispatch(fetchCharacter(name));
//       setSearched(true);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       handleSearch();
//     }
//   };

//   const handleLogout = () => {
//     const confirmLogout = window.confirm('Do you want to log out?');
//     if (confirmLogout) {
//       dispatch(logout());
//       setName('');
//       setSearched(false);
//       navigate('/login');
//     }
//   };

//   return (
//     <div
//       className="flex flex-col items-center min-h-screen py-10 bg-cover bg-center"
//       style={{ backgroundImage: `url(${narutoBackground})` }}
//     >
//       <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
//         <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Naruto Character Search</h1>
//         {authError && <p className="text-red-500">{authError}</p>}
//         {currentUser ? (
//           <>
//             <div className="flex mb-6 justify-center">
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="p-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Enter character name"
//               />
//               <button
//                 onClick={handleSearch}
//                 className="ml-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//               >
//                 Search
//               </button>
//             </div>
//             <button
//               onClick={handleLogout}
//               className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 mb-4"
//             >
//               Logout
//             </button>
//             <div>
//               {status === 'loading' && <p className="text-gray-800">Loading...</p>}
//               {status === 'failed' && <p className="text-red-500">Error: {error}</p>}
//               {status === 'succeeded' && character && searched && (
//                 <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-md text-left">
//                   <h2 className="text-2xl font-bold mb-2 text-gray-800">{character.name}</h2>
//                   <img src={character.images[0]} alt={character.name} className="max-w-xs mx-auto mb-4" />
//                   <p className="text-gray-700"><strong>Debut:</strong> {character.debut.manga || 'N/A'}, {character.debut.anime || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Appears In:</strong> {character.debut.appearsIn || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Sex:</strong> {character.personal.sex || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Age:</strong> {character.personal.age['Part I'] || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Affiliation:</strong> {character.personal.affiliation || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Ninja Rank:</strong> {character.rank.ninjaRank['Part I'] || 'N/A'}</p>
//                   <p className="text-gray-700"><strong>Voice Actor:</strong> {character.voiceActors.english || 'N/A'}</p>
//                 </div>
//               )}
//               {status === 'succeeded' && !character && searched && (
//                 <p className="text-gray-800">No character found</p>
//               )}
//             </div>
//           </>
//         ) : (
//           <Routes>
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/" element={<Navigate to="/login"/>} />
//         </Routes>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;





