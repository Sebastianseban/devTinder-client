import { useQuery } from "@tanstack/react-query"
import useFeedStore from "../store/useFeedStore"
import { feedApi } from "../api/feedApi"



export const useFeed = () => {
    const {setFeed} = useFeedStore()

    return useQuery({
        queryKey:["feed"],
        queryFn:feedApi.fetchFeed,
         onSuccess: (data) => {
      setFeed(data.data, data.pagination);
    },
  
    })
}