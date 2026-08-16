import { Course } from "@/types/course";
import { get } from '@/utils/request';
import { useEffect, useState } from "react";

export default function useFetchData(url: string, params = {}) {

    const [data, setData] = useState({})
    const [courses, setCourses] = useState<Course[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchData = async () => {

        try {
            const { data } = await get(url, params);
            setCourses(data.courses)
        } catch (err) {
            setError(true)
        }
        finally {
            setLoading(false)
        }
    };

    const onReload = async () => {
        setLoading(true);
        setError(false);
        await fetchData();
    }

    useEffect(() => {
        fetchData();
    }, [url, JSON.stringify(params)]);

    return {
        data,
        loading,
        error,
        setData,
        onReload,
    };

};