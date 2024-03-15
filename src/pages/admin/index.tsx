import { Header } from "~/components/Header";
import { AddNewMovie } from "~/components/Movie/AddNewMovie";

const Admin = () => {
  return (
    <div>
      <Header />

      <main>
        <AddNewMovie />
      </main>
    </div>
  );
};

export default Admin;
