// import useUsers from "../features/users/hooks/useUsers";
import { User } from "../types/createUserType";
import useUsers from "../features/users/hooks/useUsers";

const UsersPage = () => {
    const { users, loading } = useUsers();
    if (loading) return <p>Cargando usuarios...</p>
    
    // const users = useSelector((state: RootState) => state.users.items);
    // const dispatch = useDispatch();
  
    // useEffect(() => {
    //   const loadUsers = async () => {
    //     const data = await fetchUsers();
    //     dispatch(setUsers(data));
    //   };
    //   loadUsers();
    // }, [dispatch]);
    
    return (
      <div>
        users
        {
            users.map((user: User) => {
                return <div key={user.Email}>Name: {user.Email}</div>
            })
        }
      </div>
    );
  };
  
export default UsersPage;