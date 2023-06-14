import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAUth"
import useAxiosSecure from "./useAxiousSecure"

const useInstractor = () => {
    const {user} = useAuth()
    const [axiosSecure] = useAxiosSecure()

     const {data: isIstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey:['isIstractor', user?.email],
        queryFn: async() => {
            const res = await axiosSecure.get(`/users/insractor/${user?.email}`);
            console.log('Is Instractor response', res);
            return res.data.instractor
        }
     })

     return [isIstractor, isInstractorLoading]
}

export default useInstractor