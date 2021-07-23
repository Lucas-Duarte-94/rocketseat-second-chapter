import { Summary } from "../Summary";
import { TrasactionsTable } from "../TrasactionsTable";
import { Container } from "./style";


export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TrasactionsTable />
        </Container>
    )
}