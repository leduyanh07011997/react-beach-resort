import {createClient} from 'contentful'
import { createContext } from 'react'

export default createClient({
    space:  process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
}) 