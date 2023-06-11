import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProviders'

const SelectedClassData = email => {
    const { user } = useContext(AuthContext)

    const { refetch, data: classes = [] } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5000/selectedClass?email=${user.email}`)
            return response.json
        },
    })
    return [classes, refetch]
}

export default SelectedClassData
