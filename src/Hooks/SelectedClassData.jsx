import { useQuery } from '@tanstack/react-query'
// import { useContext } from 'react'
// import { AuthContext } from '../Providers/AuthProviders'
import useAxiosSecure from './useAxiousSecure'
import useAuth from './useAUth'

const SelectedClassData = () => {
    const {user} = useAuth()
    // const token = localStorage.getItem('access-token')

    console.log(user);

    const [axiosSecure] = useAxiosSecure()

    const { data: classes = [], refetch } = useQuery({
        queryKey: ['selectedClass', user?.email],
        queryFn: async () => {
            const response = await axiosSecure(`/selectedClass?email=${user?.email}`)
            
            return response.data
        },
    })
    return [classes, refetch]
}

export default SelectedClassData
