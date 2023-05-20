import React, { createContext, useState, useEffect } from "react";
import { fetchDataFromApi } from "../utils/api";

export const Context = createContext()

export const AppContext = (props) => {
    const [loading, setLoading] = useState(false)
    const [searchResult, setSearchResult] = useState([])
    const [selectCategory, setSelectCategory] = useState("New")
    const [mobileMenu, setMobileMenu] = useState(false)

    useEffect(() => {
        fetchSelectedCategories(selectCategory)
    }, [selectCategory])

    const fetchSelectedCategories = (query) => {
        setLoading(true)
        fetchDataFromApi(`search/?q=${query}`).then(({ contents }) => {
            console.log(contents)
            setSearchResult(contents)
            setLoading(false)
        })

    }


    return <Context.Provider value={{
        loading,
        setLoading,
        searchResult,
        selectCategory,
        setSelectCategory,
        mobileMenu,
        setMobileMenu,
    }}>
        {props.children}
    </Context.Provider>
}