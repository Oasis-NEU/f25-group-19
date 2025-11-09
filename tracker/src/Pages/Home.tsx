import { Navbar } from '../Components/Components';  // adjust path as needed
import Dashboard from '../Components/Dashboard';

function Home() {
  return (
    <>
      <Navbar />
      {/* Your page content */}
      <Dashboard />
    </>
  );
}

export default Home;