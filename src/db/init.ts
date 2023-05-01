import Users from "./models/Users";

const isDev = true
const dbInit = () => {
    Users.sync({alter:isDev})
}
export default dbInit