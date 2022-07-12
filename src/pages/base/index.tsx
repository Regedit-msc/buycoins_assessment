import { useState, useMemo, useEffect } from "react";
import { Column, FullColumn, Input } from "src/components";
import { useLazyQuery } from "@apollo/client";
import { GET_TRANSACTIONS, mockData } from "src/constants";
import { Filter } from "./components/filter";




const Base = () => {
    const [filterText, setFilterText] = useState("");
    const memoizedFilterText = useMemo(() => filterText, [filterText]);
    const [initialItems, setInitialItems] = useState<typeof mockData>();
    const [getData, { loading }] = useLazyQuery(GET_TRANSACTIONS);

    useEffect(() => {
        (async () => {
            const { data } = await getData();
            setInitialItems(data?.getTransactions?.data);
        })();
    }, []);



    return <Column width="100%" align="center" justify="center" height="100%">
        <FullColumn gap={2} padding="2rem" width="40%" align="center" justify="center" wrap="wrap" >
            {loading && !initialItems && <Column align="center" justify="center" width="100%" height="100vh">Fetching data 🙂...</Column>}
            {
                initialItems && <>

                    <Input placeholder="Search items" label="Search items"
                        onChange={(e) => setFilterText(e.target.value)}
                    />
                    <Filter {...{ filterText: memoizedFilterText, initialItems, setFilter: setFilterText }} />
                </>
            }
        </FullColumn>
    </Column>

}

export default Base;