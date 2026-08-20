import Loading from "@/components/shared/loading/loading"
import NetworkError from "@/components/shared/networkerror/networkerror"
import useFetchData from "@/hooks/useFetchData"
import { Course } from "@/types/course"
import { Link, useRouter } from "expo-router"
import { useState } from "react"
import { Button, StyleSheet, Switch, Text, TouchableOpacity, View } from "react-native"

interface ApiResponse {
  courses: Course[]
}

interface ItemData {
  id: number
  title: string
}

export default function Index() {


  const [keyword, setKeyword] = useState()
  const [isEnabled, setIsEnabled] = useState(true)
  const { data, loading, error, onReload } = useFetchData('/search', { q: keyword })
  const courses = (data as ApiResponse)?.courses || []
  const [count, setCount] = useState(1)
  const router = useRouter()


  if (loading) {
    return <Loading />
  }
  if (error) {
    return <NetworkError title='OMG, where is my network?' onReload={onReload} />
  }
  const toggleSwitch = () => setIsEnabled(previousState => !previousState)

  return (
    <View style={styles.container}>

      <View>
        <Switch onValueChange={toggleSwitch} value={isEnabled} />
      </View>

      <Text>{count}</Text>
      <Button
        title="Click"
        onPress={() => setCount(count * 2)}
      />


      <Link
        style={styles.link}
        href={{
          pathname: '/courses/[id]',
          params: { id: 2, title: 'React Native' }
        }}>
        Link use params
      </Link>

      <TouchableOpacity onPress={() => router.navigate({
        pathname: '/courses/[id]',
        params: { id: 4, title: 'Expo' }
      })}>
        <Text style={styles.buttonText}>
          navigate use params
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    color: '#111192',
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    lineHeight: 40,
  },
  header: {
    textAlign: "center",
    fontSize: 40,
    lineHeight: 60,
    fontWeight: "bold",
    marginVertical: 10,
  },
  footer: {
    textAlign: "center",
    fontSize: 18,
    lineHeight: 40,
    color: "#999",
  },
  link: {
    marginTop: 20,
    fontSize: 20,
    color: '#1bd1f6',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 25,
    color: '#ff7f6f',
  },
})

