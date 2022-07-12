import { useState, useMemo, useEffect } from "react";
import { Column, FullColumn, Input } from "src/components";
import { useQuery } from "@apollo/client";
import { GET_TRANSACTIONS, mockData } from "src/constants";
import { Filter } from "./components/filter";




const Base = () => {
    const [filterText, setFilterText] = useState("");
    const memoizedFilterText = useMemo(() => filterText, [filterText]);
    const { loading, data } = useQuery(GET_TRANSACTIONS);

    return <Column width="100%" align="center" justify="center" height="100%">
        <FullColumn gap={2} padding="2rem" width="40%" align="center" justify="center" wrap="wrap" >
            {loading && <Column align="center" justify="center" width="100%" height="100vh">Fetching data 🙂...</Column>}
            {
                data && !loading && <>

                    <Input placeholder="Search items" label="Search items"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <Filter {...{ filterText: memoizedFilterText, initialItems: data?.getTransactions?.data, setFilter: setFilterText }} />
                </>
            }
        </FullColumn>
    </Column>

}

export default Base;