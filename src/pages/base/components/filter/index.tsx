import { Table } from "src/containers";
import moment from "moment";
import { useMemo, useState } from "react";
import { Chip, Column, Paragraph, Row, Text } from "src/components";
import { capitalizeFirstLetter } from "src/utils/functions";
import { theme } from "src/utils/variables";

export const Filter = <T extends {
    id?: string | number;
    date?: string;
}>({ filterText, initialItems, setFilter }: {
    filterText: string;
    initialItems?: T[];
    setFilter: React.Dispatch<React.SetStateAction<string>>
}) => {
    const [searchOnly, setSearchOnly] = useState("All");


    // LOWERCASE SEARCH ONLY
    const memoizedSearchOnly = useMemo(() => {
        if (!searchOnly) return "all";
        return (searchOnly as string).toLowerCase();
    }, [searchOnly]);

    const memoizedSuggestions = useMemo(() => {
        if (!initialItems) return [];
        if (memoizedSearchOnly === "all") return [];
        const suggestions = initialItems.map((i) => i[memoizedSearchOnly as keyof T]);
        if (!suggestions) return [];
        return [...new Set(suggestions)];
    }, [memoizedSearchOnly, initialItems]);

    // SEARCH ONLY FIELDS GOTTEN FROM THE API RESPONSE
    const memoizedCategories = useMemo(() => {
        if (!initialItems) return [];
        const firstItem = initialItems[0];
        const firstItemKeysWithoutIdAndDate = Object.keys(firstItem).filter((i) => i !== "id" && i !== "date" && i !== "__typename");
        return firstItemKeysWithoutIdAndDate;
    }, [initialItems]);

    // FILTERED ITEM ARRAY BEFORE DATE SORTING
    const memoizedFilteredItems = useMemo(() => {
        const initialItemsWithoutId = initialItems ? initialItems.map(({ id, ...rest }) => rest) : [];
        return filterText === "" ? initialItems : initialItems ?
            initialItemsWithoutId.filter((item) => {
                return memoizedSearchOnly !== "all" ? (item[memoizedSearchOnly as keyof Omit<T, "id">] as unknown as string).toString().toLowerCase().includes(filterText.toString().toLowerCase()) : Object.values(item).some((value) => {
                    return (value as any).toString().toLowerCase().includes(filterText.toString().toLowerCase());
                }).toString() === "true";
            }) : [];
    }, [filterText, initialItems, memoizedSearchOnly]);

    // FILTERED ITEMS SORTED BY DATE
    const memoizedFilteredItemsGroupedByDate = useMemo(() => {
        if (!memoizedFilteredItems) return {};
        return memoizedFilteredItems.reduce((acc, curr) => {
            const date = curr.date as string;
            const humanReadableDate = moment(date).format("MMM Do YYYY");
            if (Object.keys(acc).includes(humanReadableDate)) {
                (acc[humanReadableDate as keyof {}] as unknown as Array<any>).push(curr);
            } else {
                acc = Object.assign(acc, {
                    [humanReadableDate]: [curr]
                })
            }
            return acc;
        }, {});
    }, [memoizedFilteredItems]);



    return (
        <>
            {
                initialItems && <>

                    <Row gap={2} align="center"
                        wrap="wrap"
                    >
                        <Paragraph weight="bold"> Search Only: </Paragraph>
                        <Chip
                            onClick={() => setSearchOnly("all")}
                            color={memoizedSearchOnly === "all" ? theme.blue[500] : theme.grey[500]}
                            background={memoizedSearchOnly === "all" ? `${theme.blue[500]}30` : `${theme.grey[500]}30`}
                        >
                            All
                        </Chip>
                        {
                            memoizedCategories.map((category, index) => <Chip
                                key={index}
                                color={memoizedSearchOnly === category.toLowerCase() ? theme.blue[500] : theme.grey[500]}
                                background={memoizedSearchOnly === category.toLowerCase() ? `${theme.blue[500]}30` : `${theme.grey[500]}30`}
                                onClick={() => setSearchOnly(category)}
                            >
                                {capitalizeFirstLetter(category)}
                            </Chip>)
                        }


                    </Row>
                    <Row gap={1} align="center" wrap="wrap"
                      
                    >
                        {
                            memoizedSuggestions.length > 0 && (<Paragraph weight="bold"> Filters: </Paragraph>)
                        }
                        {
                            memoizedSuggestions.map((suggestion, index) => <Chip
                                key={index}
                                color={theme.pink[500]}
                                background={`${theme.pink[500]}30`}
                                onClick={() => setFilter((suggestion as unknown as string).toString())}
                            >
                                {capitalizeFirstLetter((suggestion as unknown as string).toString())}
                            </Chip>)
                        }
                    </Row>


                    <Column width="100%">
                        <Paragraph weight="bold" color={theme.blue[500]} size="lg"> Results:</Paragraph>
                        <Column gap={2} width="100%"
                        >

                            {
                                Object.keys(memoizedFilteredItemsGroupedByDate).map((humanReadableDate, i) => <Column
                                    key={i}
                                    gap={1}
                                >
                                    <Paragraph weight="bold">
                                        {humanReadableDate}
                                    </Paragraph>
                                    {
                                        (memoizedFilteredItemsGroupedByDate[humanReadableDate as keyof {}] as Array<any>).map((item, idx) =>

                                            <Table
                                                key={idx}
                                                data={[item]}
                                                columns={
                                                    memoizedCategories.map((cat) => ({
                                                        title: capitalizeFirstLetter(cat),
                                                        dataIndex: cat,
                                                        render: (v: unknown) => {
                                                            const regex = new RegExp(filterText, "gi");
                                                            const match = (v as string).toString().match(regex);
                                                            return match && v && typeof v === "string" ? <div dangerouslySetInnerHTML={{ __html: (v as string).replace(regex, `<span style="color: ${theme.pink[500]};font-weight:bold">${match[0]}</span>`) }} /> : v;
                                                        }
                                                    })) as any[]
                                                }
                                                width="100%"
                                            />


                                        )
                                    }

                                </Column>)
                            }
                        </Column>
                    </Column>

                    {initialItems && Object.keys(memoizedFilteredItemsGroupedByDate).length < 1 && <><Paragraph>No results for <Text weight="bold" color={theme.pink[500]}>{filterText.toUpperCase()}</Text>.</Paragraph> </>}
                </>
            }


        </>
    );
}