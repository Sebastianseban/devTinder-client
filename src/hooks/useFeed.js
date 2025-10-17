import { useQuery } from "@tanstack/react-query"
import useFeedStore from "../store/useFeedStore"
import { feedApi } from "../api/feedApi"



export const useFeed = (filters) => {
    const {setFeed} = useFeedStore()

    return useQuery({
        queryKey:["feed",filters],
        queryFn: () => feedApi.fetchFeed(filters),
         onSuccess: (data) => {
      setFeed(data.data, data.pagination);
    },
  
    })
}