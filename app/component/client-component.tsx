'use client'

import React, { FC, useEffect, useState, ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "../store"

interface ClientOnlyProps {
    children: ReactNode;
}

const ClientOnly: FC<ClientOnlyProps> = ({ children }) => {
    return (
        <Provider store={store}>
          {children}
        </Provider>
    )
}

export default ClientOnly