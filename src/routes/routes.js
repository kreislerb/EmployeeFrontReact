
import EmployeePage from '../pages/FleetAvailability/EmployeesPage';
import PageNotFound from '../pages/PageNotFound/PageNotFound';


export const Routes = [
    {
        path: "/",
        name: "Visão Geral",
        component: (props) => <EmployeePage {...props} />
    },

    {
        path: "*",
        name: "Página Inválida",
        component: (props) => <PageNotFound {...props} />
    }

]