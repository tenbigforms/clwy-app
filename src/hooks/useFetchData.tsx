import { useEffect, useState } from 'react'
import { get } from '@/utils/request'


const useFetchData = (url: string, params = {}) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [refreshing, setRefreshing] = useState(false)


  const fetchData = async () => {
    try {
      const { data } = await get(url, params);
      setData(data)
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  const onReload = async () => {
    setLoading(true)
    setError(false)
    await fetchData()
  }

  const onRefresh = async () => {
    setRefreshing(true)
    await fetchData()
    setRefreshing(false)
  }

  useEffect(() => {
    fetchData()
  }, [url, JSON.stringify(params)])

  return {
    data,
    loading,
    error,
    refreshing,
    setData,
    onReload,
    onRefresh,
  };
};

export default useFetchData